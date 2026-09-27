/* Burger Menu */

const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const navigationLinks = document.querySelectorAll(".navigation__link");

function closeMenu() {
  header?.classList.remove("header--menu-open");
  burger?.setAttribute("aria-expanded", "false");
  burger?.setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("menu-open");
}

burger?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("header--menu-open");

  burger.setAttribute("aria-expanded", String(isOpen));
  burger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  document.body.classList.toggle("menu-open", isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});