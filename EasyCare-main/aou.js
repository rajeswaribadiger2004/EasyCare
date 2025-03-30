let currentLang = 'en'; // Default language is English

const textContent = {
    en: {
        title: "EasyCare",
        langToggle: "ಕನ್ನಡ",
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            pricing: "Pricing",
            pages: "Pages",
            appointment: "Appointment",
            search: "Search",
            contact: "Contact"
        },
        about: {
            introTitle: "Who We Are",
            introText: "EasyCare is dedicated to providing essential healthcare services to rural and village communities. We aim to ensure that everyone, regardless of location, has access to affordable and quality healthcare. With a focus on preventive care and local outreach, we work to create healthier, happier communities.",
            missionTitle: "Our Mission",
            missionText: "To bridge the gap between rural areas and quality healthcare by offering accessible services, health education, and preventive care. We strive to empower village residents with knowledge and resources, making it easier for them to lead healthier lives.",
            servicesTitle: "Our Services",
            servicesList: [
                "Mobile Health Clinics that visit villages regularly to provide check-ups and treatments.",
                "Telemedicine consultations, allowing residents to connect with doctors remotely.",
                "Vaccination and immunization drives to prevent common illnesses in rural areas.",
                "Health awareness workshops to educate on hygiene, nutrition, and chronic disease prevention.",
                "Emergency response services for urgent health issues within villages."
            ],
            impactTitle: "Our Impact on Village Life",
            impactText: "By bringing healthcare to villages, EasyCare improves health outcomes, reduces the need for costly hospital visits, and helps families maintain productivity. Our healthcare efforts have led to healthier children, fewer illnesses, and stronger communities."
        }
    },
    kn: {
        title: "ಈಸಿಕೇರ್",
        langToggle: "English",
        nav: {
            home: "ಮುಖಪುಟ",
            about: "ಬಗ್ಗೆ",
            services: "ಸೇವೆಗಳು",
            pricing: "ಬೆಲೆ",
            pages: "ಪುಟಗಳು",
            appointment: "ನೆಮಕಾತಿ",
            search: "ಹುಡುಕಿ",
            contact: "ಸಂಪರ್ಕ"
        },
        about: {
            introTitle: "ನಾವು ಯಾರು",
            introText: "ಈಸಿಕೇರ್ ಗ್ರಾಮೀಣ ಮತ್ತು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಅವಶ್ಯಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ನಿಷ್ಣಾತವಾಗಿದೆ. ನಾವು ಪ್ರತಿಯೊಬ್ಬರಿಗೂ, ಸ್ಥಳವೇನೆಂದರೂ, ಅಗ್ಗದ ಮತ್ತು ಗುಣಮಟ್ಟದ ಆರೋಗ್ಯ ಸೇವೆಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಖಚಿತಪಡಿಸಲು ತಾವು ಬೆಂಬಲಿಸುತ್ತೇವೆ. ತಡೆಗಟ್ಟುವ ಆರೊಗ್ಯ ಹಾಗೂ ಸ್ಥಳೀಯ ಬೆಂಬಲಕ್ಕಾಗಿ ನಾವು ಹೆಚ್ಚು ಆರೋಗ್ಯಕರ, ಸಂತೋಷಕರ ಸಮುದಾಯಗಳನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.",
            missionTitle: "ನಮ್ಮ ಮಿಷನ್",
            missionText: "ಗ್ರಾಮಾಂತರ ಪ್ರದೇಶಗಳಿಗೆ ಆರೋಗ್ಯ ಸೇತುವೆಯಂತೆ ನಿಲ್ಲಿಸುವ ಸೇವೆಗಳನ್ನು, ಆರೋಗ್ಯ ಶಿಕ್ಷಣವನ್ನು, ಮತ್ತು ತಡೆಗಟ್ಟುವ ಆರೊಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ. ಗ್ರಾಮಗಳ ನಿವಾಸಿಗಳನ್ನು ಜ್ಞಾನ ಮತ್ತು ಸಂಪತ್ತುಗಳಿಂದ ಶಕ್ತಿಮಾಡಲು ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ, ಅವುಗಳನ್ನು ಆರೋಗ್ಯಕರ ಜೀವನವನ್ನು ಅನುಸರಿಸಲು ಸುಲಭಗೊಳಿಸುತ್ತವೆ.",
            servicesTitle: "ನಮ್ಮ ಸೇವೆಗಳು",
            servicesList: [
                "ಗ್ರಾಮಗಳಿಗೆ ತಡೆಗಟ್ಟುವ ಜನನಾರಕ್ಷಣಾ ಸೇವೆಗಳನ್ನು ಸ್ಥಳೀಯವಾಗಿಯೇ ಒದಗಿಸುವ ಮೊಬೈಲ್ ಆರೋಗ್ಯ ಕ್ಲಿನಿಕ್.",
                "ಟೆಲಿಮೆಡಿಸಿನ್ ಮೂಲಕ ಡಾಕ್ಟರ್‌ರೊಂದಿಗೆ ಸಂಪರ್ಕ.",
                "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಾಮಾನ್ಯ ರೋಗಗಳನ್ನು ತಡೆಗಟ್ಟಲು ಲಸಿಕೆ ಮತ್ತು ಶೀಘ್ರತ.",
                "ಶುಚಿತ್ವ, ಪೋಷಣಾ ಆರೋಗ್ಯ, ದೀರ್ಘಕಾಲಿಕ ಕಾಯಿಲೆ ತಡೆ ಬಗ್ಗೆ ಕಾರ್ಯಾಗಾರಗಳು.",
                "ಗ್ರಾಮೀಣ ತುರ್ತು ಆರೋಗ್ಯದ ಅಗತ್ಯಗಳಿಗೆ ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ."
            ],
            impactTitle: "ಗ್ರಾಮೀಣ ಜೀವನದ ಮೇಲೆ ನಮ್ಮ ಪರಿಣಾಮ",
            impactText: "ಗ್ರಾಮಗಳಿಗೆ ಆರೋಗ್ಯ ಒದಗಿಸುವ ಮೂಲಕ, ಈಸಿಕೇರ್ ಆರೋಗ್ಯದ ಫಲಿತಾಂಶಗಳನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ, ದುಬಾರಿ ಆಸ್ಪತ್ರೆ ಭೇಟಿ ಬೇಕಿಲ್ಲ, ಮತ್ತು ಕುಟುಂಬಗಳನ್ನು ಕಾರ್ಯನಿರ್ವಹಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಮ್ಮ ಆರೋಗ್ಯ ಸೇವಾ ಪ್ರಯತ್ನಗಳು ಆರೋಗ್ಯಕರ ಮಕ್ಕಳಿಗೆ, ಕಡಿಮೆ ರೋಗಗಳಿಗೆ, ಮತ್ತು ಶಕ್ತಿಶಾಲಿ ಸಮುದಾಯಗಳಿಗೆ ಕಾರಣವಾಗಿವೆ."
        }
    }
};

