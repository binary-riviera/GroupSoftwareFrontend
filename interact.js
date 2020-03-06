



const emo = document.getElementById('emo');


emo.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = localStorage.getItem("lengthFeed");
  len +=1;
  console.log(emo.innerHtml);
  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"🗿"
  });
  console.log('real time database updated with emoji');


});


const emo1 = document.getElementById('emo1');


emo1.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = localStorage.getItem("lengthFeed");
  len +=1;
  console.log(emo.innerHtml);
  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"😢"
  });
  console.log('real time database updated with emoji');


});


const emo2 = document.getElementById('emo2');


emo2.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = localStorage.getItem("lengthFeed");
  len +=1;
  console.log(emo2.innerHtml);
  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"👀"
  });
  console.log('real time database updated with emoji');


});



const emo3 = document.getElementById('emo3');


emo3.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = localStorage.getItem("lengthFeed");
  len +=1;
  console.log(emo3.innerHtml);
  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"👎"
  });
  console.log('real time database updated with emoji');


});
