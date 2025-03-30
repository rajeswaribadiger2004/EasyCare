document.getElementById('stopBtn').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.pause();
    video.currentTime = 0;
});

document.getElementById('prevBtn').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.currentTime = Math.max(0, video.currentTime - 10); // Prevent going negative
});

document.getElementById('nextBtn').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.currentTime = Math.min(video.duration, video.currentTime + 10); // Prevent going beyond video duration
});
