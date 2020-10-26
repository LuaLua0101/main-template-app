import React, { useState, useEffect, useRef } from "react"
import io from "socket.io-client"

const socket = io("http://0c11d621d7f3.ngrok.io/")
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
  let localStream;
  const roomSelectionContainer = useRef(null);
  const videoChatContainer = useRef(null)
  const localVideoComponent = useRef(null)
  const remoteVideoComponent = useRef(null)
  const [remoteStream, setRemoteStreamValue] = useState();
  const [isRoomCreator, setIsRoomCreator] = useState(true);
  const [_rtcPeerConnection, setRTCPeerConnection] = useState();
  const [roomInput, setRoomInput] = useState(123);

  useEffect(() => {
    socket.on('room_created', async () => {
      console.log('Socket event callback: room_created')

      await setLocalStream(mediaConstraints)
      setIsRoomCreator(true)
    })

    socket.on('room_joined', async () => {
      console.log('Socket event callback: room_joined')

      await setLocalStream(mediaConstraints)
      socket.emit('start_call', roomInput)
    })

    socket.on('full_room', () => {
      console.log('Socket event callback: full_room')

      alert('The room is full, please try another one')
    })

    socket.on('start_call', async () => {
      console.log('Socket event callback: start_call')
      if (isRoomCreator) {
        console.log('start video call')
        const tmp = new RTCPeerConnection(iceServers)
        setRTCPeerConnection(tmp)
        addLocalTracks(tmp)
        setRTCPeerConnection({
          ...tmp,
          ontrack: setRemoteStream,
          onicecandidate: sendIceCandidate
        })
        createOffer(tmp)
      }
    })

    socket.on('webrtc_offer', async (event) => {
      console.log('Socket event callback: webrtc_offer')

      if (!isRoomCreator) {
        const tmp = new RTCPeerConnection(iceServers)
        setRTCPeerConnection(tmp)
        addLocalTracks(tmp)
        setRTCPeerConnection({
          ...tmp,
          ontrack: setRemoteStream,
          onicecandidate: sendIceCandidate
        })
        tmp.setRemoteDescription(new RTCSessionDescription(event))
        await createAnswer(tmp)
      }
    })

    socket.on('webrtc_answer', (event) => {
      console.log('Socket event callback: webrtc_answer')

      _rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
    })

    socket.on('webrtc_ice_candidate', (event) => {
      console.log('Socket event callback: webrtc_ice_candidate')

      var candidate = new RTCIceCandidate({
        sdpMLineIndex: event.label,
        candidate: event.candidate,
      })
      _rtcPeerConnection.addIceCandidate(candidate)
    })
  }, []);

  const joinRoom = room => {
    if (room === '') {
      alert('Please type a room ID')
    } else {
      setRoomInput(room)
      socket.emit('join', room)
      showVideoConference()
    }
  }

  const showVideoConference = () => {
    roomSelectionContainer.current.style = 'display: none'
    videoChatContainer.current.style = 'display: block'
  }

  const setLocalStream = async mediaConstraints => {
    let stream
    try {
      stream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
    } catch (error) {
      console.error('Could not get user media', error)
    }

    localStream = stream
    localVideoComponent.current.srcObject = stream
  }

  const addLocalTracks = (rtcPeerConnection) => {
    localStream.getTracks().forEach((track) => {
      rtcPeerConnection.addTrack(track, localStream)
    })
  }

  const createOffer = async rtcPeerConnection => {
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
      roomId: roomInput,
    })
  }

  const createAnswer = async rtcPeerConnection => {
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
      roomId: roomInput,
    })
  }

  const setRemoteStream = (event) => {
    remoteVideoComponent.current.srcObject = event.streams[0]
    setRemoteStreamValue(event.stream)
  }

  const sendIceCandidate = (event) => {
    if (event.candidate) {
      socket.emit('webrtc_ice_candidate', {
        roomId: roomInput,
        label: event.candidate.sdpMLineIndex,
        candidate: event.candidate.candidate,
      })
    }
  }

  return (<>
    <div className="centered" ref={roomSelectionContainer}>
      <h1>WebRTC video conference</h1>
      <label>Enter the number of the room you want to connect</label>
      {/* <input id="room-input" type="text" onChange={e => {
        console.log(e.target.value)
        setRoomInput(e.target.value)
      }} /> */}
      <button id="connect-button" onClick={() => joinRoom(roomInput)}>CONNECT</button>
    </div>

    <div ref={videoChatContainer} className="video-position" >
      <video id="local-video" ref={localVideoComponent} autoPlay="autoplay" muted="muted"></video>
      <video id="remote-video" ref={remoteVideoComponent} autoPlay="autoplay"></video>
    </div>
  </>
  );
};

export default WebcamStreamCapture