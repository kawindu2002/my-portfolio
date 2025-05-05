// ======================= Navbar navigation ==============================================================

// Select all navigation links inside the header
const navigationLinks = document.querySelectorAll("header nav a");

// Select the logo element
const logoLink = document.querySelector(".logo");

// Select all section elements in the page
const sections = document.querySelectorAll("section");

// Select the menu icon and navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

// Toggle the navbar visibility and icon when the menu icon is clicked
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark"); // Toggle icon class
    navbar.classList.toggle("active");     // Show/hide navbar
});

// Function to reset active state for navigation and sections
const activePage = () => {
    // Remove 'active' from all navigation links
    navigationLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Remove 'active' from all sections
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Reset menu icon and hide navbar
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}

// Add click events to navigation links
navigationLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        // Only do this if it's not already active
        if (!link.classList.contains("active")) {
            activePage(); // Clear all active states

            link.classList.add("active"); // Activate this link

            // Show the corresponding section after a short delay
            setTimeout(() => {
                sections[idx].classList.add("active");
            }, 100);
        }
    });
});

// When the logo is clicked, go back to the first section (usually 'Home')
logoLink.addEventListener("click", () => {
    if (!navigationLinks[0].classList.contains("active")) {
        activePage(); // Reset everything

        // Activate the first section after a short delay
        setTimeout(() => {
            sections[0].classList.add("active");
        }, 100);
    }
});


// ============================ External navigations ===============================================================

// Function to open an external link in a new tab
function openLink(link) {
    window.open(`${link}`, '_blank'); // Open link in new tab
}


// ======================= Resume buttons navigation ==============================================================

// Select all resume section buttons
const resumeBtns = document.querySelectorAll(".resume-btn");

// Add click events to each resume button
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume-detail");

        // Remove 'active' from all buttons
        resumeBtns.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate the clicked button
        btn.classList.add("active");

        // Hide all resume details
        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });

        // Show the detail that matches the clicked button
        resumeDetails[idx].classList.add("active");
    });
});


// ===================================== Projects navigation ======================================================================

// Select navigation arrows for project slides
const arrowRight = document.querySelector(".projects-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".projects-box .navigation .arrow-left");

let index = 0; // Track current slide index

// Function to update the project display
const activeprojects = () => {
    const imgSlide = document.querySelector(".img-box .img-slide");

    // Slide the images using translateX
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Disable left arrow if on the first slide
    if (index === 0) {
        arrowLeft.classList.add("disabled");
    } else {
        arrowLeft.classList.remove("disabled");
    }

    // Disable right arrow if on the last slide
    if (index === 1) {
        arrowRight.classList.add("disabled");
    } else {
        arrowRight.classList.remove("disabled");
    }

    // Update the visible project detail
    const projectDetails = document.querySelectorAll(".projects-detail");
    projectDetails.forEach(detail => {
        detail.classList.remove("active");
    });
    projectDetails[index].classList.add("active");
};

// Show the first project on page load
activeprojects();

// Right arrow click: show next project if not at the end
arrowRight.addEventListener("click", () => {
    if (index < 1) {
        index++;
        activeprojects();
    }
});

// Left arrow click: show previous project if not at the beginning
arrowLeft.addEventListener("click", () => {
    if (index > 0) {
        index--;
        activeprojects();
    }
});
