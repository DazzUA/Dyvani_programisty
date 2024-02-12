import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import icons from '/img/symbol-defs.svg';
// import { toggleFavorite } from './favorites_js/favorites_section';

const modalBackdrop = document.querySelector('.Backdrop');
const card = document.querySelector('.Modal');
const button = document.querySelector('.ExerciseFiltersList');
const modalClose = document.querySelector('.ModalClose');
const addRemoveFavorites = document.querySelector('.AddRemoveFavorites');

const openClass = 'IsOpen';
let cardObj = {};
let id = '64f389465ae26083f39b17a4';
let ratingActive, ratingValue;

button.addEventListener('click', modalCard);

async function modalCard(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const res = event.target.closest('li').id;

  try {
    cardObj = await fetchImages(res);
    showModal();
    displayImages(cardObj);
    initRating();
    document.querySelectorAll('span').forEach(function (span) {
      span.textContent =
        span.textContent.charAt(0).toUpperCase() + span.textContent.slice(1);
    });
    modalBackdrop.addEventListener('click', modalCloseFunc);
    addRemoveFavorites.addEventListener('submit', addFavorites);
  } catch (error) {}
}

function modalCloseFunc(event) {
  if (
    event.currentTarget === modalClose ||
    event.key === 'Escape' ||
    event.target === modalBackdrop
  ) {
    hideModal();
  }
}

async function fetchImages() {
  const url = `https://energyflow.b.goit.study/api/exercises/${id}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {}
}

function displayImages(cardObj) {
  const markup = `<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
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
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${cardObj.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${cardObj.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${cardObj.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${cardObj.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${cardObj.burnedCalories}/${cardObj.time} min</span></li>
  </ul>
  <p class="Description">${cardObj.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</svg><svg class="HeartModalIcon" width="18" height="18">
            <use href="./img/symbol-defs.svg#icon-heart"></use>
          </svg></button>
          </div>
  </div>
  </div> `;
  modalBackdrop.innerHTML = markup;
}

function addFavorites() {
  toggleFavorite(cardObj);
  // const messageInfo = document.querySelector('.message-favorites');
  addRemoveFavorites.innerText = 'Remove from';
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
