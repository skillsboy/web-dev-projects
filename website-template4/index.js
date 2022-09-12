const navHamburger = document.getElementById("nav__hamburger-js");
const navLinkContainer = document.getElementById("nav__link-container-js");

navHamburger.addEventListener("click", () => {
  navLinkContainer.classList.toggle("nav__link-container--open");
});
