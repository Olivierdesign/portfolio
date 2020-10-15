var firebaseConfig = {
    apiKey: "AIzaSyAel5BGU8rtQWTKGefz8fWHecaNpeGI9Vk",
    authDomain: "contactform-7f14f.firebaseapp.com",
    databaseURL: "https://contactform-7f14f.firebaseio.com",
    projectId: "contactform-7f14f",
    storageBucket: "contactform-7f14f.appspot.com",
    messagingSenderId: "817079134800",
    appId: "1:817079134800:web:b9fe1d0e9b7ba65fb3ff55",
    measurementId: "G-QP7LKQ2699"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  document.getElementById('signupform').addEventListener('submit', submitForm);
function submitForm(e) {    
    e.preventDefault();
    var fullname=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('psw').value;
    var repeatpsw=document.getElementById('psw2').value;
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });