// ---------- FORM VALIDATION ----------
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        event.preventDefault(); // Stop submission if validation fails
        alert("Please fill out all fields.");
    } else {
        // Let Formspree handle sending
        alert("✅ Your message is being sent!");
    }
});


// ---------- HAMBURGER MENU ----------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ---------- SMOOTH SCROLL FOR MENU LINKS ----------
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll smoothly to the target section
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Close menu after clicking a link (on mobile)
        navLinks.classList.remove('active');
    });
});

