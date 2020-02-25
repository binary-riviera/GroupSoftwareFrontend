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

const login = document.getElementById('login');







login.addEventListener('click', e => {

    const emailTxt = document.getElementById('email_address');
    const passwordTxt = document.getElementById('password');

    var email = emailTxt.value;
    var pass  = passwordTxt.value;

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        console.log('nope');

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

      });
});


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser);
        document.location.href = "gameKeeper.html";
    }
    else{
        console.log('not logged in')
    }
});