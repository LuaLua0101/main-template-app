import { messaging } from './firebase'
import { notification, Icon } from "antd"
import React from "react"

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

messaging.requestPermission()
  .then(function () {
    console.log('Notification permission granted.');
    messaging
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken)
        } else {
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
  })
  .catch(function (err) {
    console.log('Unable to get permission to notify. ', err);
  });
