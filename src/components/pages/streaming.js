import React, { useState, useEffect } from "react"
import Camera from "react-html5-camera-photo"
import io from "socket.io-client"
import Webcam from "react-webcam";

const socket = io("http://localhost:8000")

const videoConstraints = {
  aspectRatio: 0.6666666667,
  facingMode: "user"
};

const Streaming = (props) => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const [inRoom, setInRoom] = useState(false)
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  
  useEffect(() => {
    setInterval(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, 1);

    return () => {
      clearInterval()
    }
  }, []);

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
    inRoom ? setInRoom(false) : setInRoom(true)
  }

  const handleNewMessage = () => {
    console.log("emitting new message")
    socket.emit("new message", {
      room: "test-room",
    })
    setCount(count + 1)
  }

  const handleTakePhoto = (dataUri) => {
    console.log("takePhoto")
  }

  return (
    <>
      {/* <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri)
        }}
      /> */}
      <Webcam  videoConstraints={videoConstraints}
        width={window.width / 2}
        ref={webcamRef}
        screenshotQuality={1}
        onUserMedia={() => {

        }}/>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
      <header className="App-header">
        <h1>
          {inRoom && `You Have Entered The Room`}
          {!inRoom && `Outside Room`}
        </h1>

        <p>{count} messages have been emitted</p>
        <p>{message} messages from server</p>

        {inRoom && <button onClick={handleNewMessage}>Emit new message</button>}

        <button onClick={handleInRoom}>
          {inRoom && `Leave Room`}
          {!inRoom && `Enter Room`}
        </button>
      </header>
    </>
  )
}

export default Streaming
