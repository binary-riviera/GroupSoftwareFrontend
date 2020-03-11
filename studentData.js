/**
 * A JavaScript file to allow for Firebase connectivity.
 *
 *
 *
 * @author Mbongeni Gulu, Louis Evans.
 * @since  20/2/2020
 */

var details = ['playerCoordinates', 'playerName'];

 /**
 * check for game state change.
 */
 function gameStateChange() {
   gameCond = document.getElementById('gameButton');
   if(gameCond.innerText == 'End Game'){
     // Clearing firebase
     gameCond.innerText = 'Start Game';
     firebase.database().ref("gameCondition").set('End');
     // Remove all users from firebase when a game ends
     
   } else if (gameCond.innerText == 'Start Game'){
  gameCond.innerText = 'End Game';

  firebase.database().ref("gameCondition").set('Start');
  }
}

function getAlerts(){
  var name;
  // WHat table to get from
  var starCountRef = firebase.database().ref('alert');
  // Gets the valuei
  starCountRef.on('child_added', function(snapshot) {

    let name = snapshot.val();

    alert("PLAYER " + name.playerName + " NEEDS HELP");
  });


  // Removes the alert once its been shown
  var alertRef = firebase.database().ref('alert');

  alertRef.on('child_added', function(snapshot) {
      snapshot.ref.remove();
  });
}

getAlerts();



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
    })
    printObj(players)
  });
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


  if (list !== null) {
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

      //Add marker
      addMarker({
          coords: {
            lat: players[x].playerCoordinates.lat,
            lng: players[x].playerCoordinates.lng
          },
          content: players[x].playerName
        },
        map);
    }
  }
}


initMap();
var map;
/**
 * Create the map within the set location.
 *
 *
 * @return Returns the map.
 */
function initMap() {
  console.log("initialising map...");
  // Map settings
  var options = {
    center: {
      lat: 50.736683,
      lng: -3.535371
    },
    zoom: 16
  }
  // Create map

  map = new google.maps.Map(document.getElementById('map'), options);

  getPlayers();
}

var allMarkers = [];


/**
 * Add a players location on the map using a marker.
 *
 * @param props Information containing the players coordinates and player name.
 * @param map The map to map the player on.
 * @return Returns a map with each player marked on.
 */
function addMarker(props, map) {

  for (let x in allMarkers) {

    if (allMarkers[x].title == props.content) {
      allMarkers[x].setMap(null);
    }
  }

  var marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    //Icon
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5
    },
    title: props.content
  });

  if (props.content) {
    // Team name
    var infoWindow = new google.maps.InfoWindow({
      content: '<h1>' + props.content + '</h1>'
    });
    // Click
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }


  //marker.setMap(map);
  allMarkers.push(marker);
}


//Getting alerts from students
var name;
// WHat table to get from
var starCountRef = firebase.database().ref('alert');
// Gets the valuei
starCountRef.on('child_added', function(snapshot) {
  let name = snapshot.val();
  alert("PLAYER " + name.playerName + " NEEDS HELP");
  // ADD SOMETHING TO BRING UP THE PLAYER BOX
});
