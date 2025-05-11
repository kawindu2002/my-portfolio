// Select the menu icon and navbar
const menuIcon = document.querySelector(".menu-toggle i");
const navbar = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// Toggle the navbar visibility and icon when the menu icon is clicked
menuIcon.addEventListener("click", () => {
    // Toggle icon class
    menuIcon.classList.toggle("fa-xmark");
    // Show/hide navbar
    navbar.classList.toggle("active");
});


// close menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Hide navbar
        navbar.classList.remove("active");
        // Switch icon back
        menuIcon.classList.remove("fa-xmark");
    });
});

function openLink(link) {
    // Open link in new tab
    window.open(`${link}`, '_blank');
}


const toggleCheckbox = document.querySelector('#mode-toggle input');
const body = document.body;

//Get the saved mode from localStorage, if any.
const savedMode = localStorage.getItem('darkMode');

//If savedMode is 'enabled', enable dark mode.
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleCheckbox.checked = true;
}

//enables dark mode and saves the setting.
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

//disables dark mode and saves the setting.
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

//listens for checkbox change and toggles mode.
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {
        // Trigger when 60% of section is in view
        threshold: 0.6
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


window.addEventListener('load', function () {
    AOS.init({
        // Duration of animation
        duration: 1000,
        // Trigger animations both on scroll down and up
        once: false,
        // When the animation starts
        offset: 200,
        // Smooth easing effect
        easing: 'ease-in-out',
        // For better performance, throttle scroll events
        throttleDelay: 50,
    });
});
