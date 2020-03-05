
var feedValues = firebase.database().ref('feed');
var arrVal = [];

feedValues.on('child_added', function(snapshot) {
  var value = snapshot.val();

  arrVal.push(value);

  //set feedValues
  var lengthFeed = arrVal.length;
  localStorage.setItem("lengthFeed", lengthFeed);


  var list = document.getElementById('feed');

  var tr = document.createElement('tr');
  tr.innerHTML = value ;

  list.appendChild(tr);   // Append <li> to <ul> with id="myList"
});
