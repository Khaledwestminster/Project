document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('course-list');

    // Sample data for courses (replace with backend data later)
    const courses = [
        { title: "Beginner's Spanish", description: "Learn the basics of Spanish.", button: "Start" },
        { title: "Intermediate French", description: "Improve your French skills.", button: "Start" },
        { title: "Advanced German", description: "Master the German language.", button: "Start" }
    ];

    // Populate courses dynamically
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button>${course.button}</button>
        `;
        courseList.appendChild(courseCard);
    });

    // Example: Add click event for "Start Learning" button
    const startButton = document.getElementById('start-learning');
    startButton.addEventListener('click', () => {
        alert('Redirecting you to courses!');
    });
 const navLinks = document.querySelectorAll('nav ul li a');

    // Function to handle link click
    function handleNavClick(event) {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        event.target.classList.add('active');

        // Example action command: Log the selected link
        console.log(`You clicked on ${event.target.textContent}`);
        alert(`Navigating to ${event.target.textContent}`);
    }

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

});