function toggleLanguage() {
    // Toggle between English and Kannada
    currentLang = currentLang === 'en' ? 'kn' : 'en';

    // Update title and language toggle button
    document.getElementById("header-title").textContent = textContent[currentLang].title;
    document.getElementById("lang-toggle").textContent = textContent[currentLang].langToggle;

    // Update navbar
    document.getElementById("nav-home").textContent = textContent[currentLang].nav.home;
    document.getElementById("nav-about").textContent = textContent[currentLang].nav.about;
    document.getElementById("nav-services").textContent = textContent[currentLang].nav.services;
    document.getElementById("nav-pricing").textContent = textContent[currentLang].nav.pricing;
    document.getElementById("nav-pages").textContent = textContent[currentLang].nav.pages;
    document.getElementById("nav-appointment").textContent = textContent[currentLang].nav.appointment;
    document.getElementById("nav-search").textContent = textContent[currentLang].nav.search;
    document.getElementById("nav-contact").textContent = textContent[currentLang].nav.contact;

    // Update about sections
    document.getElementById("intro-title").textContent = textContent[currentLang].about.introTitle;
    document.getElementById("intro-text").textContent = textContent[currentLang].about.introText;
    document.getElementById("mission-title").textContent = textContent[currentLang].about.missionTitle;
    document.getElementById("mission-text").textContent = textContent[currentLang].about.missionText;
    document.getElementById("services-title").textContent = textContent[currentLang].about.servicesTitle;

    // Update services list
    const servicesListElement = document.getElementById("services-list");
    servicesListElement.innerHTML = ""; // Clear current list
    textContent[currentLang].about.servicesList.forEach((service) => {
        const li = document.createElement("li");
        li.textContent = service;
        servicesListElement.appendChild(li);
    });

    document.getElementById("impact-title").textContent = textContent[currentLang].about.impactTitle;
    document.getElementById("impact-text").textContent = textContent[currentLang].about.impactText;
}