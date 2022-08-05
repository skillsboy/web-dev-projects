const navHamburguerBtn = document.getElementById("site-navbar-btn");
const navLinks = document.getElementById("site-navbar-links");

navHamburguerBtn.onclick = function () {
    navLinks.classList.toggle("active");
};


$('.site-navbar').singlePageNav({
    offset: 79.2 + 70,
    speed: 1500,
    updateHash: true
});


$("#site-navbar-links > li > a").click(function () {
    $(".site-navbar ul").removeClass("active");
});