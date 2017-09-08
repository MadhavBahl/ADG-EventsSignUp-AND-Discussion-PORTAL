
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
var flag = 0;
var approveBtn = document.getElementById('approveBtn');
var disapproveBtn = document.getElementById('disapproveBtn');

var dispErr = document.getElementById('dispErr');
function getData(data){
  console.log(data.val());

  /* ======== Try For Array Structure ======== */


    // var users = [];
    for(var i in data.val()) {
      // setTimeout(function(){
      //   console.log(`The key is: ${i}`);
      //   var dat =i.toString();
      //   var testCase = data.val().dat;
      //   // question.innerHTML = testCase.question;
      //   // nameTEST.innerHTML = testCase.name;
      //   console.log(testCase);
      // },1000);

      flag = 0;
      if(data.val()[i].verified === 'Yes')
        flag=1;
      else{
        question.innerHTML = data.val()[i].question;
        nameTEST.innerHTML = data.val()[i].name;
        var flagFin=0;
        while(flagFin == 0){
          if(approveBtn.onclick){
            approved(i);
            flagFin = 1;
          } else if(disapproveBtn.onclick){
            disapproved(i);
            flagFin = 1;
          }
        }
      }
      // if(flag==0){
      //   console.log(`The key is: ${i}`);
      //   console.log(`The name is: ${data.val()[i].name}`);
      //   question.innerHTML = testCase.question;
      //   nameTEST.innerHTML = testCase.name;
      //
      // }
      // users.push(i);
    }
    // console.log(users);
    // for(var i=0;i<users.length;i++){
    //   // console.log(users[i]);
    //   var fetch = users[i];
    //   console.log(data.val()[fetch]);
    // }


  /* ========================================== */

  // var testCase = data.val().TEST;
  // question.innerHTML = testCase.question;
  // nameTEST.innerHTML = testCase.name;
}

function errData(err){
  console.log(err);
  var errMsg = `Unable to fetch data!! ERROR: ${err}`;
  dispErr.innerHTML = errMsg;
}

function approved(path){
  database.ref('Forum/'+path+'/verified').set('Yes');
  flag =1;
}
function disapproved(path){
  database.ref('Forum/'+path+'/verified').set('No');
  flag =1;
}
