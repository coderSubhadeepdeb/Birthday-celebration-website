
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const visibleCards = 4; // Number of cards visible at a time
let currentIndex = 0;

function updateCardSizes() {
    const centerIndex = Math.floor(visibleCards / 2);

    cards.forEach((card, index) => {
        const distanceFromCenter = Math.abs(index - (currentIndex + centerIndex));
        const scale = Math.max(0.7, 1 - 0.1 * distanceFromCenter); // 0.7 is the smallest scale
        card.style.transform = `scale(${scale})`;
    });
}

function goToCard(index) {
    currentIndex = Math.max(0, Math.min(index, cards.length - visibleCards));
    const cardWidth = cards[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;

    updateCardSizes();
}

// Initialize sizes and positions
goToCard(0);

nextButton.addEventListener('click', () => {
    goToCard(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    goToCard(currentIndex - 1);
});

// Adjust card sizes on initial load and on resize
window.addEventListener('load', updateCardSizes);
window.addEventListener('resize', updateCardSizes);



// -------------------------review  start----------------------------------

const sections = document.querySelectorAll('.photo-section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Trigger animation when 30% of the section is in view
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Unobserve once animation is triggered
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});



// -------------------------review----------------------------------
const galleryseemore= document.querySelector('#gallery-button');

galleryseemore.addEventListener('click', ()=>{
    window.location.href='gallery.html';
});