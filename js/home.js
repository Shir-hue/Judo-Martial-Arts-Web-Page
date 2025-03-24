document.addEventListener('DOMContentLoaded', () => {

    // Hamburger functionality
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }));
    }



    // Typing animation
    try {
        new Typed(".auto-type", {
            strings: ["Potential!", "Strength!", "Discipline!", "Confidence!"],
            typeSpeed: 160,
            backSpeed: 160,
            loop: true
        });
    } catch (error) {
        console.error('Typed.js initialization failed:', error);
    }



    // Google Maps initialization
    try {
        const apiKey = config.googleMapsApiKey;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    } catch (error) {
        console.error('Google Maps initialization failed:', error);
    }



    // Scroll to top functionality
    const scrollBtn = document.querySelector('.scroll-btn');
    
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            const bottomThreshold = documentHeight - windowHeight - 300; 

            if (scrollPosition > bottomThreshold) {
                scrollBtn.style.opacity = '1';
            } else {
                scrollBtn.style.opacity = '0';
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});