

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
            console.log(errorCode);
            console.log(errorMessage);

    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser);
        }
        else{
            document.location.href = "introPage.html";
        }
    });

});
