// Set current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Scroll-to-Top functionality
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Toggle collapsible sections
function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
}

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 3000); // Change slide every 3 seconds
