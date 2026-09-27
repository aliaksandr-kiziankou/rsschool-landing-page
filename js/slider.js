/* Generating Matches Cards */

const matchesTrack = document.querySelector(".matches__track");

function createMatchCard(match) {
  const card = document.createElement("div");
  card.classList.add("match-card");

  card.innerHTML = `
    <div class="match-card__top">
      <span class="match-card__status">${match.status}</span>
      <span class="match-card__game">${match.game}</span>
    </div>

    <div class="match-card__teams">
      <span>STYRIT</span>
      <strong>${match.score}</strong>
      <span>${match.team}</span>
    </div>

    <div class="match-card__bottom">
      <span>${match.date}</span>
      <span>${match.tournament}</span>
    </div>
  `;

  return card;
}


/* Slider Functionality */

const previousButton = document.querySelector(
  '.slider-controls__button[aria-label="Previous match"]'
);

const nextButton = document.querySelector(
  '.slider-controls__button[aria-label="Next match"]'
);

const dotsContainer = document.querySelector(".slider-controls__dots");

let currentSlide = 0;


function getCardsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 768) return 2;

  return 3;
}


function getSlideCount() {
  return Math.ceil(matchesData.length / getCardsPerView());
}


function renderMatches() {
  if (!matchesTrack) return;

  matchesTrack.innerHTML = "";

  const cardsPerView = getCardsPerView();

  for (let index = 0; index < matchesData.length; index += cardsPerView) {
    const slide = document.createElement("div");

    slide.classList.add("matches__slide");

    const matches = matchesData.slice(index, index + cardsPerView);

    matches.forEach((match) => {
      slide.append(createMatchCard(match));
    });

    matchesTrack.append(slide);
  }
}


function updateDots() {
  if (!dotsContainer) return;

  dotsContainer.innerHTML = "";

  const slideCount = getSlideCount();

  for (let index = 0; index < slideCount; index += 1) {
    const dot = document.createElement("span");

    dot.classList.add("slider-controls__dot");

    if (index === currentSlide) {
      dot.classList.add("slider-controls__dot--active");
    }

    dotsContainer.append(dot);
  }
}


function updateSlider() {
  if (!matchesTrack) return;

  const slideWidth = matchesTrack.parentElement.clientWidth;

  matchesTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  updateDots();
}


function rebuildSlider() {
  currentSlide = 0;

  renderMatches();
  updateSlider();
}


previousButton?.addEventListener("click", () => {
  const slideCount = getSlideCount();

  currentSlide = (currentSlide - 1 + slideCount) % slideCount;

  updateSlider();
});


nextButton?.addEventListener("click", () => {
  const slideCount = getSlideCount();

  currentSlide = (currentSlide + 1) % slideCount;

  updateSlider();
});


window.addEventListener("resize", rebuildSlider);


rebuildSlider();