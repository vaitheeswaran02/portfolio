/* =========================================================
   NAVBAR
========================================================= */

const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        /* Change menu icon */

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a navigation link */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formNote =
    document.getElementById("formNote");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* Get values */

            const name =
                contactForm
                    .querySelector('[name="name"]')
                    ?.value.trim();

            const email =
                contactForm
                    .querySelector('[name="email"]')
                    ?.value.trim();

            const message =
                contactForm
                    .querySelector('[name="message"]')
                    ?.value.trim();


            /* Basic validation */

            if (!name || !email || !message) {

                if (formNote) {

                    formNote.textContent =
                        "Please fill in all the fields.";

                }

                return;

            }


            /* Temporary success message */

            if (formNote) {

                formNote.textContent =
                    "Thank you! Your message has been received.";

            }


            /* Reset form */

            contactForm.reset();

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


if (
    sections.length > 0 &&
    navigationLinks.length > 0
) {

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    });

}


/* =========================================================
   PROJECT SLIDER
========================================================= */

const projectTrack =
    document.getElementById("projectTrack");

const projectPrev =
    document.getElementById("projectPrev");

const projectNext =
    document.getElementById("projectNext");

const projectDots =
    document.querySelectorAll(
        "#projectDots .slider-dot"
    );

const projectCards =
    document.querySelectorAll(
        "#projectTrack .project-card"
    );


let projectIndex = 0;

let projectAutoSlide;


/* =========================================================
   HOW MANY CARDS ARE VISIBLE?
========================================================= */

function getVisibleProjects() {

    if (window.innerWidth <= 650) {

        return 1;

    }

    if (window.innerWidth <= 1000) {

        return 2;

    }

    return 3;

}


/* =========================================================
   UPDATE SLIDER
========================================================= */

function updateProjectSlider() {

    if (
        !projectTrack ||
        projectCards.length === 0
    ) {

        return;

    }


    const visible =
        getVisibleProjects();


    /*
       Example desktop:

       4 projects
       3 visible

       Maximum index = 1

       0 = 01 02 03
       1 = 02 03 04
    */

    const maxIndex =
        projectCards.length - visible;


    /* Keep index within limits */

    if (projectIndex > maxIndex) {

        projectIndex = 0;

    }


    if (projectIndex < 0) {

        projectIndex = maxIndex;

    }


    /* Get actual card width */

    const cardWidth =
        projectCards[0]
            .getBoundingClientRect()
            .width;


    /* Get gap from CSS */

    const trackStyle =
        window.getComputedStyle(
            projectTrack
        );


    const gap =
        parseFloat(trackStyle.gap) || 0;


    /* Calculate movement */

    const move =
        projectIndex *
        (cardWidth + gap);


    /* Move track */

    projectTrack.style.transform =
        `translateX(-${move}px)`;


    /* Update dots */

    projectDots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === projectIndex
            );

        }
    );

}


/* =========================================================
   NEXT PROJECT
========================================================= */

function nextProject() {

    const visible =
        getVisibleProjects();


    const maxIndex =
        projectCards.length - visible;


    if (projectIndex < maxIndex) {

        projectIndex++;

    } else {

        /*
           When reaching the end,
           return to first project.
        */

        projectIndex = 0;

    }


    updateProjectSlider();

}


/* =========================================================
   PREVIOUS PROJECT
========================================================= */

function previousProject() {

    const visible =
        getVisibleProjects();


    const maxIndex =
        projectCards.length - visible;


    if (projectIndex > 0) {

        projectIndex--;

    } else {

        /*
           If at first project,
           go to the last position.
        */

        projectIndex = maxIndex;

    }


    updateProjectSlider();

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (projectNext) {

    projectNext.addEventListener(
        "click",
        () => {

            nextProject();

            restartProjectAutoSlide();

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (projectPrev) {

    projectPrev.addEventListener(
        "click",
        () => {

            previousProject();

            restartProjectAutoSlide();

        }
    );

}


/* =========================================================
   DOT BUTTONS
========================================================= */

projectDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                const visible =
                    getVisibleProjects();


                const maxIndex =
                    projectCards.length -
                    visible;


                /*
                   Don't allow an invalid position.
                */

                projectIndex =
                    Math.min(
                        index,
                        maxIndex
                    );


                updateProjectSlider();

                restartProjectAutoSlide();

            }
        );

    }
);


/* =========================================================
   AUTOMATIC SLIDING
========================================================= */

function startProjectAutoSlide() {

    stopProjectAutoSlide();


    projectAutoSlide =
        setInterval(
            () => {

                nextProject();

            },
            3000
        );

}


function stopProjectAutoSlide() {

    if (projectAutoSlide) {

        clearInterval(
            projectAutoSlide
        );

    }

}


/* =========================================================
   PAUSE ON HOVER
========================================================= */

const projectSlider =
    document.querySelector(
        ".project-slider"
    );


if (projectSlider) {

    projectSlider.addEventListener(
        "mouseenter",
        () => {

            stopProjectAutoSlide();

        }
    );


    projectSlider.addEventListener(
        "mouseleave",
        () => {

            startProjectAutoSlide();

        }
    );

}


/* =========================================================
   TOUCH / SWIPE
========================================================= */

let touchStartX = 0;

let touchEndX = 0;


