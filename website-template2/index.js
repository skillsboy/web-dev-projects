const pageHamburguer = document.getElementById("page-nav-hamb");
const pageNav = document.getElementById("page-nav");
const pageNavClose = document.getElementById("page-nav__close-btn");
const pageNavOverlay = document.getElementById("page-nav__overlay");

pageHamburguer.onclick = function () {
    pageNav.classList.add("page-nav--active");
};

pageNavClose.onclick = function () {
    pageNav.classList.remove("page-nav--active");
};

pageNavOverlay.onclick = function () {
    pageNav.classList.remove("page-nav--active");
};


let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});