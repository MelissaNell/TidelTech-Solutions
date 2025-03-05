document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Check if elements are found
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle button or nav-links not found.");
    }
});

// Select the menu toggle button and navigation links container
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links element
    navLinks.classList.toggle('active');
});


