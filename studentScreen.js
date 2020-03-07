/**
 * A JavaScript file to get the student screen.
 *
 *
 *
 * @author Louis Evans.
 * @since  20/2/2020
 */
var starCountRef = firebase.database().ref('gameCondition');

starCountRef.on('value', function(snapshot) {
  document.getElementById('gameCondition').innerText = snapshot.val();
});
