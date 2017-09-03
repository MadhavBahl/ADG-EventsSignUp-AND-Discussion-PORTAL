THE SIGNUP FORM 
---------------
The Code for Sign Up Form for one of the premium workshop event of ADG -- IOS-FUSION.
For backend integration: 
$("#formID").submit(function(e) {
    var url = "TYPE THE PATH OF SERVER HERE (like /signup)"; 
    // the script where you handle the form input.
    $.ajax({
           type: "POST",
           url: url,
           data: $("#formID").serialize(), 
           success: function(data)
           {
               alert(data); 
           }
         });
    e.preventDefault(); // avoid to execute the actual submit of the form.
});
 
 
![alt text](https://raw.githubusercontent.com/MadhavBahlMd/ADG-Events-SignUp/raw/master/img/ss.png
