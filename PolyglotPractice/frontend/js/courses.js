document.addEventListener('DOMContentLoaded', function () {
    const courseList = document.getElementById('course-list');
    const searchInput = document.getElementById('search-input');
    const skillLevel = document.getElementById('skill-level');
    const searchButton = document.getElementById('search-button');

    const courses = [
        { title: "Beginner's Spanish", description: "Learn basic greetings, numbers, and simple sentences.", level: "beginner", language: "spanish" },
        { title: "Intermediate Spanish", description: "Expand your vocabulary and learn more complex grammar.", level: "intermediate", language: "spanish" },
        { title: "Advanced Spanish", description: "Master Spanish fluency with deep grammar and conversation practice.", level: "advanced", language: "spanish" },
        { title: "Beginner's French", description: "Start learning essential French words and phrases.", level: "beginner", language: "french" },
        { title: "Intermediate French", description: "Enhance your skills with sentence structure and common expressions.", level: "intermediate", language: "french" },
        { title: "Advanced French", description: "Achieve fluency through immersive speaking and writing exercises.", level: "advanced", language: "french" },
        { title: "Beginner's German", description: "Master basic greetings and essential vocabulary.", level: "beginner", language: "german" },
        { title: "Intermediate German", description: "Improve your speaking and listening skills with dialogues.", level: "intermediate", language: "german" },
        { title: "Advanced German", description: "Perfect your fluency with advanced grammar and conversation.", level: "advanced", language: "german" },
        { title: "Beginner's Italian", description: "Learn how to introduce yourself and navigate basic conversations.", level: "beginner", language: "italian" },
        { title: "Intermediate Italian", description: "Expand your vocabulary and sentence formation skills.", level: "intermediate", language: "italian" },
        { title: "Advanced Italian", description: "Become proficient in Italian with complex structures and expressions.", level: "advanced", language: "italian" }
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
                <p><strong>Level:</strong> ${capitalize(course.level)}</p>
                <button onclick="startCourse('${course.language}', '${course.level}')">Start Course</button>
            `;

            courseList.appendChild(courseCard);
        });

        courseList.style.display = "flex";
    }

    function searchCourses() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedLevel = skillLevel.value.toLowerCase();

        const filteredCourses = courses.filter(course => {
            const matchesSearchQuery = course.title.toLowerCase().includes(searchQuery);
            const matchesSkillLevel = selectedLevel === "" || course.level === selectedLevel;
            return matchesSearchQuery && matchesSkillLevel;
        });

        displayCourses(filteredCourses);
    }

    searchButton.addEventListener('click', searchCourses);

    window.startCourse = function(language, level) {
        const path = `/courses/${language}/${level}.html`;
        window.location.href = path;
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
