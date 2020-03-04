




const db = firebase.firestore();

firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

const clue = document.getElementById("clue");

db.collection('Locations').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
    console.log(doc.id);

  })
})

db.collection('Routes').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
    var data = doc.data();
    console.log(doc.id);

  })
})

var col = db.collection('Routes').doc("q2B78ABFQ0pDPom2Sxor").get();

col.then(function(doc) {
    if (doc.exists) {
        var loc = doc.data().Locations;
        console.log(loc[0].id);
      }
  });
