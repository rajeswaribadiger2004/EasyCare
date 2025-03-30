<?php
include('db.php'); // Database connection
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Page</title>
    <link rel="stylesheet" href="feed.css">
</head>
<body>

<h2>Submit Feedback for Your Appointment</h2>

<div class="feedback">
    <h3>Provide Your Feedback</h3>
    <h3>ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಒದಗಿಸಿ</h3>
    <form action="submit_feedback.php" method="post">
        <label>Select Appointment/ನೇಮಕಾತಿ ಆಯ್ಕೆಮಾಡಿ:</label>
        <select name="appointment_id" required>
            <option value="">Choose an Appointment/ನೇಮಕಾತಿಯನ್ನು ಆರಿಸಿ</option>
            <?php
            $sql = "SELECT id, name, date, time FROM appointments ORDER BY date DESC";
            $result = mysqli_query($conn, $sql);

            while ($row = mysqli_fetch_assoc($result)) {
                echo "<option value='" . $row['id'] . "'>" . $row['name'] . " - " . $row['date'] . " at " . $row['time'] . "</option>";
            }
            ?>
        </select>
        
        <div class="form-group">
            <label>Rating/ರೇಟಿಂಗ್ (1-5):</label>
            <input type="number" name="stars" min="1" max="5" required>
        </div>

        <div class="form-group">
            <label>Description/ವಿವರಣೆ:</label>
            <textarea name="description" rows="4" required></textarea>
        </div>

        <button type="submit">Submit Feedback/ಪ್ರತಿಕ್ರಿಯೆ ಸಲ್ಲಿಸಿ</button>
    </form>
</div>

<!-- Display feedback -->
<h3>Recent Feedback</h3>
<h3>ಇತ್ತೀಚಿನ ಪ್ರತಿಕ್ರಿಯೆ</h3>
<div class="feedback">
    <?php
    $feedback_sql = "SELECT appointments.name, feedback.description, feedback.stars 
                     FROM feedback 
                     JOIN appointments ON feedback.appointment_id = appointments.id 
                     ORDER BY feedback.id DESC";
    $feedback_result = mysqli_query($conn, $feedback_sql);

    if (mysqli_num_rows($feedback_result) > 0) {
        while ($feedback_row = mysqli_fetch_assoc($feedback_result)) {
            echo "<p><strong>Name:</strong> " . $feedback_row['name'] . "</p>";
            echo "<p><strong>Feedback:</strong> " . $feedback_row['description'] . "</p>";
            echo "<p><strong>Rating:</strong> " . str_repeat("⭐", $feedback_row['stars']) . "</p><hr>";
        }
    } else {
        echo "<p>No feedback available.</p>";
    }

    mysqli_close($conn);
    ?>
</div>

</body>
</html>
