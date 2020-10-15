import * as firebase from "firebase"
import "@firebase/messaging"
import { notification, Icon } from "antd"
import React from "react"

firebase.initializeApp({
  apiKey: "AIzaSyD7U24KhqiMqjQi6Ib6I86_obfPyaUhu84",
  authDomain: "fir-deploy-1dd8f.firebaseapp.com",
  databaseURL: "https://fir-deploy-1dd8f.firebaseio.com",
  projectId: "fir-deploy-1dd8f",
  storageBucket: "fir-deploy-1dd8f.appspot.com",
  messagingSenderId: "290323303826",
  appId: "1:290323303826:web:07aa7314a0aa534821054b",
  measurementId: "G-KZF4T6HJE3",
})

const db = firebase.firestore()
const storage = firebase.storage()
const messaging = firebase.messaging()

export { db, storage, messaging }

const openNotification = (data) => {
  notification.open({
    message: data.title,
    description: data.body,
    icon: <Icon type="message" style={{ color: "#108ee9" }} />,
  })
}
messaging.usePublicVapidKey(
  "BMcTJsADWzGznVv31dvH1IajXCCmheyuLyRRAWkaOOivlbHJk2JUUlwv7GlZNGOztL3nGqmPkYIfrxvycHrd_o8"
)
messaging
  .getToken()
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken)
    } else {
      // Show permission request.
      console.log(
        "No Instance ID token available. Request permission to generate one."
      )
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err)
  })

messaging.onMessage((payload) => {
  console.log("Message received. ", payload)
  openNotification({
    title: payload.notification.title,
    body: payload.notification.body,
  })
})
