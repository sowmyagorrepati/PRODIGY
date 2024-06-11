document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar .tabs ul li a");
    const homeLinks = document.querySelectorAll(".homesec .btn a");
    const navbarHeight = 60;

    navbarLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    homeLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        const targetHref = e.target.getAttribute("href");

        if (targetHref === "./images/Resume.pdf") {
            return;
        }

        e.preventDefault();
        const targetId = targetHref.slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const targetPosition = targetSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
            } else {
                entry.target.classList.remove('scroll-animation');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

