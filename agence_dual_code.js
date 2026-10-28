"use strict";

const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
const currentYear = document.querySelector("#current-year");

if (menuToggle && navigation) {
    const setMenuOpen = (isOpen) => {
        navigation.hidden = !isOpen;
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });

    window.matchMedia("(min-width: 761px)").addEventListener("change", () => {
        setMenuOpen(false);
    });
}

if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactStatus.hidden = false;
    });
}

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}
