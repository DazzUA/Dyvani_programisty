import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const modalBackdrop = document.querySelector('.Backdrop');
const card = document.querySelector('.Modal');
const button = document.querySelector('.SearchButton');
const modalClose = document.querySelector('.ModalClose');
const addRemoveFavorites = document.querySelector('.AddRemoveFavorites');
const openClass = 'IsOpen';
let cardObj = {};

button.addEventListener('click', modalCard);

async function modalCard() {
  try {
    cardObj = await fetchImages();
    showModal();
    displayImages(cardObj);
    addRemoveFavorites.addEventListener('submit', addFavorites);

    card.addEventListener('click', hideModal);
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
  const url = `https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a4`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {}
}

function displayImages(cardObj) {
  card.innerHTML = ` <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
            <use href="./img/symbol-defs.svg#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${cardObj.gifUrl}" alt="imagegif"/>
  </div>
  <h3 class="ModalTitle">${cardObj.name}</h3>
  <div class="ModalRating">
  <p class="NumberRating">${cardObj.rating}</p>
  <div class="StarRating"></div>
  </div>
  <ul class="ModalList">
  <li class="ModalListItem">Target ${cardObj.target}</li>
  <li class="ModalListItem">Body Part ${cardObj.bodyPart}</li>
  <li class="ModalListItem">Equipment${cardObj.equipment}</li>
  <li class="ModalListItem">Popular${cardObj.popularity}</li>
  <li class="ModalListItem">Burned Calories${cardObj.burnedCalories}/${cardObj.time} min</li>
  </ul>
  <p class="Description">${cardObj.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</button>
  </div>  `;
}

function addFavorites() {
  addRemoveFavorites.innerText = 'Remove from';
}

function showModal() {
  modalBackdrop.classList.add(openClass);
}

function hideModal() {
  modalBackdrop.classList.remove(openClass);
}

export { modalCard };
