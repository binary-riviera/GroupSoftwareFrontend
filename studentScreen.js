
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
