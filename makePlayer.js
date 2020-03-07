var database = firebase.database();


name = localStorage.getItem("studentName");
console.log("IN HERE WITH + "+name);

var gameCond;

var starCountRef = firebase.database().ref('gameCondition');
starCountRef.on('value', function (snapshot) {
  gameCond = snapshot.val();
  /* If the user is still playing and a new game starts
    they are re-added to the firebase
  */
  if (gameCond == "Start"){
    coords = {lat:0,lng:0};
    firebase.database().ref('players/'+name).set({
    clues : 0,
    playerName: name,
    playerCoordinates: coords,
    playerLocation:"FORUM",
        playerRoute:"Forum-Ram-Harrison",
    });
  }
});


// Adds a player to firebase when they initial join
coords = {lat:0,lng:0};
firebase.database().ref('players/'+name).set({
    clues : 0,
    playerName: name,
    playerCoordinates: coords,
    playerLocation:"FORUM",
    playerRoute:"Forum-Ram-Harrison",
  });
