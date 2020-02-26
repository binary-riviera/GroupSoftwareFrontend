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
var database = firebase.database();


var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function (snapshot) {
  console.log(snapshot.val());
  document.getElementById('gameCondition').innerText = snapshot.val();
});



var starCountRef = firebase.database().ref('team/teamWaypointNumber');

starCountRef.on('value', function (snapshot) {
  console.log(snapshot.val());
  document.getElementById('waypointNumber').innerText = snapshot.val();
});
