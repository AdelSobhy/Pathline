document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submit Confirmation
    const form = document.getElementById('applicationForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const confirmationMessage = document.getElementById('confirmationMessage');
            if (confirmationMessage) {
                confirmationMessage.style.display = 'block';
            }
        });
    }

    // Testimonial Slider Fix
    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transition = 'opacity 1s ease-in-out';
            testimonial.style.position = 'absolute'; 
            testimonial.style.width = '100%'; 
            testimonial.style.opacity = i === 0 ? '1' : '0'; // Show only the first one
        });

        function showTestimonial() {
            testimonials[index].style.opacity = '0'; // Hide current testimonial

            index = (index + 1) % testimonials.length; // Move to the next

            testimonials[index].style.opacity = '1'; // Show next testimonial
        }

        setInterval(showTestimonial, 3000);
    } else {
        console.error("No testimonials found!");
    }
});
