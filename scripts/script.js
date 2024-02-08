$(document).ready(function() {
    console.log( "ready!" );
    $("#goButton").click(function(){
                  
      let $fname = $("#fname").val();
      $("#userMsg").text("Greetings " + $fname +". You are super cool and fun.");
  
    });

});
