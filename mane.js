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
  

  var ul;
  var liItems;
  var imageWidth;
  var imageNumber;
  var currentImage = 6; // Initialize the current image index
  
  function init() {
      ul = document.getElementById('image_slider');
      liItems = ul.children;
      imageNumber = liItems.length;
      imageWidth = liItems[0].children[0].offsetWidth;
      ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
      slider(ul);
  }
  
  function slider(ul) {
      AnimationEffect({
          delay: 17,
          duration: 3000,
          delta: function(p) {
              return Math.max(0, -1 + 2 * p);
          },
          step: function(delta) {
              ul.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
          },
          callback: function() {
              currentImage++;
              if (currentImage < imageNumber) {
                  slider(ul);
              } else {
                  currentImage = 6; // Reset the current image index
                  setTimeout(function() {
                      slider(ul);
                  }, 4000);
              }
          }
      });
  }
  
  // Example AnimationEffect function - replace this with your animation logic
  function AnimationEffect(animate) {
      // Implement your animation logic here
  }
  