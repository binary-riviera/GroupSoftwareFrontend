(function(){

	const config = {
		apiKey: "AIzaSyA38bRGCRCA5d58dRpjbg56iDEwXmvoT8s",
		authDomain: "groupsoftware-25ee9.firebaseapp.com",
		databaseURL: "https://groupsoftware-25ee9.firebaseio.com",
		projectId: "groupsoftware-25ee9",
		storageBucket: "groupsoftware-25ee9.appspot.com",
		messagingSenderId: "1031394181045",
		appId: "1:1031394181045:web:1de897f3b3aa98d89b23fc"
	};
	firebase.initializeApp(config);
	//get elements
	const txtEmail = document.getElementById('email_address');
	const txtPassword = document.getElementById('password');
	const btnLogin = document.getElementById('login');
	const btnRegister = document.getElementById('reg');
	
	//login event
	btnLogin.addEventListener('click', e=> {
		//get values
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	};
	//register event
	btnRegister.addEventListener('click', e => {
		//get email and pass
		//todo check for 
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign up
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	};
	//signout
	const logout = document.getElementById('exitGame');
	logout.addEventListener('click', e =>{
		const auth = firebase.auth();
		auth.signOut().then(() => {
			console.log('User signed out');
		}
	}
	
	//realtime listener, logs user logins/ logouts
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log('User logged in: ', firebaseUser);
		}else{
			console.log('User logged in');
		}
	
	
}());