// Initialise GitHub class
const github = new Github();
// Initiate UI class
const ui = new UI;


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
                ui.showAlert('User not found', 'alert alert-danger'); // alert-danger is a Bootstrap class
            } else {
                // Show profile - will also be run from ui.js
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
            }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});