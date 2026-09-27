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

const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category");

const initialCategory = rosterData[selectedCategory]
  ? selectedCategory
  : "cs2";

currentPlayers = rosterData[initialCategory];

categoryButtons.forEach((button) => {
  button.classList.toggle(
    "category-switcher__button--active",
    button.dataset.category === initialCategory
  );
});

renderPlayers();

/* Modal Window */

const playerModal = document.querySelector(".player-modal");
const modalOverlay = document.querySelector(".player-modal__overlay");
const modalCloseButton = document.querySelector(".player-modal__close");
const modalInfo = document.querySelector(".player-modal__info");
const modalParameters = document.querySelector(".player-modal__parameters");
const modalParameterOptions = document.querySelector(
  ".player-modal__parameter-options"
);
const modalParameterTitle = document.querySelector(
  ".player-modal__parameter-title"
);
const modalParameterValue = document.querySelector(
  ".player-modal__parameter-value"
);
const modalParameterDescription = document.querySelector(
  ".player-modal__parameter-description"
);

function openPlayerModal(player) {
  if (!playerModal || !modalInfo) return;

  modalInfo.innerHTML = "";

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("player-modal__image");

  const image = document.createElement("img");
  image.src = player.image;
  image.alt = `${player.name} — Team Styrit ${player.role} player`;

  imageWrapper.append(image);

  const role = document.createElement("span");
  role.classList.add("player-modal__role");
  role.textContent = player.role.toUpperCase();

  const nickname = document.createElement("h2");
  nickname.classList.add("player-modal__nickname");
  nickname.textContent = player.name;

  const name = document.createElement("p");
  name.classList.add("player-modal__name");
  name.textContent = player.realName;

  const country = document.createElement("p");
  country.classList.add("player-modal__country");
  country.textContent = `${player.countryCode} / ${player.country}`;

  const parameters = createPlayerParameters(player);

  const bio = document.createElement("p");
  bio.classList.add("player-modal__bio");
  bio.textContent = player.bio;

  const infoContent = document.createElement("div");
  infoContent.classList.add("player-modal__details");

  infoContent.append(
    role,
    nickname,
    name,
    country,
    parameters,
    bio
  );

  modalInfo.append(imageWrapper, infoContent);

  playerModal.classList.add("player-modal--open");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePlayerModal() {
  if (!playerModal) return;

  playerModal.classList.remove("player-modal--open");
  playerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

playersGrid?.addEventListener("click", (event) => {
  const card = event.target.closest(".player-card");

  if (!card) return;

  const player = currentPlayers.find(
    (item) => item.id === card.dataset.playerId
  );

  if (player) {
    openPlayerModal(player);
  }
});

modalCloseButton?.addEventListener("click", closePlayerModal);

playerModal?.addEventListener("click", (event) => {
  if (event.target === playerModal) {
    closePlayerModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePlayerModal();
  }
});

function getParameterValue(option) {
  return option.rating ?? option.winRate ?? "";
}

function getParameterValue(option) {
  return option.rating ?? option.winRate ?? "";
}

function createPlayerParameters(player) {
  const parameters = document.createElement("div");
  parameters.classList.add("player-modal__parameters");

  Object.entries(player.parameters).forEach(([groupName, options]) => {
    const group = document.createElement("div");
    group.classList.add("player-modal__parameter-group");

    const title = document.createElement("span");
    title.classList.add("player-modal__parameter-title");
    title.textContent = groupName.toUpperCase();

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("player-modal__parameter-options");

    const result = document.createElement("div");
    result.classList.add("player-modal__parameter-result");

    const value = document.createElement("span");
    value.classList.add("player-modal__parameter-value");

    const description = document.createElement("p");
    description.classList.add("player-modal__parameter-description");

    result.append(value, description);

    Object.values(options).forEach((option, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.classList.add("player-modal__parameter-button");
      button.textContent = option.label;

      if (index === 0) {
        button.classList.add(
          "player-modal__parameter-button--active"
        );

        value.textContent = getParameterValue(option);
        description.textContent = option.description;
      }

      button.addEventListener("click", () => {
        optionsContainer
          .querySelectorAll(".player-modal__parameter-button")
          .forEach((item) => {
            item.classList.remove(
              "player-modal__parameter-button--active"
            );
          });

        button.classList.add(
          "player-modal__parameter-button--active"
        );

        value.textContent = getParameterValue(option);
        description.textContent = option.description;
      });

      optionsContainer.append(button);
    });

    group.append(title, optionsContainer, result);
    parameters.append(group);
  });

  return parameters;
}