const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.documentElement.classList.add("light-theme");
}

function updateThemeIcon() {
  if (!themeIcon) {
    return;
  }

  themeIcon.textContent = document.documentElement.classList.contains(
    "light-theme"
  )
    ? "☀"
    : "☾";
}

updateThemeIcon();

themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");

  const currentTheme = document.documentElement.classList.contains(
    "light-theme"
  )
    ? "light"
    : "dark";

  localStorage.setItem("theme", currentTheme);

  updateThemeIcon();
});