// ScrollReveal Animation (When Scroll windows animate sections)
const sReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: 'true'
})

sReveal.reveal('.contact_form');
sReveal.reveal('.projects_card', { interval: 100 });




// Scroll Up Button
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 150 ? scrollUp.classList.add('show-scrollUp') : scrollUp.classList.remove('show-scrollUp');
}
window.addEventListener('scroll', scrollUp);
