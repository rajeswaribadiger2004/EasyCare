const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const roomLinkElement = document.getElementById("room-link");
const startCallButton = document.getElementById("start-call");
const muteAudioButton = document.getElementById("mute-audio");
const toggleVideoButton = document.getElementById("toggle-video");
const shareScreenButton = document.getElementById("share-screen");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendMessageButton = document.getElementById("send-message");

let peerConnection;
let localStream;
let isAudioMuted = false;
let isVideoOff = false;
let roomId;

// Generate room link or join a room based on URL parameters
function generateRoomLink() {
    roomId = Math.random().toString(36).substring(2, 15);
    const roomLink = `${window.location.href}?room=${roomId}`;
    roomLinkElement.textContent = roomLink;
    roomLinkElement.href = roomLink;
}

async function startCall() {
    const urlParams = new URLSearchParams(window.location.search);
    roomId = urlParams.get("room") || generateRoomLink();

    await setupLocalStream();
    createPeerConnection();
    // Placeholder WebSocket server connection and signaling setup
}

async function setupLocalStream() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
}

function createPeerConnection() {
    peerConnection = new RTCPeerConnection();
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // WebSocket signaling: send ICE candidates
        }
    };
}

// Toggle audio
muteAudioButton.addEventListener("click", () => {
    isAudioMuted = !isAudioMuted;
    localStream.getAudioTracks()[0].enabled = !isAudioMuted;
    muteAudioButton.textContent = isAudioMuted ? "Unmute Audio" : "Mute Audio";
});

// Toggle video
toggleVideoButton.addEventListener("click", () => {
    isVideoOff = !isVideoOff;
    localStream.getVideoTracks()[0].enabled = !isVideoOff;
    toggleVideoButton.textContent = isVideoOff ? "Turn Video On" : "Turn Video Off";
});

// Screen sharing
shareScreenButton.addEventListener("click", async () => {
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const screenTrack = screenStream.getVideoTracks()[0];
        
        peerConnection.getSenders().forEach(sender => {
            if (sender.track.kind === "video") {
                sender.replaceTrack(screenTrack);
            }
        });

        screenTrack.onended = () => {
            localStream.getVideoTracks()[0].enabled = !isVideoOff;
            peerConnection.getSenders().forEach(sender => {
                if (sender.track.kind === "video") {
                    sender.replaceTrack(localStream.getVideoTracks()[0]);
                }
            });
        };
    } catch (error) {
        console.error("Error sharing screen:", error);
    }
});

// Chat functionality
sendMessageButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message) {
        displayMessage("You", message);
        // WebSocket signaling: send message
        messageInput.value = "";
    }
});

function displayMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}: ${message}`;  // Corrected string interpolation
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

const endCallButton = document.getElementById("end-call");

endCallButton.addEventListener("click", endCall);

function endCall() {
    // Stop all tracks on the local stream to turn off the local video/audio
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
    }

    // Close the peer connection if it exists
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }

    // Reset the video elements
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;

    // Optionally, clear the chat box if you have a chat feature
    chatBox.innerHTML = "";

    // Update UI to reflect the call has ended
    startCallButton.disabled = false;
    endCallButton.disabled = true;

    alert("Call has ended");
}

// Start the call when button clicked
startCallButton.addEventListener("click", startCall);
