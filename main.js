// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submit Confirmation
document.getElementById('applicationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmationMessage').style.display = 'block';
});
