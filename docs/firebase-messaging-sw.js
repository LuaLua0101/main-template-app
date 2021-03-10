importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js")

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

var messaging = firebase.messaging()

messaging.usePublicVapidKey(
  "BMcTJsADWzGznVv31dvH1IajXCCmheyuLyRRAWkaOOivlbHJk2JUUlwv7GlZNGOztL3nGqmPkYIfrxvycHrd_o8"
)
messaging.setBackgroundMessageHandler(function (payload) {
  var notificationTitle = payload.notification.title
  var notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  }
  console.log(payload)
  return messaging.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
