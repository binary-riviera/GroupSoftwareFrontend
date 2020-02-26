// 4th decimal place
var isAtLoc = function(curLang, curLong, locLang, locLong) {
  if (curLang.toFixed(4) === locLang.toFixed(4) && curLong.toFixed(4) === locLong.toFixed()) {
    return true;
  }
  return false;
}

var watchId = navigator.geolocation.watchPosition(function(position)
  {
    document.getElementById('lang').innerHTML = position.coords.latitude;
    document.getElementById('long').innerHTML = position.coords.longitude;
    console.log("location updated");
  });
