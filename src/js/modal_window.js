import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const card = document.querySelector('.modal');
const button = document.querySelector('.search-button');

button.addEventListener('click', modalcard);

async function fetchImages() {
  const url = `https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a4`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {}
}

function displayImages(cardObj) {
  card.innerHTML = ` <div>
  <img src="${cardObj.gifUrl}"/>
  </div>
  <div>
  <h3>${cardObj.name}</h3>
  <div>
  <p>${cardObj.rating}</p>
  </div>
  <ul>
  <li>${cardObj.target}</li>
  <li>${cardObj.bodyPart}</li>
  <li>${cardObj.equipment}</li>
  <li>${cardObj.popularity}</li>
  <li>${cardObj.burnedCalories}/${cardObj.time} min</li>
  </ul>
  <p>${cardObj.description}</p>
  <button type="button">Add to favorites</button>
  </div>  `;
}

async function modalcard() {
  try {
    const cardObj = await fetchImages();
    displayImages(cardObj);
  } catch (error) {}
}
