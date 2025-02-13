document.addEventListener('DOMContentLoaded', function () {
    const courseList = document.getElementById('course-list');
    const searchInput = document.getElementById('search-input');
    const skillLevel = document.getElementById('skill-level');
    const searchButton = document.getElementById('search-button');


    const courses = [
        { title: "Beginner's Spanish", description: "Learn basic greetings, numbers, and simple sentences.", level: "Beginner", id: "spanish-beginner" },
        { title: "Intermediate Spanish", description: "Expand your vocabulary and learn more complex grammar.", level: "Intermediate", id: "spanish-intermediate" },
        { title: "Advanced Spanish", description: "Master Spanish fluency with deep grammar and conversation practice.", level: "Advanced", id: "spanish-advanced" },
        { title: "Beginner's French", description: "Start learning essential French words and phrases.", level: "Beginner", id: "french-beginner" },
        { title: "Intermediate French", description: "Enhance your skills with sentence structure and common expressions.", level: "Intermediate", id: "french-intermediate" },
        { title: "Advanced French", description: "Achieve fluency through immersive speaking and writing exercises.", level: "Advanced", id: "french-advanced" },
        { title: "Beginner's German", description: "Master basic greetings and essential vocabulary.", level: "Beginner", id: "german-beginner" },
        { title: "Intermediate German", description: "Improve your speaking and listening skills with dialogues.", level: "Intermediate", id: "german-intermediate" },
        { title: "Advanced German", description: "Perfect your fluency with advanced grammar and conversation.", level: "Advanced", id: "german-advanced" },
        { title: "Beginner's Italian", description: "Learn how to introduce yourself and navigate basic conversations.", level: "Beginner", id: "italian-beginner" },
        { title: "Intermediate Italian", description: "Expand your vocabulary and sentence formation skills.", level: "Intermediate", id: "italian-intermediate" },
        { title: "Advanced Italian", description: "Become proficient in Italian with complex structures and expressions.", level: "Advanced", id: "italian-advanced" }
    ];


    courseList.style.display = "none";


    function displayCourses(filteredCourses) {
        courseList.innerHTML = "";

        if (filteredCourses.length === 0) {
            courseList.innerHTML = "<p>No courses found. Please adjust your search criteria.</p>";
            courseList.style.display = "block";
            return;
        }

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';

            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p><strong>Level:</strong> ${course.level}</p>
                <button onclick="startCourse('${course.id}')">Start Course</button>
            `;

            courseList.appendChild(courseCard);
        });

        courseList.style.display = "flex";
    }


    function searchCourses() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedLevel = skillLevel.value;

        const filteredCourses = courses.filter(course => {
            const matchesSearchQuery = course.title.toLowerCase().includes(searchQuery);
            const matchesSkillLevel = selectedLevel === "" || course.level === selectedLevel;

            return matchesSearchQuery && matchesSkillLevel;
        });

        displayCourses(filteredCourses);
    }


    searchButton.addEventListener('click', searchCourses);


    function startCourse(courseId) {
        alert(`Starting ${courseId.replace("-", " ")} course!`);
        window.location.href = `course-details.html?course=${courseId}`;
    }
});
