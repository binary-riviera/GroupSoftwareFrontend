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

const db = firebase.firestore();

var database = firebase.database();

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("logged in");

  } else {
    document.location.href = "introPage.html";
  }
});
