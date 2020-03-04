var database = firebase.database();
name = localStorage.getItem("studentName");
console.log("IN HERE WITH + "+name);

firebase.database().ref('players/'+name).set({
    clues : 0,
    playerName: name,
    playerCoordinates: 0,
    playerLocation:"FORUM",
    playerRoute:"Forum-Ram-Harrison",
  });
