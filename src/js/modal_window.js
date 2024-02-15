import axios from 'axios';
import icons from '/img/symbol-defs.svg';
import { toggleFavorite, deleteCard } from './favorites_js/favorites_section';

const modalBackdrop = document.querySelector('.Backdrop');
const card = document.querySelector('.Modal');
const button = document.querySelector('.ExerciseFiltersListSubcategories');
const buttonSearch = document.querySelector('.SearchList');
const body = document.querySelector('body');
const buttonFavorite = document.querySelector('.favorites-list');

const openClass = 'IsOpen';
let cardObj = {};
let ratingActive, ratingValue;
let addRemoveFavorites;
let scrollPosition = 0;
let textBtn;

if (body.classList.contains('home-style')) {
  button.addEventListener('click', modalCard);
  buttonSearch.addEventListener('click', modalCard);
}
if (body.classList.contains('favorites-style')) {
  buttonFavorite.addEventListener('click', favoriteDeleteCard);
}

async function modalCard(event) {
  const res = event.target.closest('li').id;

  try {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    } else {
      cardObj = await fetchImages(res);
      showModal();
      displayImages(cardObj);
      initRating();
      disableScroll();
    }

    document.querySelectorAll('span').forEach(function (span) {
      span.textContent =
        span.textContent.charAt(0).toUpperCase() + span.textContent.slice(1);
    });
    addRemoveFavorites = document.querySelector('.AddRemoveFavorites');
    const textBtn = addRemoveFavorites.textContent;

    addRemoveFavorites.addEventListener('click', addFavorites);
    const modalClose = document.querySelector('.CloseModalIcon');

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
        enableScroll();
      }
    });
    modalBackdrop.addEventListener('click', function (event) {
      if (event.target === modalBackdrop) {
        hideModal();
        enableScroll();
      }
    });
    modalClose.addEventListener('click', function (event) {
      if (event.target === modalClose) {
        hideModal();
        enableScroll();
      }
    });
  } finally {
    // catch (error) {
    // }
  }
}

// function addRemoveFavoritesFunc() {
//   if (textBtn == 'Add to favorites') {
//     toggleFavorite(cardObj);
//     addRemoveFavorites.innerText = ' Remove from ';
//   } else if (textBtn == 'Remove from') {
//     deleteCard(cardObj._id);
//     addRemoveFavorites.innerText = ' Add to favorites ';
//   } else {
//     console.log('fack');
//   }
// }

function addFavorites() {
  toggleFavorite(cardObj);
  addRemoveFavorites.innerText = ' Remove from ';
}

function removeFavorites() {
  deleteCard(cardObj._id);
  console.log(cardObj._id);
  addRemoveFavorites.innerText = ' Add to favorites ';
}

async function fetchImages(id) {
  const url = `https://energyflow.b.goit.study/api/exercises/${id}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {}
}

function displayImages(cardObj) {
  const markup = `<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${icons}#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${cardObj.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="ModalTitle">${cardObj.name}</h3>
  <div class="ModalRating">
  <div class="NumberRating">${cardObj.rating}</div>
  <div class="RatingBody">
    <div class="RatingActive"></div>
    <div class="RatingItems">
      <input type="radio" class="RatingItem" value="1" name="Rating" />
      <input type="radio" class="RatingItem" value="2" name="Rating" />
      <input type="radio" class="RatingItem" value="3" name="Rating" />
      <input type="radio" class="RatingItem" value="4" name="Rating" />
      <input type="radio" class="RatingItem" value="5" name="Rating" />
    </div>
  </div>
  </div>
  <svg class="vector" width="25" height="2">
            <use href="${icons}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${cardObj.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${cardObj.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${cardObj.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${cardObj.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${cardObj.burnedCalories}/${cardObj.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${icons}#icon-vector"></use>
          </svg>
  <p class="Description">${cardObj.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites
  <svg class="HeartModalIcon" width="18" height="18">
            <use href="${icons}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;
  modalBackdrop.innerHTML = markup;
}

async function favoriteDeleteCard(event) {
  const res = event.target.closest('li').id;

  try {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    } else {
      cardObj = await fetchImages(res);
      showModal();
      displayImages(cardObj);
      initRating();
      disableScroll();
    }

    document.querySelectorAll('span').forEach(function (span) {
      span.textContent =
        span.textContent.charAt(0).toUpperCase() + span.textContent.slice(1);
    });

    addRemoveFavorites = document.querySelector('.AddRemoveFavorites');
    addRemoveFavorites.addEventListener('click', removeFavorites);

    const modalClose = document.querySelector('.CloseModalIcon');
    addRemoveFavorites.innerText = ' Remove from ';
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
        enableScroll();
      }
    });
    modalBackdrop.addEventListener('click', function (event) {
      if (event.target === modalBackdrop) {
        hideModal();
        enableScroll();
      }
    });
    modalClose.addEventListener('click', function (event) {
      if (event.target === modalClose) {
        hideModal();
        enableScroll();
      }
    });
  } finally {
    // catch (error) {
    // }
  }
}

function showModal() {
  modalBackdrop.classList.add(openClass);
}

function hideModal() {
  modalBackdrop.classList.remove(openClass);
}

function initRating() {
  initRatingVars();
  setRatingActiveWidth();
}

function initRatingVars() {
  ratingActive = document.querySelector('.RatingActive');
  ratingValue = document.querySelector('.NumberRating');
}

function setRatingActiveWidth(index = ratingValue.innerHTML) {
  const ratingActiveWidth = index / 0.05;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}

function disableScroll() {
  scrollPosition = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
}

function enableScroll() {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
}
