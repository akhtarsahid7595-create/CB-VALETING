const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
navToggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
const select = document.querySelector('#package-select');
document.querySelectorAll('.package-button').forEach((button) => button.addEventListener('click', () => { select.value = button.dataset.package; document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }));
document.querySelector('#booking-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello HI Automotive Car Care, I would like to enquire about a booking.%0A%0AName: ${data.get('firstName')} ${data.get('lastName')}%0APhone: ${data.get('phone')}%0AEmail: ${data.get('email')}%0AVehicle: ${data.get('make')} ${data.get('model')}%0APackage: ${data.get('package')}%0AAdditional service: ${data.get('addon')}%0AMessage: ${data.get('message') || '—'}`;
  window.open(`https://wa.me/447707399734?text=${message}`, '_blank', 'noopener');
});
