const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const navLinks = nav.querySelectorAll('.nav__link');
const body = document.body;

const openMenu = () => {
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Закрыть меню');
  burger.classList.add('burger--active');
  nav.classList.add('nav--active');
  body.classList.add('fix-scroll');
}

const closeMenu = () => {
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Открыть меню");
  burger.classList.remove("burger--active");
  nav.classList.remove("nav--active");
  body.classList.remove("fix-scroll");
}

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('burger--active');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach(el => {
  el.addEventListener('click', () => {
    closeMenu();
  });
});