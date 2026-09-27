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

/* Modal Window */

const playerModal = document.querySelector(".player-modal");
const modalOverlay = document.querySelector(".player-modal__overlay");
const modalCloseButton = document.querySelector(".player-modal__close");

const modalImage = document.querySelector(".player-modal__image img");
const modalRole = document.querySelector(".player-modal__role");
const modalNickname = document.querySelector(".player-modal__nickname");
const modalName = document.querySelector(".player-modal__name");
const modalCountry = document.querySelector(".player-modal__country");
const modalBio = document.querySelector(".player-modal__bio");
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
  if (!playerModal) return;

  modalImage.src = player.image;
  modalImage.alt = `${player.name} — Team Styrit ${player.role} player`;

  modalRole.textContent = player.role.toUpperCase();
  modalNickname.textContent = player.name;
  modalName.textContent = player.realName;
  modalCountry.textContent = `${player.countryCode} / ${player.country}`;
  modalBio.textContent = player.bio;

  renderPlayerParameters(player);

  playerModal.classList.add("player-modal--open");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  playerModal.scrollTop = 0;
  playerModal.querySelector(".player-modal__content").scrollTop = 0;
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
modalOverlay?.addEventListener("click", closePlayerModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePlayerModal();
  }
});

function getParameterValue(option) {
  return option.rating ?? option.winRate ?? "";
}

function renderPlayerParameters(player) {
  if (!modalParameters || !player.parameters) return;

  modalParameters.innerHTML = "";

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

    const parameterOptions = Object.values(options);

    parameterOptions.forEach((option, optionIndex) => {
      const button = document.createElement("button");

      button.type = "button";
      button.classList.add("player-modal__parameter-button");
      button.textContent = option.label;

      if (optionIndex === 0) {
        button.classList.add("player-modal__parameter-button--active");
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

        button.classList.add("player-modal__parameter-button--active");

        value.textContent = getParameterValue(option);
        description.textContent = option.description;
      });

      optionsContainer.append(button);
    });

    group.append(title, optionsContainer, result);
    modalParameters.append(group);
  });
}