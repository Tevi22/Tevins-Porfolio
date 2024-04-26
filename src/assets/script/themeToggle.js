
// JavaScript code to toggle between light and dark themes
function toggleTheme() {
    try {
        const body = document.body;
        if (!body) {
            throw new Error('Document body not found.');
        }

        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

        // Save the selected theme to local storage
        localStorage.setItem('theme', newTheme);

        // Remove current theme class and add new theme class
        body.classList.remove(currentTheme);
        body.classList.add(newTheme);
        console.log('Theme changed');
    } catch (error) {
        console.error('An error occurred while toggling the theme:', error.message);
    }
}

// Function to load the selected theme from local storage
function loadTheme() {
    try {
        // Attempt to retrieve the saved theme from local storage
        const savedTheme = localStorage.getItem('theme');

        // Check if a theme was found in local storage
        if (savedTheme) {
            // If a theme was found, add its class to the document body
            document.body.classList.add(savedTheme);
            console.log('Theme loaded from local storage');
        } else {
            // If no theme was found, default to the light theme
            document.body.classList.add('light-theme');
            console.log('No theme found in local storage. Defaulting to light theme');
        }
    } catch (error) {
        // If an error occurs during the theme loading process, log it to the console
        console.error('An error occurred while loading theme from local storage:', error.message);
    }
}



// Call the loadTheme function to load the selected theme on page load
loadTheme();
