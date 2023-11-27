// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika Elhouse menu di klik
document.querySelector("#Elhouse-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const Elhouse = document.querySelector("#Elhouse-menu");

document.addEventListener("click", function (e) {
  if (!Elhouse.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
