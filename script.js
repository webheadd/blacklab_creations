// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Testimonials data
const testimonials = [
    {
        name: 'Sarah Johnson',
        company: 'Bloom Café',
        text: 'The custom coasters with our café logo are absolutely perfect! The quality is outstanding and our customers always compliment them.',
        rating: 5,
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        name: 'Michael Chen',
        company: 'Wedding Planner',
        text: 'Ordered 200 personalized coasters for a wedding. They exceeded expectations - beautiful quality and arrived on time!',
        rating: 5,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        name: 'Emma Rodriguez',
        company: 'Home Enthusiast',
        text: 'These coasters are not just functional but genuine pieces of art. They\'ve become conversation starters at dinner parties!',
        rating: 5,
        image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
];

let currentTestimonial = 0;

// Testimonial navigation
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const testimonialCard = document.querySelector('.testimonial-card');
    
    testimonialCard.innerHTML = `
        <div class="testimonial-image">
            <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-rating">
            ${'<span class="star">★</span>'.repeat(testimonial.rating)}
        </div>
        <blockquote class="testimonial-text">
            "${testimonial.text}"
        </blockquote>
        <div class="testimonial-author">
            <p class="author-name">${testimonial.name}</p>
            <p class="author-company">${testimonial.company}</p>
        </div>
    `;
}

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        quantity: formData.get('quantity'),
        message: formData.get('message')
    };
    
    console.log('Form submitted:', data);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.product-card, .portfolio-card, .stat-item, .testimonial-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgb(162, 178, 176, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#A2B2B0';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});