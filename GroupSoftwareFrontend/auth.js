(function(){
var firebase = require("firebase");

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

const emailTxt = document.getElementById('email_address');
const passwordTxt = document.getElementById('password');

const login = document.getElementById('login');
const signUp = document.getElementById('signUp');

const auth = firebase.auth();

login.addEventListener('click', e => {

    const email = emailTxt.value;
    const pass  = passwordTxt.value;

    auth.signInWithEmailAndPassword(email, pass).catch(function(e) {

        var errorCode = e.code;
        var errorMessage = e.message;
        consolde.log(errorCode);
        consolde.log(errorMessage);

      });
});

signUp.addEventListener('click', e => {

    const email = emailTxt.value;
    const pass  = passwordTxt.value;

    //verification for exeter email

    auth.createUserWithEmailAndPassword(email, pass).catch(function(e) {

        var errorCode = e.code;
        var errorMessage = e.message;
        consolde.log(errorCode);
        consolde.log(errorMessage);
      });
});

auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
        consolde.log(firebaseUser);
    }
    else{
        console.log('not logged in')
    }
});




}());