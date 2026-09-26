/* Theme Toggle */

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

/* Roster Generating */

const playersGrid = document.querySelector(".players-grid");

function createPlayerCard(player) {
  const card = document.createElement("article");
  card.classList.add("player-card");
  card.dataset.playerId = player.id;

  card.innerHTML = `
    <div class="player-card__image">
      <img
        src="${player.image}"
        alt="${player.name} — Team Styrit ${player.role} player"
      >
    </div>

    <div class="player-card__content">
      <span class="player-card__role">${player.role.toUpperCase()}</span>
      <h3 class="player-card__nickname">${player.name}</h3>
      <p class="player-card__name">${player.realName}</p>
      <span class="player-card__country">
        ${player.countryCode} / ${player.country}
      </span>
    </div>
  `;

  return card;
}

const playersPerPage = 4;
let currentPlayers = [];
let visiblePlayers = playersPerPage;

function renderPlayers() {
  if (!playersGrid) {
    return;
  }

  playersGrid.innerHTML = "";

  const playersToShow = currentPlayers.slice(0, visiblePlayers);

  playersToShow.forEach((player) => {
    const card = createPlayerCard(player);
    playersGrid.append(card);
  });

  updateLoadMoreButton();
}

const loadMoreButton = document.querySelector(".roster__load-more .button");

function updateLoadMoreButton() {
  if (!loadMoreButton) {
    return;
  }

  const hasHiddenPlayers = visiblePlayers < currentPlayers.length;

  loadMoreButton.hidden = !hasHiddenPlayers;
}

loadMoreButton?.addEventListener("click", () => {
  visiblePlayers += playersPerPage;
  renderPlayers();
});

currentPlayers = rosterData.cs2;
renderPlayers();

/* Category Switchers */

const categoryButtons = document.querySelectorAll(
  ".category-switcher__button"
);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => {
      item.classList.remove("category-switcher__button--active");
    });

    button.classList.add("category-switcher__button--active");

    const category = button.dataset.category;

    currentPlayers = rosterData[category];
    visiblePlayers = playersPerPage;

    renderPlayers();
  });
});