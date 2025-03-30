<?php
include('db.php');

$appointment_id = $_POST['appointment_id'];
$description = $_POST['description'];
$stars = $_POST['stars'];

// Insert feedback into the feedback table
$sql = "INSERT INTO feedback (appointment_id, description, stars) VALUES ($appointment_id, '$description', $stars)";

if (mysqli_query($conn, $sql)) {
    echo "<div style='font-family: Arial, sans-serif; background-color: #e0f7fa; color: #00796b; padding: 15px; border: 1px solid #004d40; border-radius: 5px; text-align: center; max-width: 400px; margin: 20px auto;'>
            Feedback submitted successfully!ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ <a href='feedback.php' style='color: #004d40; font-weight: bold; text-decoration: none;'>Go back</a>
          </div>";
} else {
    echo "<div style='font-family: Arial, sans-serif; background-color: #ffebee; color: #d32f2f; padding: 15px; border: 1px solid #b71c1c; border-radius: 5px; text-align: center; max-width: 400px; margin: 20px auto;'>
            Error: " . mysqli_error($conn) . "
          </div>";
}

mysqli_close($conn);
?>
