const nav = document.querySelector(".menu");
const menu = document.querySelector(".nav-menu");
const closeNav = document.querySelector(".js-menu");


nav.addEventListener('click', () => {
  menu.style.display = "block";
  nav.style.display = "none";
})

closeNav.addEventListener('click', () => {
  menu.style.display = "none";
  nav.style.display = "block";
})