/**
 * A JavaScript file to update the game with the clue found using the QR reader/camera on a phone
 *
 *
 *
 * @author Connor_Forsyth, Mbongeni Gulu.
 * @since  20/2/2020
 */

var current = parseInt(localStorage.getItem("current"));
console.log(current);
document.getElementById('waypointNumber').innerText = current;

// pick random route out of all Routes
//find out how many Routes
var count = 0;
var routeIDs = [];

db.collection('Routes').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    count += 1;
    routeIDs.push(doc.id);
  });
  var ran = Math.floor(Math.random() * count);
  currentRoute = routeIDs[ran];
  var col = db.collection('Routes').doc(currentRoute).get();
  localStorage.setItem("currentRoute", currentRoute);

  //get id of first location
  col.then(function(doc) {
    var loc = doc.data().Locations;
    var id = loc[0].id.replace(/\s/g, '');
    //set first clue
    var locClues = db.collection('Locations').doc(id).get();

    locClues.then(function(doc) {
      var setClue = doc.data().Clue;
      document.getElementById('clue').innerText = setClue;
    });
  });
});

/**
 * Update the database with the clue found using the QR code and generates the next waypoint (clue) to be found.
 *
 * @param {String} result Identifier for the current waypoint found from the QR scanner.
 * @return Returns an alert, updates the database/log with the found waypoint.
 */
function updateClue(result) {

  var ran = Math.floor(Math.random() * 11);

  var currentRoute = localStorage.getItem('currentRoute');
  var col = db.collection('Routes').doc(currentRoute).get();
  console.log(col);
  //get current id
  col.then(function(doc) {
    if (doc.exists) {
      var loc = doc.data().Locations;
      var id = loc[current].id.replace(/\s/g, '');
      if (result == id) {
        const clue = document.getElementById('clue');
        current = current + 1;


        localStorage.setItem("current",current);
        var name = localStorage.getItem("studentName");
        var len = parseInt(localStorage.getItem("lengthFeed"));

        if(current==5){
          alert("You have won the game")
          firebase.database().ref().child('feed').update({
              [len]:"Player " + name + " : has found all waypoints 👍"
          });


      }else{
        firebase.database().ref().child('feed').update({
            [len]:"Player " + name + " : found clue " +current +" 👍"
        });
      }

        console.log('real time database updated with clue');
        db.collection('Locations').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            var id = loc[current].id.replace(/\s/g, '');
            if (doc.id == id)
              clue.innerHTML = doc.data().Clue;
          });
        });
        document.getElementById('waypointNumber').innerText = current;
        alert("well done you found the location");
      }
    }
  });
  name = localStorage.getItem("studentName");
  var userName = name.replace('@exeter.ac.uk', '');


  firebase.database().ref('players/' + userName).update({
    clues: current + 1,
  });


  //document.location.href = "studentGame.html";

}

/**
 * QR code reader that uses the user's phone camera.
 *
 *
 * @return Returns the text from the scanner.
 */
function openCamera() {
  let scanner = null;
  Dynamsoft.BarcodeScanner.createInstance({
    // GETS THE RESULT
    onFrameRead: results => {},
    onUnduplicatedRead: (txt, result) => {
      updateClue(txt);
    }
  }).then(s => {
    scanner = s;
    scanner.show();
  });
}
