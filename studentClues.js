const db = firebase.firestore();

console.log("ok");
firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });
console.log("ok");

db.collection('Locations').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data())
    console.log("ok");
  })
})
console.log("ok");
