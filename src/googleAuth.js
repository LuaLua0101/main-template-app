import * as firebase from "firebase"
import "firebase/auth";

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();
firebase.auth().languageCode = 'vi';

export const googleSignIn = () => {
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user)
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have already signed up with a different auth provider for that email.');
      } else {
        console.error(error);
      }
    });
  } else {
    firebase.auth().signOut();
  }
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user)
  } else {
  }
});