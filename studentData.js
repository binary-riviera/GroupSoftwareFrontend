

const firebaseConfig = {
    apiKey: "AIzaSyA38bRGCRCA5d58dRpjbg56iDEwXmvoT8s",
    authDomain: "groupsoftware-25ee9.firebaseapp.com",
    databaseURL: "https://groupsoftware-25ee9.firebaseio.com",
    projectId: "groupsoftware-25ee9",
    storageBucket: "groupsoftware-25ee9.appspot.com",
    messagingSenderId: "1031394181045",
    appId: "1:1031394181045:web:1de897f3b3aa98d89b23fc"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var details = ['playerCoordinates','playerName']

var starCountRef = firebase.database().ref('players/player');
starCountRef.on('value', function(snapshot) {
  //console.log(snapshot.val());
  document.getElementById('nep').innerText = snapshot.val();});


  var urlRef = firebase.database().ref("players/player");
  urlRef.on("value", function(snapshot) {
    snapshot.forEach(function(child) {
      console.log(child.key+": "+child.val());
    });
  });
  var name;
  var starCountRef = firebase.database().ref('players/player');
  starCountRef.on('value', function(snapshot) {
    name = snapshot.val();
    document.getElementById('nep').innerText = snapshot.val();});



//list = [{coords:{name[]}},]
