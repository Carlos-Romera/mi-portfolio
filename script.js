const nav = document.getElementById('cr-nav');
const track = document.getElementById('cr-track');

// Clonamos el contenido del carrusel para crear el efecto infinito sin cortes
if (track) {
    track.innerHTML += track.innerHTML;
}

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const items = document.querySelectorAll('.cr-timeline-item');
const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 150);
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });

items.forEach(el => obs.observe(el));