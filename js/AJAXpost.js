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
