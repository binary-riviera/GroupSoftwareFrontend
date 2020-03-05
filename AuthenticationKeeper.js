

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
        document.location.href = "gamekeeper.html";
    }
    else{
        console.log('not logged in')
    }
});
