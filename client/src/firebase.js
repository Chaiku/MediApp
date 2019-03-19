import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvkwSoHXFRHtkWRgrmH7Y-amqSTqJ0bk0",
    authDomain: "mediapp-38a59.firebaseapp.com",
    databaseURL: "https://mediapp-38a59.firebaseio.com",
    projectId: "mediapp-38a59",
    storageBucket: "mediapp-38a59.appspot.com",
    messagingSenderId: "232848288063"
  };
  firebase.initializeApp(config);

  export default firebase;