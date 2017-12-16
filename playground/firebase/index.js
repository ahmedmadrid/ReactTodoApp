import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCDDlwuxeD9h4Zov7JFMrqHTEkYruHW6MY",
    authDomain: "silver-todo-app.firebaseapp.com",
    databaseURL: "https://silver-todo-app.firebaseio.com",
    projectId: "silver-todo-app",
    storageBucket: "silver-todo-app.appspot.com",
    messagingSenderId: "33671635521"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRuning: true,
  user: {
    name: 'Ahmed',
    age: 25
  }
});
