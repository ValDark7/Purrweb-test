const burger = document.querySelector(".header__burger");
const closeBurger = document.querySelector(".burger-menu__close");
const burgerMenu = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  burgerMenu.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
});