if (projectSlider) {

    projectSlider.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.touches[0].clientX;

            stopProjectAutoSlide();

        },
        {
            passive: true
        }
    );


    projectSlider.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].clientX;


            const distance =
                touchStartX - touchEndX;


            if (distance > 50) {

                nextProject();

            }


            if (distance < -50) {

                previousProject();

            }


            startProjectAutoSlide();

        }
    );

}


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        updateProjectSlider();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateProjectSlider();

startProjectAutoSlide();

/* =========================================================
   CERTIFICATE SLIDER
========================================================= */

const certificateTrack =
    document.getElementById(
        "certificateTrack"
    );

const certificatePrev =
    document.getElementById(
        "certificatePrev"
    );

const certificateNext =
    document.getElementById(
        "certificateNext"
    );

const certificateDots =
    document.querySelectorAll(
        "#certificateDots .certificate-dot"
    );

const certificateCards =
    document.querySelectorAll(
        "#certificateTrack .certificate-card"
    );


let certificateIndex = 0;

let certificateAutoSlide;


/* =========================================================
   VISIBLE CERTIFICATES
========================================================= */

function getVisibleCertificates() {

    if (window.innerWidth <= 650) {

        return 1;

    }

    if (window.innerWidth <= 1000) {

        return 2;

    }

    return 3;

}


/* =========================================================
   UPDATE CERTIFICATE SLIDER
========================================================= */

function updateCertificateSlider() {

    if (
        !certificateTrack ||
        certificateCards.length === 0
    ) {

        return;

    }


    const visible =
        getVisibleCertificates();


    const maxIndex =
        Math.max(
            0,
            certificateCards.length -
            visible
        );


    if (certificateIndex > maxIndex) {

        certificateIndex = 0;

    }


    if (certificateIndex < 0) {

        certificateIndex = maxIndex;

    }


    const cardWidth =
        certificateCards[0]
            .getBoundingClientRect()
            .width;


    const trackStyle =
        window.getComputedStyle(
            certificateTrack
        );


    const gap =
        parseFloat(
            trackStyle.gap
        ) || 0;


    const move =
        certificateIndex *
        (cardWidth + gap);


    certificateTrack.style.transform =
        `translateX(-${move}px)`;


    /* Update dots */

    certificateDots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === certificateIndex
            );

        }
    );

}


/* =========================================================
   NEXT CERTIFICATE
========================================================= */

function nextCertificate() {

    const visible =
        getVisibleCertificates();


    const maxIndex =
        Math.max(
            0,
            certificateCards.length -
            visible
        );


    if (
        certificateIndex <
        maxIndex
    ) {

        certificateIndex++;

    } else {

        certificateIndex = 0;

    }


    updateCertificateSlider();

}


/* =========================================================
   PREVIOUS CERTIFICATE
========================================================= */

function previousCertificate() {

    const visible =
        getVisibleCertificates();


    const maxIndex =
        Math.max(
            0,
            certificateCards.length -
            visible
        );


    if (certificateIndex > 0) {

        certificateIndex--;

    } else {

        certificateIndex = maxIndex;

    }


    updateCertificateSlider();

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (certificateNext) {

    certificateNext.addEventListener(
        "click",
        () => {

            nextCertificate();

            restartCertificateAutoSlide();

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (certificatePrev) {

    certificatePrev.addEventListener(
        "click",
        () => {

            previousCertificate();

            restartCertificateAutoSlide();

        }
    );

}


/* =========================================================
   DOT NAVIGATION
========================================================= */

certificateDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                const visible =
                    getVisibleCertificates();


                const maxIndex =
                    Math.max(
                        0,
                        certificateCards.length -
                        visible
                    );


                certificateIndex =
                    Math.min(
                        index,
                        maxIndex
                    );


                updateCertificateSlider();

                restartCertificateAutoSlide();

            }
        );

    }
);


/* =========================================================
   AUTOMATIC SLIDING
========================================================= */

function startCertificateAutoSlide() {

    stopCertificateAutoSlide();


    certificateAutoSlide =
        setInterval(
            () => {

                nextCertificate();

            },
            4500
        );

}


function stopCertificateAutoSlide() {

    if (certificateAutoSlide) {

        clearInterval(
            certificateAutoSlide
        );

    }

}


function restartCertificateAutoSlide() {

    stopCertificateAutoSlide();

    startCertificateAutoSlide();

}


/* =========================================================
   PAUSE ON HOVER
========================================================= */

const certificateSlider =
    document.querySelector(
        ".certificate-slider"
    );


if (certificateSlider) {

    certificateSlider.addEventListener(
        "mouseenter",
        () => {

            stopCertificateAutoSlide();

        }
    );


    certificateSlider.addEventListener(
        "mouseleave",
        () => {

            startCertificateAutoSlide();

        }
    );

}


/* =========================================================
   TOUCH / SWIPE
========================================================= */

let certificateTouchStartX = 0;

let certificateTouchEndX = 0;


if (certificateSlider) {

    certificateSlider.addEventListener(
        "touchstart",
        (event) => {

            certificateTouchStartX =
                event.touches[0].clientX;

            stopCertificateAutoSlide();

        },
        {
            passive: true
        }
    );


    certificateSlider.addEventListener(
        "touchend",
        (event) => {

            certificateTouchEndX =
                event.changedTouches[0].clientX;


            const distance =
                certificateTouchStartX -
                certificateTouchEndX;


            if (distance > 50) {

                nextCertificate();

            }


            if (distance < -50) {

                previousCertificate();

            }


            startCertificateAutoSlide();

        }
    );

}


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        updateCertificateSlider();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateCertificateSlider();

startCertificateAutoSlide();


