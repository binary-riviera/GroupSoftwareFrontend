var current = 0;
document.getElementById('waypointNumber').innerText = current;

var locClues = db.collection('Locations').doc("49FQBOBFgnZsoHzGXjvc").get();

locClues.then(function(doc) {
  var setClue = doc.data().Clue;
  document.getElementById('clue').innerText = setClue;
});




function updateClue(result) {

  // pick random route out of all Routes
  var col = db.collection('Routes').doc("q2B78ABFQ0pDPom2Sxor").get();

  //get current id
  col.then(function(doc) {
    if (doc.exists) {
      var loc = doc.data().Locations;
      var id = loc[current].id.replace(/\s/g, '');
      if (result == id) {
        const clue = document.getElementById('clue');
        current = current + 1;
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
// QR CODE READER
function openCamera() {
  let scanner = null;
  Dynamsoft.BarcodeScanner.createInstance({
    // GETS THE RESULT
    onFrameRead: results => {
    },
    onUnduplicatedRead: (txt, result) => {
      updateClue(txt);
    }
  }).then(s => {
    scanner = s;
    scanner.show();
  });
}
