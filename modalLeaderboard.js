
 let players = [];
 /**
  * Creates an object for each player in the game.
  *
  * @param players Empty array of players.
  * @return Returns an array of objects which are players.
  */
 function getPlayers(players) {
   // goes in the players tree
   const query = firebase.database().ref("players")
     .orderByChild('clues')

   query.on('value', (playersSnapshot) => {
     // for each tree in players (Gets individual players)
     players = [];
     playersSnapshot.forEach((playerSnapshot) => {
       //
       let player = playerSnapshot.val();
       // The objects which are made
       players.push({
         playerName: player.playerName,
         playerCoordinates: player.playerCoordinates,
         playerRoute: player.playerRoute,
         clues: player.clues
       })

       //printObj(players);
     }).then(printObj(players))
   })
 }
 /**
  * Prints all objecs in the given array players.
  * Also adds each player the leaderboard.
  *
  * @param players Array of objects/players in the game.
  * @return Prints each object in the array.
  */
 // Prints all the objects inside
 function printObj(players) {
   var list = document.getElementById('teams');
   var index = 0;
   players.reverse();

   while (list.firstChild) {
     list.removeChild(list.lastChild);
   }

   for (let x in players) {
     //Add to leaderboard
     index = index + 1;

     var tr = document.createElement('tr');
     tr.innerHTML = '<th scope="row">' + index + '</th><td>' + players[x].playerName + '</td><td>' + players[x].clues + '/5</td>';

     list.appendChild(tr);
