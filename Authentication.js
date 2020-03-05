/**
 * A JavaScript file to allow for users to be authenticated.
 *
 *
 *
 * @author Connor Forsyth, Mbongeni Gulu, Louis Evans.
 * @since  20/2/2020
 */


const login = document.getElementById('login');
const signUp = document.getElementById('signUp');

function registerUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(value) {
    console.log(value);
  }).catch(function(error) {
    console.log(error);
  });
}

login.addEventListener('click', e => {

  const emailTxt = document.getElementById('email_address');
  const passwordTxt = document.getElementById('password');

  var email = emailTxt.value;
  var pass = passwordTxt.value;
  var userName = email.replace('@exeter.ac.uk', '')
  localStorage.setItem("studentName", userName);
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    alert("Password or User Name are incorrect. Please Try Again");

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

  });
});

signUp.addEventListener('click', e => {

  const emailTxt = document.getElementById('email_address');
  const passwordTxt = document.getElementById('password');

  console.log('signing up');
  var email = emailTxt.value.toString();
  var pass = passwordTxt.value.toString();
  console.log(pass);

  //verification for exeter email
  var substring = "exeter.ac.uk"
  if (email.includes(substring)) {
    registerUser(email, pass);
  } else {
    alert("Exeter Email Address is Required");
  }

});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    document.location.href = "studentGame.html";
  } else {
    console.log('not logged in')
  }
});
