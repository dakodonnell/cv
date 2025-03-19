document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("cvdako20250318.json"); // Fetch JSON resume
        const resume = await response.json();

        document.getElementById("name").textContent = resume.basics.name;
        document.getElementById("email").textContent = `📧 ${resume.basics.email}`;

        // Populate Experience
        const experienceDiv = document.getElementById("experience");
        experienceDiv.innerHTML = "<h2>Experience</h2>";
        resume.work.forEach(job => {
            experienceDiv.innerHTML += `<p><strong>${job.position}</strong> at ${job.company} (${job.startDate} - ${job.endDate})</p>`;
        });

        // Populate Education
        const educationDiv = document.getElementById("education");
        educationDiv.innerHTML = "<h2>Education</h2>";
        resume.education.forEach(edu => {
            educationDiv.innerHTML += `<p><strong>${edu.institution}</strong> - ${edu.area} (${edu.startDate} - ${edu.endDate})</p>`;
        });

    } catch (error) {
        console.error("Error loading resume:", error);
    }
});
