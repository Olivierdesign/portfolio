  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC6w5-nZISQZLZTDYzQfVWRdr31NOFMpks",
    authDomain: "portfolio-2c210.firebaseapp.com",
    databaseURL: "https://portfolio-2c210.firebaseio.com",
    projectId: "portfolio-2c210",
    storageBucket: "portfolio-2c210.appspot.com",
    messagingSenderId: "730713652270",
    appId: "1:730713652270:web:e1ff2507783eaf59b973bf",
    measurementId: "G-Y9VZQME0B6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference contactInfo collections
  var contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector('.contactForm').addEventListener('submit', submitForm);
  // document.getElementById('contact-form').addEventListener('submit', submitForm);
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var telephone = document.querySelector(".telephone").value;
    var message = document.querySelector(".message").value;
    console.log(name, email, telephone, message);
  
    saveContactInfo(name, email, telephone, message);
  
    document.querySelector(".contactForm").reset();
    var send = 
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, telephone, message) {
    var newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      telephone: telephone,
      message: message,
    });
  }