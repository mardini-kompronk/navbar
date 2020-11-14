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

// scroll

const scrollNav = (value) => {
  let element = document.querySelector(`.${value}`);
  element.scrollIntoView({
    behavior: "smooth",
  });
};

// loading screen

const container = document.querySelector(".container");
const screenLoading = document.getElementById("loadscreen");
window.addEventListener("load", function () {
  container.style.display = "block";
  screenLoading.style.display = "none";
});
