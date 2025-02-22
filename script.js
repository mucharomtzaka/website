// Smooth scrolling effect for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// GSAP Animations
gsap.from("#home h1", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
gsap.from("#home p", { duration: 1, x: 100, opacity: 0, delay: 0.8 });
gsap.from(".btn", { duration: 1, scale: 0.8, opacity: 0, delay: 1 });

// Reveal sections when scrolling
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.classList.add("fade-in");
});

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.animationDelay = "0.3s";
            section.classList.add("visible");
        }
    });
});


// Parallax Scrolling Effect
window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    document.querySelector("#home").style.backgroundPositionY = `${scrollPos * 0.5}px`;
});

// Typing Effect
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
    });

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check localStorage for dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️"; // Sun icon for light mode
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.textContent = "☀️"; // Sun icon
        } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.textContent = "🌙"; // Moon icon
        }
    });

    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show"); // Show button when scrolled down
        } else {
            scrollToTopBtn.classList.remove("show"); // Hide when near the top
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    });


    const textElement = document.getElementById("typing-text");
    const text = "A Passionate Software Engineer"; // Text to type
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust speed (100ms per letter)
        }
    }

    typeText(); // Start typing effect

});

// Project Data with Multiple Images
const projectData = {
    project1: {
        title: "Aplikasi Kasir Modern",
        description: "A Java-based POS system with Firebase integration.",
        images: ["images/project1-1.jpg", "images/project1-2.jpg", "images/project1-3.jpg","images/project4-1.jpg"]
    },
    project2: {
        title: "Absensi QRcode",
        description: "Absensi QRcode Project Mysch with Laravel.",
        images: ["images/project2-1.jpg", "images/project3-1.jpg", "images/project3-1.jpg","images/project4-1.jpg"]
    },
    project3: {
        title: "Portfolio UI",
        description: "A modern UI/UX design for a personal portfolio website.",
        images: ["images/project3-1.jpg", "images/project1-1.jpg", "images/project2-1.jpg","images/project4-1.jpg"]
    },
    project4: {
        title: "Kemitraan HAJ",
        description: "Agen Pemasaran Umroh dan Haji Apps  Flutter base system .",
        images: ["images/project4-1.jpg","images/project1-1.jpg", "images/project2-1.jpg", "images/project3-1.jpg"]
    }

};

// Variables for Image Slider
let currentProject = null;
let currentImageIndex = 0;
let autoPlayInterval;

// Open Modal with Auto-Play Slider
function openModal(projectId) {
    const modal = document.getElementById("project-modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    currentProject = projectData[projectId];
    currentImageIndex = 0;

    modalTitle.textContent = currentProject.title;
    modalDescription.textContent = currentProject.description;
    modalImage.src = currentProject.images[currentImageIndex];

    modal.style.display = "flex";
}

// Next Slide
function nextSlide() {
    if (currentProject) {
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        document.getElementById("modal-image").src = currentProject.images[currentImageIndex];
    }
}

// Previous Slide
function prevSlide() {
    if (currentProject) {
        currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        document.getElementById("modal-image").src = currentProject.images[currentImageIndex];
    }
}



// Close Modal
function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function (event) {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        closeModal();
    }
};

// Filtering Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

