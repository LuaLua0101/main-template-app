import React, { useState, useEffect } from "react"
import io from "socket.io-client"
import Webcam from "react-webcam";

const socket = io("http://localhost:8000")

const videoConstraints = {
  aspectRatio: 0.6666666667,
  facingMode: "user"
};

const audioConstraints = {
  aspectRatio: 0.6666666667,
  facingMode: "user"
};

const Streaming = (props) => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const [inRoom, setInRoom] = useState(false)
  const webcamRef = React.useRef(null);

  useEffect(() => {
    socket.on("hello", (payload) => {
      console.log("get mess grom server", payload)
    })
    if (inRoom) {
      console.log("joining room")
      socket.emit("room", { room: "test-room" })
    }

    return () => {
      if (inRoom) {
        console.log("leaving room")
        socket.emit("leave room", {
          room: "test-room",
        })
      }
    }
  }, [inRoom])

  const receiveMessage = (payload) => {
    console.log("get mess grom server", payload)
    setMessage(payload)
  }

  useEffect(() => {
    socket.on("receive message", receiveMessage)
    setCount(count + 1)
  }, [])

  const handleInRoom = () => {
    setInRoom(!inRoom)
  }

  const handleNewMessage = () => {
    console.log("emitting new message")
    socket.emit("new message", {
      room: "test-room",
    })
    setCount(count + 1)
  }

  return (
    <>
      <Webcam videoConstraints={videoConstraints}
        audioConstraints={audioConstraints}
        width={window.width / 10}
        ref={webcamRef}
        screenshotQuality={1}
        audio={true}
        onUserMedia={stream => {
          console.log(stream)
        }} />
      <h1>
        {inRoom && 'You Have Entered The Room'}
        {!inRoom && 'Outside Room'}
      </h1>
      <p>{count} messages have been emitted</p>
      <p>{message} messages from server</p>
      {inRoom && <button onClick={handleNewMessage}>Emit new message</button>}
      <button onClick={handleInRoom}>
        {inRoom && 'Leave Room'}
        {!inRoom && 'Enter Room'}
      </button>
    </>
  )
}

export default Streaming
