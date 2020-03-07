/**
 * A JavaScript file to alert the game keeper.
 *
 *
 *
 * @author Louis Evans.
 * @since  20/2/2020
 */
document.getElementById("helpButton").addEventListener("click", function() {
  name = localStorage.getItem("studentName");
  alert("Game Keeper has been notfied " + name);
  firebase.database().ref('alert/' + 'alert' + name).set({
    playerName: name,
  });
});
