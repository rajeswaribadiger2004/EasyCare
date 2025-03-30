<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signin</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form action="authenticate.php" method="POST">
        <label for="email">Email/ಇಮೇಲ್:</label>
        <input type="email" name="email" required>

        <label for="password">Password/ಪಾಸ್ವರ್ಡ್:</label>
        <input type="password" name="password" required>

        <button type="submit">Sign In</button>
        <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
    </form>
</body>
</html>
