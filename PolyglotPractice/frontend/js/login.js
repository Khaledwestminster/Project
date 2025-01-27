document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    // Handle form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (replace with API call later)
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Mock authentication logic
        if (username === 'testuser' && password === 'password123') {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to the home page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
