const menuToggles = document.querySelectorAll(".menu-toggle"); // Select all elements with 'menu-toggle'
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");

menuToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});
