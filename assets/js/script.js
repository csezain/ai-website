const nav = document.querySelector(".navbar-nav-tag");
// const hamburger = document.querySelector(".menu-icon");
const hamburger = document.querySelector("#nav-icon3");

function toggleMenu(e) {
  e.classList.toggle("open");

  if (e.classList.contains("open")) {
    nav.classList.add("nav-visible");
    nav.classList.add("transitioned");
  } else {
    nav.classList.remove("nav-visible");
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 990) {
    nav.classList.remove("nav-visible");
    nav.classList.remove("transitioned");
    hamburger.classList.remove("open");
  } else {
    nav.classList.remove("transitioned");
  }
});
