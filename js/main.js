function toggleMenu(event) {
  event.preventDefault();
  const container = event.target.closest('.nav');
  const menu = container.querySelector('.nav-menu');
  menu.classList.toggle('is-active', !menu.classList.contains('is-active'));
}
document.querySelector('.nav-toggle').addEventListener('click', toggleMenu);
