const hamburgerIcon = document.querySelector(".hamburger-icon");
const navBar = document.querySelector("nav");

hamburgerIcon.addEventListener("click", function() {
    navBar.classList.toggle("active"); // Toggle the active class on the nav element
});