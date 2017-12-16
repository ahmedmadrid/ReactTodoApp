import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCDDlwuxeD9h4Zov7JFMrqHTEkYruHW6MY",
      authDomain: "silver-todo-app.firebaseapp.com",
      databaseURL: "https://silver-todo-app.firebaseio.com",
      projectId: "silver-todo-app",
      storageBucket: "silver-todo-app.appspot.com",
      messagingSenderId: "33671635521"
    };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
