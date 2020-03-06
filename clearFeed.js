const clear = document.getElementById('clearfeed');


clear.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = parseInt(localStorage.getItem("lengthFeed"));

  firebase.database().ref().child('feed').set({
      "0":"Game Keeper has manually cleared the feed"
  });
  console.log('real time database updated with emoji');


});
