<?php
include 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

// Check if user exists in doctor or patient table
$stmt = $conn->prepare("SELECT password FROM doctors WHERE email = ? UNION SELECT password FROM patients WHERE email = ?");
$stmt->bind_param("ss", $email, $email);
$stmt->execute();
$stmt->bind_result($hashed_password);
$stmt->fetch();

if ($hashed_password && password_verify($password, $hashed_password)) {
    header("Location: home.php");
} else {
    echo "Invalid email or password.";
}
$stmt->close();
$conn->close();
?>
