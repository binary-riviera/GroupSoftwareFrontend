




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

  })
})
