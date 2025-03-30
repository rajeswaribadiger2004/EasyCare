<?php
include 'db.php';

$role = $_POST['role'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

if ($role == "doctor") {
    $experience = $_POST['experience'];
    $hospital = $_POST['hospital'];
    $category = $_POST['category'];
    $stmt = $conn->prepare("INSERT INTO doctors (name, phone, email, password, experience, hospital, category) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssds", $name, $phone, $email, $password, $experience, $hospital, $category);
} else {
    $address = $_POST['address'];
    $stmt = $conn->prepare("INSERT INTO patients (name, phone, email, password, address) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $phone, $email, $password, $address);
}

if ($stmt->execute()) {
    header("Location: home.php");
} else {
    echo "Error: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>
