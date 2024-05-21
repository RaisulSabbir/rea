document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Initialize AOS animations

    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = target / 200; // Adjust for speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20); // Adjust for speed
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    function handleScroll() {
        const section = document.querySelector('.number');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY > sectionTop + sectionHeight - windowHeight) {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});