document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel-container');
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        const newTransform = -currentIndex * (100 / 3);
        inner.style.transform = `translateX(${newTransform}%)`;

        // Circular navigation logic
        if (currentIndex === totalItems) {
            setTimeout(() => {
                inner.style.transition = 'none';
                currentIndex = 0;
                inner.style.transform = `translateX(0)`;
            }, 500);
            setTimeout(() => {
                inner.style.transition = 'transform 0.5s';
            }, 600);
        }
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Initialize carousel position
    updateCarousel();
});
