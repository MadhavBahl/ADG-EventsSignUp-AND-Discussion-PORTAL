
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBKf8_zTarqgJdZJr8TIdiBNysXoWxVgq8",
    authDomain: "adg-events.firebaseapp.com",
    databaseURL: "https://adg-events.firebaseio.com",
    projectId: "adg-events",
    storageBucket: "adg-events.appspot.com",
    messagingSenderId: "719176182149"
  };
  firebase.initializeApp(config);
// console.log(firebase);

var database = firebase.database();
var ref = database.ref('Forum');
ref.on('value',getData,errData);
var question = document.getElementById('question');
var nameTEST = document.getElementById('nameTEST');
var flag = 0;
var saveData;
var approveBtn = document.getElementById('approveBtn');
console.log(approveBtn);
approveBtn.addEventListener("click", function(event){
    event.preventDefault();
});
var disapproveBtn = document.getElementById('disapproveBtn');
var showQues = document.getElementById('showQues');

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
      if(data.val()[i].verified === 'Yes' || data.val()[i].verified === 'No'){
        flag=1;

        // console.log(data.val()[i].verified);
      }

      else{
        flag =0;
        random();
        break;
          // if(approveBtn.onclick){
          //   console.log(data.val()[i].name);
          //   console.log(data.val()[i].verified);
          //   approved(i);
          //   flagFin = 1;
          // } else if(disapproveBtn.onclick){
          //   disapproved(i);
          //   flagFin = 1;
          // }
        // }
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
    function random() {
      if(flag == 0){
        showQues.style.display = 'block';
        question.innerHTML = data.val()[i].question;
        nameTEST.innerHTML = data.val()[i].name;
        // var flagFin=0;
        // while(flagFin == 0){
        saveData=i;
          $('#approveBtn').on('click',() => {
            // data.val()[i].verify.set('Yes');
            console.log(data.val()[saveData].verify);
            console.log('This was verified');
            FlagFin = 1;
          });
        }
    }

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


// function approved(path){
//   database.ref('Forum/'+path+'/verified').set('Yes');
//   console.log('Forum/'+path+'/verified');
//   flag =1;
// }
// function disapproved(path){
//   database.ref('Forum/'+path+'/verified').set('No');
//   console.log('This was Disapproved');
//   flag =1;
// }
