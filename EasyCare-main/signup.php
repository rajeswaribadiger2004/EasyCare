<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
    

</head>
<body>
    
    <form action="store_user.php" method="POST" id="signupForm">
        <label for="role"> <b>Sign up as:</b></label>
        <select id="role" name="role" onchange="toggleFields()">
            <option value="patient">Patient/ಬಳಕೆದಾರ</option>
            <option value="doctor">Doctor/ವೈದ್ಯ</option>
        </select>

        <div id="commonFields">
            <label for="name">Name/ಹೆಸರು:</label>
            <input type="text" name="name" required>

            <label for="phone">Phone/ದೂರವಾಣಿ ಸಂಖ್ಯೆ:</label>
            <input type="text" name="phone" required>

            <label for="email">Email/ಇಮೇಲ್:</label>
            <input type="email" name="email" required>

            <label for="password">Password/ಪಾಸ್ವರ್ಡ್:</label>
            <input type="password" name="password" required>
        </div>

        <div id="doctorFields" style="display: none;">
            <label for="experience">Experience (years):</label>
            <input type="number" name="experience">

            <label for="hospital">Current Hospital:</label>
            <input type="text" name="hospital">

            <label for="category">Category:</label>
            <input type="text" name="category">
        </div>

        <div id="patientFields">
            <label for="address">Address/ವಿಳಾಸ:</label>
            <input type="text" name="address">
        </div>

        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="signin.php">Sign In</a></p>
        <div>
        <h3>First see a demo video (ಮೊದಲು ಡೆಮೊ ವಿಡಿಯೋ ನೋಡಿ) <a href="demo.html">Show</a></h3>
    </div>
    </form>
    
</body>
</html>
