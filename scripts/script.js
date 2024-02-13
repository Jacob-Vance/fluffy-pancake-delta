$(document).ready(function() {
  console.log( "button clicked" );
  $("#goButton").click(function(){
                
    let username = $("#username").val();
    $("#userMsg").text("Hello " + username + ", the first letter of your name is " + username[0]);
    // let spiritaniaml = generatespiritanaimal(username); 

  });


});

// function generatespiritanaimal(username) {
//   let spiritaniaml = ''; 

//   spiritaniaml = " <h3> " + namestart(username) + " </h3> ";
  
// }

// function namestart(username) {
//   return "the first letter of your name is " + username[0]

// }
