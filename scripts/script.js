$(function() {
  console.log("document is ready!");

  var username, firstletter, msg1, msg2, spiritaniaml = ""; 

  $('#namebutton').click(function() {
      username = $('#username').val();

      firstletter = getirstletter(username);
      spiritaniaml = getspiritaniaml(username);
      msg1 = "The first letter of your name is ";
      msg2 = ", which means your spirit aniaml is a(n) ";
      $('#nameoutput').text(msg1 + firstletter + msg2 + spiritaniaml +"!"); 

      });

  function getirstletter(nameval){
      var thefirstletter = nameval[0]; 
     return thefirstletter; 
  }

  function getspiritaniaml(nameval){
      var  thespiritaniaml = "";
      if (nameval[0] === "a" || nameval[0] === "A"){
          thespiritaniaml = "Antelope";
      }
      else if (nameval[0] === "b" || nameval[0] === "B"){
          thespiritaniaml = "Bear";
      }
      else if (nameval[0] === "c" || nameval[0] === "C"){ 
          thespiritaniaml = "Cat";
      }
      else if (nameval[0] === "d" || nameval[0] === "D"){
          thespiritaniaml = "Dog";
      }
      else if (nameval[0] === "e" || nameval[0] === "E"){
          thespiritaniaml = "Elephant";
      }
      else if (nameval[0] === "f" || nameval[0] === "F"){
          thespiritaniaml = "Fox";
      }
      else if (nameval[0] === "g" || nameval[0] === "G"){
          thespiritaniaml = "Giraffe";
      }
      else if (nameval[0] === "h" || nameval[0] === "H"){
          thespiritaniaml = "Horse";
      }
      else if (nameval[0] === "i" || nameval[0] === "I"){
          thespiritaniaml = "Iguana";
      }
      else if (nameval[0] === "j" || nameval[0] === "J"){
          thespiritaniaml = "Jaguar";
      }
      else if (nameval[0] === "k" || nameval[0] === "K"){
          thespiritaniaml = "Kangaroo";
      }
      else if (nameval[0] === "l" || nameval[0] === "L"){
          thespiritaniaml = "Lion";
      }
      else if (nameval[0] === "m" || nameval[0] === "M"){
          thespiritaniaml = "Monkey";
      }
      else if (nameval[0] === "n" || nameval[0] === "N"){
          thespiritaniaml = "Narwhal";
      }
      else if (nameval[0] === "o" || nameval[0] === "O"){
          thespiritaniaml = "Owl";
      }
      else if (nameval[0] === "p" || nameval[0] === "P"){
          thespiritaniaml = "Penguin";
      }
      else if (nameval[0] === "q" || nameval[0] === "Q"){
          thespiritaniaml = "Quail";
      }
      else if (nameval[0] === "r" || nameval[0] === "R"){
          thespiritaniaml = "Rabbit";
      }
      else if (nameval[0] === "s" || nameval[0] === "S"){
          thespiritaniaml = "Snake";
      }
      else if (nameval[0] === "t" || nameval[0] === "T"){
          thespiritaniaml = "Tiger";
      }
      else if (nameval[0] === "u" || nameval[0] === "U"){
          thespiritaniaml = "Uakari";
      }
      else if (nameval[0] === "v" || nameval[0] === "V"){
          thespiritaniaml = "Vulture";
      }
      else if (nameval[0] === "w" || nameval[0] === "W"){
          thespiritaniaml = "Whale";
      }
      else if (nameval[0] === "x" || nameval[0] === "X"){
          thespiritaniaml = "Xerus";
      }
      else if (nameval[0] === "y" || nameval[0] === "Y"){
          thespiritaniaml = "Yak";
      }
      else if (nameval[0] === "z" || nameval[0] === "Z"){
          thespiritaniaml = "Zebra";
      }
      else {
          thespiritaniaml = "Error (Please enter a different name)";
      }
     return thespiritaniaml; 
  }

});
