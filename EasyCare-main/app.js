// JavaScript to show success message after appointment is booked
const bookingStatusDiv = document.getElementById('booking-status');
const form = document.getElementById('appointment-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Simulate success message after booking
    bookingStatusDiv.innerHTML = "<p>Your appointment has been successfully booked!</p>";
});
