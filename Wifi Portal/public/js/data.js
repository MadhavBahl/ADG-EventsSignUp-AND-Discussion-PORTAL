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

  var database = firebase.database();
  var ref = database.ref('WiFi');
  ref.on('value',getData,errData);



  function getData(data){
    console.log(data.val());
    document.getElementById("sbmt").addEventListener("click",evt => {
      evt.preventDefault();
      var regNo = document.getElementById('regNo').value;
      console.log(data.val()[regNo]);
      // console.log(evt);
      // var user = 'User';
      console.log(data.val()[regNo].PIN);
      console.log(data.val()[regNo].User);
      var formStr = document.getElementById('formMain');
      var dispData = document.getElementById('dispData');
      dispData.style.display = "block";
      formStr.style.display = "none";
    });

    // console.log()
  }
  // function sendData(data) {
  //
  // }

  function errData(err) {
    console.log(err);
  }
