import React, { useState, useEffect, useRef } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:8000/")
const mediaConstraints = {
  audio: true,
  video: { width: 1280, height: 720 },
}

// Free public STUN servers provided by Google.
const iceServers = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' },
  ],
}

const WebcamStreamCapture = () => {
  let localStream
  let remoteStream
  let isRoomCreator
  let rtcPeerConnection

  const roomSelectionContainer = useRef(null);
  const videoChatContainer = useRef(null)
  const localVideoComponent = useRef(null)
  const remoteVideoComponent = useRef(null)

  const [roomId, setRoomId] = useState(123);

  useEffect(() => {
    // SOCKET EVENT CALLBACKS =====================================================
    socket.on('room_created', async () => {
      console.log('Socket event callback: room_created')

      await setLocalStream(mediaConstraints)
      isRoomCreator = true
    })

    socket.on('room_joined', async () => {
      console.log('Socket event callback: room_joined')

      await setLocalStream(mediaConstraints)
      socket.emit('start_call', roomId)
    })

    socket.on('full_room', () => {
      console.log('Socket event callback: full_room')

      alert('The room is full, please try another one')
    })

    socket.on('start_call', async () => {
      console.log('Socket event callback: start_call')

      if (isRoomCreator) {
        rtcPeerConnection = new RTCPeerConnection(iceServers)
        addLocalTracks(rtcPeerConnection)
        rtcPeerConnection.ontrack = setRemoteStream
        rtcPeerConnection.onicecandidate = sendIceCandidate
        await createOffer(rtcPeerConnection)
      }
    })

    socket.on('webrtc_offer', async (event) => {
      console.log('Socket event callback: webrtc_offer')

      if (!isRoomCreator) {
        rtcPeerConnection = new RTCPeerConnection(iceServers)
        addLocalTracks(rtcPeerConnection)
        rtcPeerConnection.ontrack = setRemoteStream
        rtcPeerConnection.onicecandidate = sendIceCandidate
        rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
        await createAnswer(rtcPeerConnection)
      }
    })

    socket.on('webrtc_answer', (event) => {
      console.log('Socket event callback: webrtc_answer')

      rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
    })

    socket.on('webrtc_ice_candidate', (event) => {
      console.log('Socket event callback: webrtc_ice_candidate')

      // ICE candidate configuration.
      var candidate = new RTCIceCandidate({
        sdpMLineIndex: event.label,
        candidate: event.candidate,
      })
      rtcPeerConnection.addIceCandidate(candidate)
    })
  }, []);

// FUNCTIONS ==================================================================
function joinRoom(room) {
  if (room === '') {
    alert('Please type a room ID')
  } else {
    socket.emit('join', room)
    showVideoConference()
  }
}

function showVideoConference() {
  roomSelectionContainer.current.style = 'display: none'
  videoChatContainer.current.style = 'display: block'
}

async function setLocalStream(mediaConstraints) {
  let stream
  try {
    stream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
  } catch (error) {
    console.error('Could not get user media', error)
  }

  localStream = stream
  localVideoComponent.current.srcObject = stream
}

function addLocalTracks(rtcPeerConnection) {
  localStream.getTracks().forEach((track) => {
    rtcPeerConnection.addTrack(track, localStream)
  })
}

async function createOffer(rtcPeerConnection) {
  let sessionDescription
  try {
    sessionDescription = await rtcPeerConnection.createOffer()
    rtcPeerConnection.setLocalDescription(sessionDescription)
  } catch (error) {
    console.error(error)
  }

  socket.emit('webrtc_offer', {
    type: 'webrtc_offer',
    sdp: sessionDescription,
    roomId,
  })
}

async function createAnswer(rtcPeerConnection) {
  let sessionDescription
  try {
    sessionDescription = await rtcPeerConnection.createAnswer()
    rtcPeerConnection.setLocalDescription(sessionDescription)
  } catch (error) {
    console.error(error)
  }

  socket.emit('webrtc_answer', {
    type: 'webrtc_answer',
    sdp: sessionDescription,
    roomId,
  })
}

function setRemoteStream(event) {
  remoteVideoComponent.current.srcObject = event.streams[0]
  remoteStream = event.stream
}

function sendIceCandidate(event) {
  if (event.candidate) {
    socket.emit('webrtc_ice_candidate', {
      roomId,
      label: event.candidate.sdpMLineIndex,
      candidate: event.candidate.candidate,
    })
  }
}

  return (<>
    <div className="centered" ref={roomSelectionContainer}>
      <h1>WebRTC video conference</h1>
      <label>Enter the number of the room you want to connect</label>
      <button id="connect-button" onClick={() => joinRoom(roomId)}>CONNECT</button>
    </div>

    <div ref={videoChatContainer} className="video-position" >
      <video id="local-video" ref={localVideoComponent} autoPlay="autoplay" muted="muted"></video>
      <video id="remote-video" ref={remoteVideoComponent} autoPlay="autoplay"></video>
    </div>
  </>
  );
};

export default WebcamStreamCapture