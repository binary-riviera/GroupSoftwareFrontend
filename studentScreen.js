
var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function (snapshot) {
  console.log(snapshot.val());
  document.getElementById('gameCondition').innerText = snapshot.val();
});
