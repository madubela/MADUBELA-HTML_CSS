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
  

  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name.trim() === "") {
        alert("Name must be filled out");
        return false;
    }
    if (email.trim() === "") {
        alert("Email must be filled out");
        return false;
    }

    if (message.trim() === "") {
        alert("Message must be filled out");
        return false;
    }
    return true; // Submit the form if all fields are filled

}
  


<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

 

    $to = "madubelamanelisi3@gmail.com"; // Your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);

 


    // Redirect back to the contact form with a success message
    header("Location: contact_form.html?message=success");
} else {
    // Redirect back to the contact form with an error message
    header("Location: contact_form.html?message=error");

}
?>

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const messageDiv = document.getElementById("messageDiv");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);

      fetch("process_form.php", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              messageDiv.innerHTML = '<p>Thank you for contacting us! We will get back to you soon.</p>';
          } else {
              messageDiv.innerHTML = '<p>There was an error sending your message. Please try again later.</p>';
          }
      })
      .catch(error => {
          console.error(error);
      });
  });
});

   // Function to scroll to the top of the page
   function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollUpButton').style.display = 'block';
    } else {
        document.getElementById('scrollUpButton').style.display = 'none';
    }
}


 // Get the button
 let mybutton = document.getElementById("myBtn");
  
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }