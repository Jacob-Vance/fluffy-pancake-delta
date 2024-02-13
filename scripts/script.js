$(function() {
  console.log("document is ready!");

  var username, firstletter, msg1, msg2, spiritanimal = ""; 

  $('#namebutton').click(function() {
      username = $('#username').val();

      firstletter = getirstletter(username);
      spiritanimal = getspiritaniaml(username);
      msg1 = "The first letter of your name is ";
      msg2 = ", which means your spirit animal is a(n) ";
      $('#nameoutput').text(msg1 + firstletter + msg2 + spiritanimal +"!"); 

      });

  function getirstletter(nameval){
      var thefirstletter = nameval[0]; 
     return thefirstletter; 
  }

  function getspiritaniaml(nameval){
      var  thespiritanimal = "";
      if (nameval[0] === "a" || nameval[0] === "A"){
          thespiritanimal = "Antelope";
      }
      else if (nameval[0] === "b" || nameval[0] === "B"){
          thespiritanimal = "Bear";
      }
      else if (nameval[0] === "c" || nameval[0] === "C"){ 
          thespiritanimal = "Cat";
      }
      else if (nameval[0] === "d" || nameval[0] === "D"){
          thespiritanimal = "Dog";
      }
      else if (nameval[0] === "e" || nameval[0] === "E"){
          thespiritanimal = "Elephant";
      }
      else if (nameval[0] === "f" || nameval[0] === "F"){
          thespiritanimal = "Fox";
      }
      else if (nameval[0] === "g" || nameval[0] === "G"){
          thespiritanimal = "Giraffe";
      }
      else if (nameval[0] === "h" || nameval[0] === "H"){
          thespiritanimal = "Horse";
      }
      else if (nameval[0] === "i" || nameval[0] === "I"){
          thespiritanimal = "Iguana";
      }
      else if (nameval[0] === "j" || nameval[0] === "J"){
          thespiritanimal = "Jaguar";
      }
      else if (nameval[0] === "k" || nameval[0] === "K"){
          thespiritanimal = "Kangaroo";
      }
      else if (nameval[0] === "l" || nameval[0] === "L"){
          thespiritanimal = "Lion";
      }
      else if (nameval[0] === "m" || nameval[0] === "M"){
          thespiritanimal = "Monkey";
      }
      else if (nameval[0] === "n" || nameval[0] === "N"){
          thespiritanimal = "Narwhal";
      }
      else if (nameval[0] === "o" || nameval[0] === "O"){
          thespiritanimal = "Owl";
      }
      else if (nameval[0] === "p" || nameval[0] === "P"){
          thespiritanimal = "Penguin";
      }
      else if (nameval[0] === "q" || nameval[0] === "Q"){
          thespiritanimal = "Quail";
      }
      else if (nameval[0] === "r" || nameval[0] === "R"){
          thespiritanimal = "Rabbit";
      }
      else if (nameval[0] === "s" || nameval[0] === "S"){
          thespiritanimal = "Snake";
      }
      else if (nameval[0] === "t" || nameval[0] === "T"){
          thespiritanimal = "Tiger";
      }
      else if (nameval[0] === "u" || nameval[0] === "U"){
          thespiritanimal = "Uakari";
      }
      else if (nameval[0] === "v" || nameval[0] === "V"){
          thespiritanimal = "Vulture";
      }
      else if (nameval[0] === "w" || nameval[0] === "W"){
          thespiritanimal = "Whale";
      }
      else if (nameval[0] === "x" || nameval[0] === "X"){
          thespiritanimal = "Xerus";
      }
      else if (nameval[0] === "y" || nameval[0] === "Y"){
          thespiritanimal = "Yak";
      }
      else if (nameval[0] === "z" || nameval[0] === "Z"){
          thespiritanimal = "Zebra";
      }
      else {
          thespiritanimal = "Error (Please enter a different name)";
      }
     return thespiritanimal; 
  }

});
