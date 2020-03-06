
name = localStorage.getItem("studentName");



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


var name = localStorage.getItem("studentName");
var len = localStorage.getItem("lengthFeed");
console.log(len);
firebase.database().ref().child('feed').update({
    [len]:"Player " + name + " has joined the game"
});
console.log('real time database updated with login');
