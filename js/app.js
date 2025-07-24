var typed = new Typed('#text', {
    strings: ["AI Engineer", "Frontend Developer", "Backend Developer", "Mern Stack Developer"],
    typeSpeed: 35,
    backSpeed: 35,
    backDelay: 1000,
    loop: true
});

const toggleButton = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
  toggleButton.classList.toggle('active');
});
