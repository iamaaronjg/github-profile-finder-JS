// Initialise GitHub class
const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP call
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert - will be run from ui.js

            } else {
                // Show profile - will also be run from ui.js
            }
        })
    } else {
        // Clear profile
    }
});