




const out = document.getElementById("exitGame");

out.addEventListener('click', e => {
  console.log('logging out')
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("logged out")
      var name = localStorage.getItem("studentName")
      var len = localStorage.getItem("lengthFeed");
      console.log(len);
      firebase.database().ref().child('feed').update({
          [len]:"Player " + name + " has left the game"
      });
      console.log('real time database updated with logging out');

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
