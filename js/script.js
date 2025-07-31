document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');
    const submenuToggles = document.querySelectorAll('.submenu-toggle'); // Select all submenu toggles

    // Toggle main navigation (hamburger menu)
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Close any open submenus when main nav is toggled
            submenuToggles.forEach(toggle => {
                const parentLi = toggle.closest('.has-submenu');
                if (parentLi && parentLi.classList.contains('active')) {
                    parentLi.classList.remove('active');
                }
            });
        });
    }

    // Toggle submenus on click (for mobile/hamburger menu)
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            // Prevent the click from propagating up to parent elements
            event.stopPropagation();

            const parentLi = this.closest('.has-submenu'); // Get the parent <li> with .has-submenu
            if (parentLi) {
                // Toggle the 'active' class on the parent <li>
                parentLi.classList.toggle('active');

                // Optional: Close other submenus if only one should be open at a time
                // (Uncomment this block if you want only one submenu to be open at once)
                // submenuToggles.forEach(otherToggle => {
                //     if (otherToggle !== toggle) {
                //         const otherParentLi = otherToggle.closest('.has-submenu');
                //         if (otherParentLi && otherParentLi.classList.contains('active')) {
                //             otherParentLi.classList.remove('active');
                //         }
                //     }
                // });
            }
        });
    });

    // Close main navigation when a main link is clicked (optional but good for mobile UX)
    // Note: Clicking a submenu link will also close the main nav
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            // Only close main nav if not a submenu toggle itself
            if (window.innerWidth <= 768) { // Only apply this logic on mobile
                // If the clicked link is a main nav link or a submenu link
                if (!link.classList.contains('submenu-toggle')) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('active');

                    // Also close any open submenus
                    submenuToggles.forEach(toggle => {
                        const parentLi = toggle.closest('.has-submenu');
                        if (parentLi && parentLi.classList.contains('active')) {
                            parentLi.classList.remove('active');
                        }
                    });
                }
            }
        });
    });
});
