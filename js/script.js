document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    if (hamburger && nav) { // Ensure elements exist before adding listeners
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active'); // Add active class to hamburger for animation
        });
    }
});
