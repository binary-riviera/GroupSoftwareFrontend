/**
 * A JavaScript file to verify if the students location with the waypoint
 *
 *
 *
 * @author Daniel Cripps. 
 * @since  20/2/2020
 */
// 4th decimal place
// this is valid up to 11m
/**
 * Verify if current location is within 11m of the waypoint location. Updates the log if it matches.
 *
 * @param {int} curLang User's current latitude.
 * @param {int} curLong User's current longitude.
 * @param {int} locLang The waypoints latitude.
 * @param {int} locLong The waypoints longitude.
 * @return {boolean} Returns boolean True or False.
 */
var isAtLoc = function(curLang, curLong, locLang, locLong) {
  if (curLang.toFixed(4) === locLang.toFixed(4) && curLong.toFixed(4) === locLong.toFixed(4)) {
    return true;
  }
  return false;
}
name = localStorage.getItem("studentName");
var updateDatabase = function(lat, long) {
  firebase.database().ref('players/' + name + '/playerCoordinates').set({
    lat: lat,
    lng: long
  });
  console.log('real time database updated with location');
}


var updateStream = window.setInterval(() => {
  navigator.geolocation.getCurrentPosition(x => {
    document.getElementById('lang').innerHTML = x.coords.latitude;
    document.getElementById('long').innerHTML = x.coords.longitude;
    updateDatabase(x.coords.latitude, x.coords.longitude);
  });
}, 30000)
