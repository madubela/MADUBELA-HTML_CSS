function changeImage() {
    var img = document.getElementById("profileImage");
    img.src = "../cam7.jpeg"; // Replace with the path to your new image
  }

  var i = 0;
  var txt = ' In order to succed you you need to succed. ';
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  

 
  
  
