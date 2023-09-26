document.addEventListener("DOMContentLoaded", function () {
    const coursesList = document.getElementById("courses-list");
    const popularCoursesList = document.getElementById("popular-courses-list");

    // Sample data
    const courses = ["Mathematics", "Science", "History"];
    const popularCourses = ["Physics", "Chemistry", "Biology"];

    // Populate the course lists
    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        coursesList.appendChild(li);
    });

    popularCourses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        popularCoursesList.appendChild(li);
    });
});
