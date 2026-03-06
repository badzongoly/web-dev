<?php 

    $name = $_POST["firstName"] . " " . $_POST["lastName"];
    $email = $_POST["email"];
    $message = $_POST["age"];

    // Process the data (e.g., save to database, send email, etc.)
    // For demonstration, we'll just display the data
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Message: " . nl2br(htmlspecialchars($message)) . "<br>";
?>