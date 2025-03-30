// home.js

// Function to toggle between English and Kannada
function toggleLanguage() {
    const currentLanguage = document.getElementById('lang-toggle').innerText;

    if (currentLanguage === 'ಕನ್ನಡ') {
        // Change text to Kannada in Header, Navbar, and Main content
        document.getElementById('header-title').innerText = 'ಈಸಿಕೇರ್';
        document.getElementById('welcome').innerText = 'ಈಸಿಕೇರ್ ಆರೋಗ್ಯ ಸೇವೆಗೆ ಸ್ವಾಗತ';
        document.getElementById('intro').innerText = 'ನಾವು ನಮ್ಮ ಸಮುದಾಯದ ಉತ್ತಮ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.';
        
        document.getElementById('services-title').innerText = 'ನಮ್ಮ ಸೇವೆಗಳು';
        document.getElementById('service1-title').innerText = 'ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ತಪಾಸಣೆಗಳು';
        document.getElementById('service1-desc').innerText = 'ನಿಮ್ಮ ಕಲ್ಯಾಣವನ್ನು ಖಚಿತಪಡಿಸಲು ಸಮಗ್ರ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನಗಳು.';
        document.getElementById('service2-title').innerText = '24/7 ತುರ್ತು ಆರೈಕೆ';
        document.getElementById('service2-desc').innerText = 'ತುರ್ತು ವೈದ್ಯಕೀಯ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು 24/7 ಸೇವೆಗಳು.';
        document.getElementById('service3-title').innerText = 'ಔಷಧ ಸೇವೆಗಳು';
        document.getElementById('service3-desc').innerText = 'ಎಲ್ಲಾ ನಿಯೋಜಿತ ಔಷಧಿಗಳನ್ನು ಪಡೆಯಲು ಸೌಕರ್ಯ.';
        
        document.getElementById('benefits-title').innerText = 'ಏಕೆ ಈಸಿಕೇರ್ ಅನ್ನು ಆಯ್ಕೆಮಾಡಬೇಕು?';
        document.getElementById('benefit1').innerText = 'ಅನುಭವಿ ಮತ್ತು ದಯಾಲು ಆರೋಗ್ಯ ಸಂರಕ್ಷಣಾ ತಜ್ಞರು.';
        document.getElementById('benefit2').innerText = 'ಅದರಲ್ಲೇ ಕಡಿಮೆ ಬೆಲೆ ಹಾಗೂ ಪ್ರಾಪ್ತಿಯಿರುವ ಆರೋಗ್ಯ ಸೇವೆಗಳು.';
        document.getElementById('benefit3').innerText = 'ನಿಖರವಾದ ನಿರ್ಣಯ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ಪ್ರಮುಖ ವೈದ್ಯಕೀಯ ತಂತ್ರಜ್ಞಾನ.';
        
        document.getElementById('testimonials-title').innerText = 'ನಮ್ಮ ರೋಗಿಗಳು ಏನು ಹೇಳುತ್ತಾರೆ';
        document.getElementById('testimonial1').innerText = '"ಈಸಿಕೇರ್ ನನಗೆ ಆರೋಗ್ಯ ಸೇವೆಯ ಅನುಭವವನ್ನು ಬದಲಾಯಿಸಿತು. ಸಿಬ್ಬಂದಿ ತುಂಬಾ ಬೆಂಬಲಕಾರಿ ಮತ್ತು ಯಾವಾಗಲೂ ನನ್ನೊಂದಿಗೆ ಇರುತ್ತಾರೆ."';
        document.getElementById('testimonial2').innerText = '"ನಾನು ಪಡೆದ ಅತ್ಯುತ್ತಮ ಆರೋಗ್ಯ ಸೇವೆಗಳು. ವೇಗವಾದ ಮತ್ತು ಸೌಕರ್ಯವಿರುವ!"';
        
        document.getElementById('contact-title').innerText = 'ಸಂಪರ್ಕಿಸಿ';
        document.getElementById('contact-info').innerHTML = 'ನಿಯೋಜನೆಗಳು ಅಥವಾ ವಿಚಾರಣೆಗೆ, ನಮಗೆ ಕರೆಮಾಡಿ <strong>+91 9685741425</strong> ಅಥವಾ ಇಮೇಲ್ <strong>info@easycare.com</strong> ಮಾಡಿರಿ.';
        document.getElementById('footer-text').innerText = '© 2024 ಈಸಿ ಕೇರ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಉಳಿಯಿವೆ.';
        
        // Update Navbar items to Kannada
        document.getElementById('nav-home').innerText = 'ಮನೆ';
        document.getElementById('nav-about').innerText = 'ವಿಷಯ';
        document.getElementById('nav-service').innerText = 'ಸೇವೆಗಳು';
        document.getElementById('nav-pricing').innerText = 'ಬೆಲೆ';
        document.getElementById('nav-appointment').innerText = 'ನಿಯೋಜನೆ';
        document.getElementById('nav-search').innerText = 'ಹುಡುಕಲು';
        document.getElementById('nav-contact').innerText = 'ಸಂಪರ್ಕಿಸಿ';
        document.getElementById('nav-pages').innerText = 'ಪುಟಗಳು';

        // Change button text to English
        document.getElementById('lang-toggle').innerText = 'English';
    } else {
        // Change text back to English in Header, Navbar, and Main content
        document.getElementById('header-title').innerText = 'EasyCare';
        document.getElementById('welcome').innerText = 'Welcome to EasyCare Healthcare Services';
        document.getElementById('intro').innerText = 'We provide high-quality healthcare services to improve the well-being of our community.';
        
        document.getElementById('services-title').innerText = 'Our Services';
        document.getElementById('service1-title').innerText = 'General Health Check-ups';
        document.getElementById('service1-desc').innerText = 'Comprehensive health evaluations to ensure your well-being.';
        document.getElementById('service2-title').innerText = '24/7 Emergency Care';
        document.getElementById('service2-desc').innerText = 'Round-the-clock emergency services to handle urgent medical needs.';
        document.getElementById('service3-title').innerText = 'Pharmacy Services';
        document.getElementById('service3-desc').innerText = 'Convenient pharmacy access for all prescribed medications.';
        
        document.getElementById('benefits-title').innerText = 'Why Choose EasyCare?';
        document.getElementById('benefit1').innerText = 'Experienced and compassionate healthcare professionals.';
        document.getElementById('benefit2').innerText = 'Affordable and accessible healthcare options.';
        document.getElementById('benefit3').innerText = 'Advanced medical technology for accurate diagnosis and treatment.';
        
        document.getElementById('testimonials-title').innerText = 'What Our Patients Say';
        document.getElementById('testimonial1').innerText = '"EasyCare has truly transformed my healthcare experience. The staff are so supportive and always there for me."';
        document.getElementById('testimonial2').innerText = '"The best healthcare services I’ve received. Quick and convenient!"';
        
        document.getElementById('contact-title').innerText = 'Get in Touch';
        document.getElementById('contact-info').innerHTML = 'For appointments or inquiries, call us at <strong>+91 9685741425</strong> or email <strong>info@easycare.com</strong>.';
        document.getElementById('footer-text').innerText = '© 2024 EasyCare. All Rights Reserved.';
        
        // Update Navbar items back to English
        document.getElementById('nav-home').innerText = 'Home';
        document.getElementById('nav-about').innerText = 'About';
        document.getElementById('nav-service').innerText = 'Service';
        document.getElementById('nav-pricing').innerText = 'Pricing';
        document.getElementById('nav-appointment').innerText = 'Appointment';
        document.getElementById('nav-search').innerText = 'Search';
        document.getElementById('nav-contact').innerText = 'Contact';
        document.getElementById('nav-pages').innerText = 'Pages';

        // Change button text back to Kannada
        document.getElementById('lang-toggle').innerText = 'ಕನ್ನಡ';
    }
}