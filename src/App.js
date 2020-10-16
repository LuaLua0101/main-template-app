import React, { useEffect } from "react"
import { GlobalStateProvider } from "./Store"
import RouteMap from "./Route"
import { BrowserRouter as Router } from "react-router-dom"
import "antd/dist/antd.css"
import { db, storage } from "./firebase"
import './fcm'

const storageRef = storage.ref()

const App = () => {
  useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data())
        console.log(data) // array of cities objects
      })
    //==========
    var listRef = storageRef

    // Find all the prefixes and items.
    listRef
      .listAll()
      .then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      })
  }, [])

  return (
    <GlobalStateProvider>
      <Router>
        <RouteMap />
      </Router>
    </GlobalStateProvider>
  )
}

export default App
