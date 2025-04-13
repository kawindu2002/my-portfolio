// ======================= Navbar navigation ==============================================================

const navigationLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");

const sections = document.querySelectorAll("section");

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
});

const activePage = () => {
    navigationLinks.forEach(link => {
        link.classList.remove("active");
    });

    sections.forEach(section => {
        section.classList.remove("active");
    });

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}

navigationLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add("active");
            }, 100);
        }
    });
});

logoLink.addEventListener("click", () => {
    if (!navigationLinks[0].classList.contains("active")) {
        activePage();

        setTimeout(() => {
            sections[0].classList.add("active");
        }, 100);
    }
});


// ============================ External navigations ===============================================================

function openRepo(link) {
    window.open(`${link}`, '_blank');
}


// ======================= Resume buttons navigation ==============================================================

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume-detail");

        resumeBtns.forEach(btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add("active");
    });
});

// ===================================== Projects navigation ======================================================================

const arrowRight = document.querySelector(".projects-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".projects-box .navigation .arrow-left");

let index = 0;

const activeprojects = () => {
    const imgSlide = document.querySelector(".img-box .img-slide");
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    if (index === 0) {
        arrowLeft.classList.add("disabled");
    } else {
        arrowLeft.classList.remove("disabled");
    }

    if (index === 1) {
        arrowRight.classList.add("disabled");
    } else {
        arrowRight.classList.remove("disabled");
    }


    const projectDetails = document.querySelectorAll(".projects-detail");
    projectDetails.forEach(detail => {
        detail.classList.remove("active");
    });
    projectDetails[index].classList.add("active");

};

activeprojects();

arrowRight.addEventListener("click", () => {
    if (index < 1) {
        index++;
        activeprojects();
    }
});

arrowLeft.addEventListener("click", () => {
    if (index > 0) {
        index--;
        activeprojects();
    }
});


