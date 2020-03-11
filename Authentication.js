/**
 * A JavaScript file to allow for users to be authenticated.
 *
 *
 *
 * @author Connor Forsyth, Mbongeni Gulu, Louis Evans.
 * @since  20/2/2020
 */

// get login data from form //
const login = document.getElementById('login');
const signUp = document.getElementById('signUp');

// use firebase to create a new user in the database //
function registerUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(value) {
	// log all changes //
    console.log("signed up");
  }).catch(function(error) {

  });
}
// event listener to handle errors/correct formatting during login //
login.addEventListener('click', e => {


  const emailTxt = document.getElementById('email_address');
  const passwordTxt = document.getElementById('password');

  var email = emailTxt.value;
  var pass = passwordTxt.value;
  var userName = email.replace('@exeter.ac.uk', '');
  localStorage.setItem("studentName", userName);
  firebase.database().ref('players/'+userName).equalTo(userName).once("value", snapshot => {
   if (snapshot.exists()){
      console.log("exists!");
    } else {
      coords = {lat:0,lng:0};
      firebase.database().ref('players/'+userName).set({
      clues : 0,
      playerName: name,
      playerCoordinates: coords,
      playerLocation:"FORUM",
      playerRoute:"Forum-Ram-Harrison",
      });
    }
  });




    firebase.auth().signInWithEmailAndPassword(email, pass)
    .catch(function(error) {
      alert("Password or User Name are incorrect. Please Try Again");

      var errorCode = error.code;
      var errorMessage = error.message;


    });


});
// event listener to handle errors/correct formatting during register //
signUp.addEventListener('click', e => {

  const emailTxt = document.getElementById('email_address');
  const passwordTxt = document.getElementById('password');

  console.log('signing up');
  var email = emailTxt.value.toString();
  var pass = passwordTxt.value.toString();


  //verification for exeter email
  var substring = "exeter.ac.uk";
  if (email.includes(substring)) {
    registerUser(email, pass);
  } else {
    alert("Exeter Email Address is Required");
  }

});

// realtime listener to log user logins and redirect them accordinly //
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);

    document.location.href = "studentGame.html";
  } else {
    console.log('not logged in');
  }
});
