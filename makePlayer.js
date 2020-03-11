/**
 * A JavaScript file to create a player in the game with starting location as the forum
 *
 *
 *
 * @author Daniel Cripps.
 * @since  20/2/2020
 */

var database = firebase.database();
var name = localStorage.getItem("studentName");
var len = localStorage.getItem("lengthFeed");
var gameCond;
// Gets the game condition
var starCountRef = firebase.database().ref('gameCondition');
starCountRef.on('value', function(snapshot) {
  gameCond = snapshot.val();
});



/* If the user is still playing and a new game starts
   they are re-added to the firebase
 */

 if (gameCond == "End"){
   coords = {lat:0,lng:0};
   firebase.database().ref('players/'+name).set({
   clues : 0,
   playerName: name,
   playerCoordinates: coords,
   playerLocation:"FORUM",
       playerRoute:"Forum-Ram-Harrison",
   });
 }

/* Connors code Not sure what it does but its broken


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
*/
