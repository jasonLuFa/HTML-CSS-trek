const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("showNav");
});
