
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


var messagesdb=firebase.database().ref("message");

document.getElementById('contact-form').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
    var fullname=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    var telephone=document.getElementById('telephone').value;
    var message=document.getElementById('message').value;
addmessage(fullname, email, telephone, message);
document.getElementById('contact-form').reset();
}
function addmessage (fullname, email, telephone, message) {
  var newMessagedb = messagesdb.push();
  newMessagedb.set({
    name: fullname,
    email: email,
    telephone: telephone,
    message: message
  })
    }
// function myInput(id) {
//     return document.getElementById(id).value;
// }