var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function(snapshot) {
  if (snapshot.val() == "Start"){
    document.getElementById('gameCondition').innerText = "Game in progress";
  }else{
    document.getElementById('gameCondition').innerText = "Game has not started";
  }
});
