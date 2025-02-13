document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorContainer = document.getElementById('error-messages');
    const userProfile = document.getElementById('user-profile');
    const profileMenu = document.getElementById('profile-menu');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        let messages = [];


        if (fullNameInput.value.trim() === '') {
            isValid = false;
            messages.push('Full Name is required.');
            fullNameInput.classList.add('error');
        } else {
            fullNameInput.classList.remove('error');
        }


        if (emailInput.value.trim() === '') {
            isValid = false;
            messages.push('Email Address is required.');
            emailInput.classList.add('error');
        } else if (!validateEmail(emailInput.value.trim())) {
            isValid = false;
            messages.push('Please enter a valid Email Address.');
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }


        if (passwordInput.value.trim() === '') {
            isValid = false;
            messages.push('Password is required.');
            passwordInput.classList.add('error');
        } else if (passwordInput.value.trim().length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
            passwordInput.classList.add('error');
        } else {
            passwordInput.classList.remove('error');
        }

        if (isValid) {
            localStorage.setItem('user', JSON.stringify({ name: fullNameInput.value, avatar: 'default-avatar.png' }));
            alert('Sign-up successful! Redirecting to courses page.');
            window.location.href = 'courses.html';
        } else {
            displayErrorMessages(messages);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function displayErrorMessages(messages) {
        errorContainer.innerHTML = '';
        messages.forEach(message => {
            const p = document.createElement('p');
            p.textContent = message;
            errorContainer.appendChild(p);
        });
        errorContainer.style.display = 'block';
    }


    function checkUserSession() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            userName.textContent = userData.name;
            userAvatar.src = userData.avatar;
            userProfile.classList.remove('hidden');
        }
    }

    checkUserSession();

    userProfile.addEventListener('click', function () {
        profileMenu.classList.toggle('hidden');
    });
});

