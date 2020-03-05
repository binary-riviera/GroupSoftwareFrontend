var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function(snapshot) {
  document.getElementById('gameCondition').innerText = snapshot.val();
});
