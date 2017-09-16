// Initialize Firebase
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

  var database = firebase.database();
  var ref = database.ref('WiFi');
  ref.on('value',getData,errData);



  // $('.tab a').on('click', function (e) {
  //
  //   e.preventDefault();
  //
  //   $(this).parent().addClass('active');
  //   $(this).parent().siblings().removeClass('active');
  //
  //   target = $(this).attr('href');
  //
  //   $('.tab-content > div').not(target).hide();
  //
  //   $(target).fadeIn(600);
  //
  // });



  function getData(data){
    //console.log(data.val());
    document.getElementById("sbmt").addEventListener("click",evt => {
      evt.preventDefault();
      var regNo = document.getElementById('regNo').value;
      console.log(data.val()[regNo]);
      // console.log(evt);
      // var user = 'User';
      if(!data.val()[regNo]){
        alert("Please Enter The Correct Registration Number!!!");
      }
      console.log(data.val()[regNo].PIN);
      console.log(data.val()[regNo].User);
      var formStr = document.getElementById('formMain');
      var dispData = document.getElementById('dispData');
      dispData.style.display = "block";
      formStr.style.display = "none";
      var userName = document.getElementById('userName');
      var pin = document.getElementById('pin');
      userName.innerHTML = data.val()[regNo].User;
      pin.innerHTML = data.val()[regNo].PIN;
    });

    // console.log()
  }
  // function sendData(data) {
  //
  // }

  function errData(err) {
    console.log(err);
  }
