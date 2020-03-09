/**
 * A JavaScript file to allow for Firebase connectivity.
 *
 *
 *
 * @author Mbongeni Gulu, Louis Evans.
 * @since  20/2/2020
 */



var details = ['playerCoordinates', 'playerName']

//TODO: Comment functions (in the format described below)
/**
 * Description here.
 *
 * @param {type} var Description.
 * @return {type} Return value description.
 */
function gameStateChange() {

  document.location.href = 'gamekeeperEnd.html';
  firebase.database().ref("gameCondition").set('End');
}

function gameStateEnd() {

  document.location.href = 'gamekeeper.html';
  firebase.database().ref("gameCondition").set('Start');
}

let players = [];

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

// Prints all the objetcs inside
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

// ADD new Marker
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
