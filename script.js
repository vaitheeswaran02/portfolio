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
   CLOSE MOBILE MENU WITH ESC KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navLinks) {

            navLinks.classList.remove("open");

        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    }

});
