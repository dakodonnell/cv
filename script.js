document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("resume.json"); // Fetch JSON resume
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

        // Populate Skills
        const skillsDiv = document.getElementById("skills");
        skillsDiv.innerHTML = "<h2>Skills</h2><ul>";
        resume.skills.forEach(skill => {
            skillsDiv.innerHTML += `<li>${skill}</li>`;
        });
        skillsDiv.innerHTML += "</ul>";

        // Populate Volunteer Work
        const volunteerDiv = document.getElementById("volunteer");
        volunteerDiv.innerHTML = "<h2>Volunteer Work</h2>";
        resume.volunteer.forEach(vol => {
            volunteerDiv.innerHTML += `<p><strong>${vol.organization}</strong> - ${vol.position} (${vol.startDate} - ${vol.endDate})</p>`;
        });

        // Populate Certificates
        const certificatesDiv = document.getElementById("certificates");
        certificatesDiv.innerHTML = "<h2>Certificates</h2>";
        resume.certificates.forEach(cert => {
            certificatesDiv.innerHTML += `<p><strong>${cert.name}</strong> - ${cert.issuer} (${cert.date})</p>`;
        });

        // Populate Publications
        const publicationsDiv = document.getElementById("publications");
        publicationsDiv.innerHTML = "<h2>Publications</h2>";
        resume.publications.forEach(pub => {
            publicationsDiv.innerHTML += `<p><strong>${pub.title}</strong> - ${pub.publisher} (${pub.date})</p>`;
        });

        // Populate Interests
        const interestsDiv = document.getElementById("interests");
        interestsDiv.innerHTML = "<h2>Interests</h2><ul>";
        resume.interests.forEach(interest => {
            interestsDiv.innerHTML += `<li>${interest}</li>`;
        });
        interestsDiv.innerHTML += "</ul>";

        // Populate References
        const referencesDiv = document.getElementById("references");
        referencesDiv.innerHTML = "<h2>References</h2>";
        resume.references.forEach(ref => {
            referencesDiv.innerHTML += `<p><strong>${ref.name}</strong> - ${ref.contact}</p>`;
        });
    } catch (error) {
        console.error("Error loading resume:", error);
    }
});
