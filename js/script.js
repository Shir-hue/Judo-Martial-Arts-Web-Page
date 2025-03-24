const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Scroll to Top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});