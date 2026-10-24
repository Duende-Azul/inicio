const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

function setMenuOpen(isOpen) {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    mainNav.classList.toggle('is-open', isOpen);
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mainNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header') && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 420);
}, { passive: true });
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
