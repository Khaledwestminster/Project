document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginErrorContainer = document.getElementById('login-error-messages');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const profileMenu = document.getElementById('profile-menu');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;
            let messages = [];


            if (loginEmail.value.trim() === '') {
                isValid = false;
                messages.push('Email Address is required.');
                loginEmail.classList.add('error');
            } else {
                loginEmail.classList.remove('error');
            }


            if (loginPassword.value.trim() === '') {
                isValid = false;
                messages.push('Password is required.');
                loginPassword.classList.add('error');
            } else {
                loginPassword.classList.remove('error');
            }

            if (isValid) {
                const user = JSON.parse(localStorage.getItem('user'));
                if (user && user.email === loginEmail.value) {
                    alert('Login successful! Redirecting to courses page.');
                    window.location.href = 'courses.html';
                } else {
                    messages.push('Invalid email or password.');
                    displayLoginErrorMessages(messages);
                }
            } else {
                displayLoginErrorMessages(messages);
            }

        });
    }

    function displayLoginErrorMessages(messages) {
        loginErrorContainer.innerHTML = '';
        messages.forEach(message => {
            const p = document.createElement('p');
            p.textContent = message;
            loginErrorContainer.appendChild(p);
        });
        loginErrorContainer.style.display = 'block';
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
