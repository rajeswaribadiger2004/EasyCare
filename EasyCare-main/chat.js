// chat.js

document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.getElementById("chatContainer");
    const chatIcon = document.getElementById("chatIcon");
    const closeChatButton = document.getElementById("closeChat");
    const sendMessageButton = document.getElementById("sendMessage");
    const messageInput = document.getElementById("messageInput");
    const messagesDiv = document.getElementById("messages");
    const languageSelect = document.getElementById("languageSelect");

    // Toggle chat visibility
    chatIcon.addEventListener("click", () => {
        chatContainer.classList.add("open");
    });

    closeChatButton.addEventListener("click", () => {
        chatContainer.classList.remove("open");
    });

    // Send message on button click
    sendMessageButton.onclick = function() {
        const message = messageInput.value.trim();
        const selectedLanguage = languageSelect.value;

        if (message) {
            displayMessage("You", message, "user-message");

            // Get chatbot response
            const response = getMedicalResponse(message, selectedLanguage);

            // Display chatbot response after a delay
            setTimeout(() => {
                displayMessage("Chatbot", response, "doctor-message");
            }, 1000);
        }
    };

    // Display messages
    function displayMessage(sender, text, className) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(className);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // Medical responses function
    function getMedicalResponse(message, language) {
        const lowerMessage = message.toLowerCase();
        const responses = {
            
            fever: {
                en: "A fever is usually a sign that your body is fighting an infection. You can take Paracetamol to reduce fever. Stay hydrated!",
                
            },
    
    
            headache: {
                en: "For headaches, consider taking Ibuprofen or Acetaminophen. Resting in a dark room may also help.",
               
            },
            cough: {
                en: "For a cough, you might try Dextromethorphan or Guaifenesin. Honey and warm fluids can also soothe your throat.",
               
            },
            cold: {
                en: "Common cold symptoms can be alleviated with medications like Diphenhydramine for runny nose and Acetaminophen for pain.",
               
            },
            pain: {
                en: "Depending on the type of pain, Ibuprofen or Naproxen may be effective. Consult a healthcare provider for persistent pain.",
                },
                nausea: {
                    en: "For nausea, consider taking Meclizine or Dimenhydrinate. Ginger tea can also help soothe your stomach.",
                    
                },
                allergy: {
                    en: "For allergies, Antihistamines like Loratadine or Cetirizine can help relieve symptoms.",
                    
                },
                stress: {
                    en: "Managing stress can involve techniques like mindfulness, exercise, and talking to someone about your feelings.",
                    
                },
                jwara: { // Fever in Kannada
            
                    kn: "ಜ್ವರವು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಶರೀರವು ಸೋಂಕಿನ ವಿರುದ್ಧ ಹೋರಾಡುತ್ತಿದೆ ಎಂಬುದನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಜ್ವರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಪ್ಯಾರಾಸಿಟಾಮೋಲ್ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಹೈಡ್ರೇಟೆಡ್ ಆಗಿ ಇರಿ!"
                },
                thalenovu: { // Headache in Kannada
                   
                    kn: "ಮೂಡಿಗೆ, ಐಬುಪ್ರೊಫೆನ್ ಅಥವಾ ಅಸೆಟಾಮಿನೋಫೆನ್ ತೆಗೆದುಕೊಳ್ಳಲು ಪರಿಗಣಿಸಿ. ಕಪ್ಪು ಕೋಣೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುವುದು ಸಹ ಸಹಾಯ ಮಾಡಬಹುದು."
                },
                kafa: { // Cough in Kannada
                    
                    kn: "ಕಫಕ್ಕೆ, ಡೆಕ್ಸ್ಟ್ರೊಮೆಥಾರ್ಫಾನ್ ಅಥವಾ ಗ್ವೈಫೆನೆಸಿನ್ ಪ್ರಯತ್ನಿಸಬಹುದು. ಬೆಲ್ಲ ಮತ್ತು ಬಿಸಿ ದ್ರವಗಳು ನಿಮ್ಮ ಕಂಠವನ್ನು ಶೀತಗೊಳಿಸಬಹುದು."
                },
                sheetha: { // Cold in Kannada
                    kn: "ಸಾಮಾನ್ಯ ಶೀತದ ಲಕ್ಷಣಗಳನ್ನು ಓಡುತ್ತಿರುವ ಮೂಗುಗಾಗಿ ಡಿಪ್ಹೆನಿಹಿಡ್ರಾಮಿನ್ ಮತ್ತು ನೋವಿಗೆ ಅಸೆಟಾಮಿನೋಫೆನ್ ಮುಂತಾದ ಔಷಧಿಗಳನ್ನು ಬಳಸುವುದರಿಂದ ಕಡಿಮೆ ಮಾಡಬಹುದು."
                },
                novu: { // Pain in Kannada
                    
                    kn: "ನೋವದ ಪ್ರಕಾರ, ಐಬುಪ್ರೊಫೆನ್ ಅಥವಾ ನಾಪ್ರೋಕ್ಸನ್ ಪರಿಣಾಮಕಾರಿ ಇರಬಹುದು. ಶಾಶ್ವತ ನೋವಿಗೆ ಆರೋಗ್ಯ ಸೇವಾ ಒದಗಿಸುವವರನ್ನು ಸಂಪರ್ಕಿಸಿ."
                },
                asthama: { // Nausea in Kannada
                    
                    kn: "ಉಲ್ಬಣಕ್ಕೆ, ಮೆಕ್ಲಿಜೈನ್ ಅಥವಾ ಡಿಮೆನಿಹಿಡ್ರಿನೇಟ್ನಂತಹ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಪರಿಗಣಿಸಿ. ಆಲೂಗಡ್ಡೆ ಚಾಯ್ ನಿಮ್ಮ ಹೊಟ್ಟೆಯನ್ನು ಶೀತಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು."
                },
                alargy: { // Allergies in Kannada
                    
                    kn: "ಆಲರ್ಜಿಗಳಿಗೆ, ಲೊರಟಡಿನ್ ಅಥವಾ ಸೆಟಿರಿಜಿನ್ ಮುಂತಾದ ಆಂಟಿಹಿಸ್ಟಮೈನ್ಸ್ ಲಕ್ಷಣಗಳನ್ನು ನಿವಾರಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು."
                },
        
                ಜ್ವರ: { // Fever in Kannada
                    
                    kn: "ಜ್ವರವು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಶರೀರವು ಸೋಂಕಿನ ವಿರುದ್ಧ ಹೋರಾಡುತ್ತಿದೆ ಎಂಬುದನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಜ್ವರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಪ್ಯಾರಾಸಿಟಾಮೋಲ್ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಹೈಡ್ರೇಟೆಡ್ ಆಗಿ ಇರಿ!"
                },
                ತಲೆನೋವು: { // Headache in Kannada
                   
                    kn: "ಮೂಡಿಗೆ, ಐಬುಪ್ರೊಫೆನ್ ಅಥವಾ ಅಸೆಟಾಮಿನೋಫೆನ್ ತೆಗೆದುಕೊಳ್ಳಲು ಪರಿಗಣಿಸಿ. ಕಪ್ಪು ಕೋಣೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುವುದು ಸಹ ಸಹಾಯ ಮಾಡಬಹುದು."
                },
                ಕಫ: { // Cough in Kannada
                    
                    kn: "ಕಫಕ್ಕೆ, ಡೆಕ್ಸ್ಟ್ರೊಮೆಥಾರ್ಫಾನ್ ಅಥವಾ ಗ್ವೈಫೆನೆಸಿನ್ ಪ್ರಯತ್ನಿಸಬಹುದು. ಬೆಲ್ಲ ಮತ್ತು ಬಿಸಿ ದ್ರವಗಳು ನಿಮ್ಮ ಕಂಠವನ್ನು ಶೀತಗೊಳಿಸಬಹುದು."
                },
                ಶೀತ: { // Cold in Kannada
                
                    kn: "ಸಾಮಾನ್ಯ ಶೀತದ ಲಕ್ಷಣಗಳನ್ನು ಓಡುತ್ತಿರುವ ಮೂಗುಗಾಗಿ ಡಿಪ್ಹೆನಿಹಿಡ್ರಾಮಿನ್ ಮತ್ತು ನೋವಿಗೆ ಅಸೆಟಾಮಿನೋಫೆನ್ ಮುಂತಾದ ಔಷಧಿಗಳನ್ನು ಬಳಸುವುದರಿಂದ ಕಡಿಮೆ ಮಾಡಬಹುದು."
                },
                ನೋವು: { // Pain in Kannada
                    
                    kn: "ನೋವದ ಪ್ರಕಾರ, ಐಬುಪ್ರೊಫೆನ್ ಅಥವಾ ನಾಪ್ರೋಕ್ಸನ್ ಪರಿಣಾಮಕಾರಿ ಇರಬಹುದು. ಶಾಶ್ವತ ನೋವಿಗೆ ಆರೋಗ್ಯ ಸೇವಾ ಒದಗಿಸುವವರನ್ನು ಸಂಪರ್ಕಿಸಿ."
                },
                ಉಲ್ಬಣ: { // Nausea in Kannada
                    
                    kn: "ಉಲ್ಬಣಕ್ಕೆ, ಮೆಕ್ಲಿಜೈನ್ ಅಥವಾ ಡಿಮೆನಿಹಿಡ್ರಿನೇಟ್ನಂತಹ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಪರಿಗಣಿಸಿ. ಆಲೂಗಡ್ಡೆ ಚಾಯ್ ನಿಮ್ಮ ಹೊಟ್ಟೆಯನ್ನು ಶೀತಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು."
                },
                ಆಲರ್ಜಿಗಳು: { // Allergies in Kannada
                    
                    kn: "ಆಲರ್ಜಿಗಳಿಗೆ, ಲೊರಟಡಿನ್ ಅಥವಾ ಸೆಟಿರಿಜಿನ್ ಮುಂತಾದ ಆಂಟಿಹಿಸ್ಟಮೈನ್ಸ್ ಲಕ್ಷಣಗಳನ್ನು ನಿವಾರಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು."
                },
        
    

        };

        for (const symptom in responses) {
            if (lowerMessage.includes(symptom)) {
                return responses[symptom][language];
            }
        }

        return language === "en"
           en : "I'm sorry, I don't have information on that topic."
        return language === "kn"
            
           kn : "ಕ್ಷಮಿಸಿ, ನಾನು ಆ ವಿಷಯದ ಬಗ್ಗೆ ಮಾಹಿತಿ ಹೊಂದಿಲ್ಲ.";
    }
});