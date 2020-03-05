const out = document.getElementById("exitGame");

out.addEventListener('click', e => {
  console.log('logging out')
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("logged out")
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;


  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {

    } else {
      document.location.href = "introPage.html";
    }
  });

});
