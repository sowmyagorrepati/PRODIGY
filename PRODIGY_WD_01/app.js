const blogSlide = document.querySelector('.blog .blogcontainer');

function moveLeft(slide) {
    slide.scrollLeft -= 500; 
}

function moveRight(slide) {
    slide.scrollLeft += 500; 
}

document.querySelector('.blog .left').addEventListener('click', function() {
    moveLeft(blogSlide);
});

document.querySelector('.blog .right').addEventListener('click', function() {
    moveRight(blogSlide);
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar .tabs ul li a");
    const footlinks = document.querySelectorAll(".footer .sec2 ul a");
    const navbarHeight = 60;

    links.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    footlinks.forEach(link =>{
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
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
