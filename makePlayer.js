var database = firebase.database();


name = localStorage.getItem("studentName");
console.log("IN HERE WITH + " + name);


var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function(snapshot) {
  gameCond = snapshot.val();
});

coords = {
  lat: 0,
  lng: 0
}
var userName = name.replace('@exeter.ac.uk', '')
firebase.database().ref('players/' + userName).set({
  clues: 0,
  playerName: name,
  playerCoordinates: coords,
  playerLocation: "FORUM",
  playerRoute: "Forum-Ram-Harrison",
});
