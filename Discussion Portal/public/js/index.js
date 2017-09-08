
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCGWZaO0w87ASD2B7yZhtAoOGb8mhlwUlc",
  authDomain: "iosfusion-21c51.firebaseapp.com",
  databaseURL: "https://iosfusion-21c51.firebaseio.com",
  projectId: "iosfusion-21c51",
  storageBucket: "iosfusion-21c51.appspot.com",
  messagingSenderId: "342302240126"
};
firebase.initializeApp(config);
// console.log(firebase);

var database = firebase.database();
var ref = database.ref('Forum');
ref.on('value',getData,errData);
var question = document.getElementById('question');
var nameTEST = document.getElementById('nameTEST');

var dispErr = document.getElementById('dispErr');
function getData(data){
  console.log(data.val().TEST);
  var testCase = data.val().TEST;
  question.innerHTML = testCase.question;
  nameTEST.innerHTML = testCase.name;
}

function errData(err){
  console.log(err);
  var errMsg = `Unable to fetch data!! ERROR: ${err}`;
  dispErr.innerHTML = errMsg;
}

function approved(){
  database.ref('Forum/TEST/verified').set('Yes');
}
function disapproved(){
  database.ref('Forum/TEST/verified').set('No');
}
