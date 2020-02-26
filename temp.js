var watchId = navigator.geolocation.watchPosition(function(position)
  {
    document.getElementById('lang').innerHTML = position.coords.latitude;
    document.getElementById('long').innerHTML = position.coords.longitude;
    console.log("location updated");
  });