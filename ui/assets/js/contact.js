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
  
//   console.log(firebase);
//Reference messages collection
// var messagesRef = firebase.database().ref('message');

//Listen for form submit
// document.getElementById('contact-form').addEventListener('submit', submitForm);
// document.querySelector('.contact-form').addEventListener('submit',submitForm);
//Submit form
// function submitForm(e){
//     e.preventDefault();
//     console.log('123');
//Get values
//     var name = getInputval('name');
//     var email = getInputval('email');
//     var telephone = getInputval('Telephone');
//     var message = getInputval('message');
// }

//Save message
// saveMessage(name, email, telephone, message);

//function to get get form values
// function getInputval(id){
//     return document.getElementById(id).value;
// }
// console.log('hhhhh');
//Save message to firebase
// function saveMessage(name, email, telephone,message){
//     db.collection("message").doc().set({
//         'name': name,
//         'email': email,
//         'telephone': telephone,
//         'message': message
//     })
//     .then(function() {
//         console.log("Document successfully written!");
//     })
//     .catch(function(error) {
//         console.error("Error writing document: ", error);
//     })
// }



var db=firebase.firestore();
document.getElementById('contact-form').addEventListener('submit', submitForm);
function submitForm(e) {    
    e.preventDefault();
    var fullname=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    var telephone=document.getElementById('telephone').value;
    var message=document.getElementById('message').value;
    
    if(fullname === '' || email === '' ||message === '') {
      document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Please fill the input field';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
    } else {
    saveName(fullname,email,telephone,message);
    console.log(myInput('subject'));
}
function saveName(a,b,c,d) {
db.collection('message').add({
    fullname:a,
    email:b,
    telephone:c,
    message:d
})
.then(function (){console.log('Contact Saved');
document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Message sent';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
})
.catch(function (error){console.log(error);})
}
}
// function myInput(id) {
//     return document.getElementById(id).value;
// }