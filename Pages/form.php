
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

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $toEmail = "madubelalangaa30@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";

    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("HTTP/1.1 400 Bad Request");
        echo "Invalid email address";
        exit();
    }

    // Compose the email message
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message:\n$message";

    // Send the email
    if (mail($toEmail, $subject, $messageBody)) {
        // Email sent successfully
        $response = ["message" => "Thank you for your message, $name! We will get back to you soon."];
        echo json_encode($response);
    } else {
        // Email sending failed
        header("HTTP/1.1 500 Internal Server Error");
        echo "Failed to send the email. Please try again later.";
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
