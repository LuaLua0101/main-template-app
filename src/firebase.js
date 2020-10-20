import * as firebase from "firebase"
import "firebase/auth"

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
const remoteConfig = firebase.remoteConfig()

export { db, storage, messaging, remoteConfig }
