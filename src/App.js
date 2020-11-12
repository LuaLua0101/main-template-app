import React, { useEffect } from "react"
import { GlobalStateProvider } from "./Store"
import RouteMap from "./route"
// import "antd/dist/antd.css"
// import { db, storage } from "./firebase"
// import "./fcm"

// const storageRef = storage.ref()

const App = () => {
  // useEffect(() => {
  //   db.collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data())
  //       console.log(data)
  //     })
  //   var listRef = storageRef
  //   // Find all the prefixes and items.
  //   listRef
  //     .listAll()
  //     .then(function (res) {
  //       console.log(res)
  //     })
  //     .catch(function (error) {
  //     })
  // }, [])

  return (
    <GlobalStateProvider>
      <RouteMap />
    </GlobalStateProvider>
  )
}

export default App
