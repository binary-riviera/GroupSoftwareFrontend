/**
 * A JavaScript file to allow for users to be authenticated.
 *
 *
 *
 * @author Connor Forsyth
 * @since  20/2/2020
 */

const login = document.getElementById('login');
login.addEventListener('click', e => {

  const emailTxt = document.getElementById('email_address');
  const passwordTxt = document.getElementById('password');

  var email = emailTxt.value;
  var pass = passwordTxt.value;

  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {

    alert("Password or User Name are incorrect. Please Try Again");
    var errorCode = error.code;
    var errorMessage = error.message;
  });
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    document.location.href = "gamekeeper.html";
  } else {
    console.log('not logged in')
  }
});
