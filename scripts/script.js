$(document).ready(function() {
  console.log( "button clicked" );
  $("#goButton").click(function(){
                
    let username = $("#username").val();
    $("#userMsg").text("Greetings " + username +". You are super cool and fun.");
//     let spiritaniaml = generatespiritanaimal(username); 

  });

});

// function generatespiritanaimal(username) {
//   let spiritaniaml = ''; 

//   spiritaniaml = " <h3> " + namestart(username) + " </h3> ";
  
// }

// function namestart(name) {
//   return "the first letter of your name is " + name[0]

// }
