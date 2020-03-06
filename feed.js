
var feedValues = firebase.database().ref('feed');
var arrVal = [];

feedValues.on('child_added', function(snapshot) {
  var value = snapshot.val();

  arrVal.push(value);

  //set feedValues
  var lengthFeed = arrVal.length;
  localStorage.setItem("lengthFeed", lengthFeed+1);


  var list = document.getElementById('feed');

  var tr = document.createElement('tr');
  tr.innerHTML = value ;

  if (lengthFeed == 1){
    tr.innerHTML = "Most recently joined " + value ;
    list.appendChild(tr);   // Append <li> to <ul> with id="myList"
  }
  else if(lengthFeed == 2){
    list.insertBefore(tr,list.childNodes[0]);   // Append <li> to <ul> with id="myList"
  }else{
    list.insertBefore(tr,list.lastChild);   // Append <li> to <ul> with id="myList"
  }
  var myDiv = document.getElementById("scrollTable");

  myDiv.scrollTop = myDiv.scrollHeight;


});
