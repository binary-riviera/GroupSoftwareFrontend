/**
 * A JavaScript file to allow for users to be authenticated.
 *
 *
 *
 * @author Connor Forsyth
 * @since  20/2/2020
 */
const db = firebase.firestore();

const login = document.getElementById('login');


login.addEventListener('click', e => {

  const emailTxt = document.getElementById('email_address');
  const passwordTxt = document.getElementById('password');
  const keyTxt = document.getElementById('key');

  var email = emailTxt.value;
  var pass = passwordTxt.value;
  var keyVal = keyTxt.value;
  console.log(keyVal);

  db.collection('Key').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      var code = doc.data().code;

      if(code == keyVal){
        console.log(code);
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {

          alert("Password or User Name are incorrect. Please Try Again");
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      }else{
        alert("Key is incorrect. Please Try Again");
      }
    });
  });

});


firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    document.location.href = "gamekeeper.html";
  } else {
    console.log('not logged in')
  }
});
