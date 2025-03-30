// Function to switch the language based on the selected button
function setLanguage(language) {
    // Get all elements with the data-en and data-kn attributes
    const elements = document.querySelectorAll('[data-en], [data-kn]');

    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const knText = element.getAttribute('data-kn');

        // Switch the inner text based on the selected language
        if (language === 'en') {
            element.innerText = enText;
        } else if (language === 'kn') {
            element.innerText = knText;
        }
    });
}

// Set the default language to English
setLanguage('en');