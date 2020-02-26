
/**
 * A JavaScript file to allow for users to log out of the game.
 *
 * 
 *
 * @author Mbongeni Gulu, Louis Evans.
 * @since  20/2/2020
 */

const firebaseConfig = {
    apiKey: "AIzaSyA38bRGCRCA5d58dRpjbg56iDEwXmvoT8s",
    authDomain: "groupsoftware-25ee9.firebaseapp.com",
    databaseURL: "https://groupsoftware-25ee9.firebaseio.com",
    projectId: "groupsoftware-25ee9",
    storageBucket: "groupsoftware-25ee9.appspot.com",
    messagingSenderId: "1031394181045",
    appId: "1:1031394181045:web:1de897f3b3aa98d89b23fc"
};

firebase.initializeApp(firebaseConfig);

const out = document.getElementById("exitGame");

out.addEventListener('click', e => {
    console.log('logging out')
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log()
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

