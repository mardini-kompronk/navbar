const menu = document.getElementById("menu-icon");
const close = document.getElementById("close");
const navbar = document.querySelector(".header nav");

function navOpen() {
  navbar.classList.add("nav-open");
}

function navClose() {
  navbar.classList.remove("nav-open");
}

menu.addEventListener("click", function () {
  navOpen();
});

close.addEventListener("click", function () {
  navClose();
});
