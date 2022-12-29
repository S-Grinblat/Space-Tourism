const openMenu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.icon-logo');
let links_mobil = document.querySelector('.links__container-mobil');
const home = document.querySelector('.home-container-mobil');
const destinationMoons = document.querySelector('.destination__moon-details');
const technology = document.querySelector('.technology-details');

openMenu.addEventListener('click', () => {
  links_mobil.style.display = 'block';
  home.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  home.style.display = 'block';
  links_mobil.style.display = 'none';
});

openMenu.addEventListener('click', () => {
  links_mobil.style.display = 'block';
  destinationMoons.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  links_mobil.style.display = 'none';
  destinationMoons.style.display = 'block';
});

openMenu.addEventListener('click', () => {
  links_mobil.style.display = 'block';
  technology.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  links_mobil.style.display = 'none';
  technology.style.display = 'block';
});