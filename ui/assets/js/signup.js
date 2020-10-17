  var auth = firebase.auth();
  document.getElementById('signupform').addEventListener('submit', submitForm);
function submitForm(e) {    
    e.preventDefault();
    var email=document.getElementById('email').value;
    var password=document.getElementById('psw').value;

    auth.createUserWithEmailAndPassword(email, password).then(
      window.location.assign(?????????)
    ).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}