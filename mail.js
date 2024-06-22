const firebaseConfig = {
    apiKey: "AIzaSyDhMcYw_wad9C1Ltit4E7CVxHaTA7u4os0",
    authDomain: "alphaelectronics-dfa7c.firebaseapp.com",
    databaseURL: "https://alphaelectronics-dfa7c-default-rtdb.firebaseio.com",
    projectId: "alphaelectronics-dfa7c",
    storageBucket: "alphaelectronics-dfa7c.appspot.com",
    messagingSenderId: "681553306611",
    appId: "1:681553306611:web:5473b4444a44f76df8a886",
    measurementId: "G-TCSYMXYGS8"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };