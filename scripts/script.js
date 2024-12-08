// Light / Dark Mode
const toggleTheme = document.getElementById("dark-mode-toggle");
const htmlElement = document.documentElement;

toggleTheme.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
});

// Header
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-link-list");
const overlay = document.querySelector(".overlay");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    // if intersecting, add "show" for transition / animation
    (entry) => entry.isIntersecting && entry.target.classList.add("show")
  );
});

// "section-anim" only used in all section elements for transitions
const sectionsAnim = document.querySelectorAll(".section-anim");
sectionsAnim.forEach((section) => observer.observe(section));

// use "toggle" or "remove" as the action for parameter
function toggleNavigation(action) {
  menu.classList[action]("active"); // open or close navigation list
  document.documentElement.classList[action]("nav-open"); // enable or disable Y-axis
  overlay.classList[action]("active"); // overlay for blur
}

// Hamburger open or close transition
hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  toggleNavigation("toggle");
});

// closes navigation when links are clicked and puts back default hamburger
menu.querySelectorAll(".nav-link-list a").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    toggleNavigation("remove");
  })
);

// removes mobile navigation and it's related classes if left open during-
// resizing of width greater than 768px
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768 && hamburger.classList.contains("active")) {
    toggleNavigation("remove");
    hamburger.classList.remove("active");
  }
});
