<?php
include('db.php'); // Database connection

$name = $_POST['name'];
$phone = $_POST['phone'];
$age = $_POST['age'];
$date = $_POST['date'];
$time = $_POST['time'];
$appointment_type = $_POST['appointment_type'];
$doctor_name = $appointment_type == 'Physical' ? $_POST['doctor_name'] : NULL;
$payment_status = isset($_POST['payment_status']) ? 1 : 0;

$sql = "INSERT INTO appointments (name, phone, age, date, time, appointment_type, doctor_name, payment_status)
        VALUES ('$name', '$phone', $age, '$date', '$time', '$appointment_type', '$doctor_name', $payment_status)";

echo "<div style='max-width: 400px; margin: 50px auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center; background-color: #f7f9fc;'>";

if (mysqli_query($conn, $sql)) {
    echo "<h2 style='color: #4CAF50;'>Appointment booked successfully!/ನೇಮಕಾತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಮಾಡಲಾಗಿದೆ</h2>";
    echo "<p style='color: #555; font-size: 14px;'>Thank you for booking. We look forward to serving you.</p>";
    echo '<p>If you selected a Video Conference/ನೀವು ವೀಡಿಯೊ ಕಾನ್ಫರೆನ್ಸ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿದರೆ, <a href="video.html">Join Here!!</a> Thank you.</p>';

    echo "<a href='feedback.php' style='display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 4px;'>Submit Your Experience</a>";
} else {
    echo "<h2 style='color: #FF0000;'>Error booking appointment ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸುವಲ್ಲಿ ದೋಷ</h2>";
    echo "<p style='color: #555; font-size: 14px;'>There was an error. Please try again later.</p>";
}

echo "</div>";

mysqli_close($conn);
?>
