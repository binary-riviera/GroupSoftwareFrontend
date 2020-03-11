/**
 * A JavaScript file to create a player in the game with starting location as the forum
 *
 *
 *
 * @author Daniel Cripps. 
 * @since  20/2/2020
 */

name = localStorage.getItem("studentName");

var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function(snapshot) {
  gameCond = snapshot.val();
});

coords = {
  lat: 0,
  lng: 0
}

var name = localStorage.getItem("studentName");
var len = localStorage.getItem("lengthFeed");
if (name!="null"){
var userName = name.replace('@exeter.ac.uk', '')
firebase.database().ref('players/' + userName).set({
  clues: 0,
  playerName: name,
  playerCoordinates: coords,
  playerLocation: "FORUM",
  playerRoute: "Forum-Ram-Harrison",
});


firebase.database().ref().child('feed').update({
    [len]:"Player " + name + " has joined the game"
});
console.log('real time database updated with login');
}else{
  name= "Game Keeper";

firebase.database().ref().child('feed').update({
    [len]:"A " + name + " has joined the game"
});
console.log('real time database updated with login');

}
