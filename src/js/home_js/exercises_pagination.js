import axios from 'axios';
const filterButtons = document.querySelector('.filter-buttons');
const exerciseFiltersList = document.querySelector('.exercise-filters-list');
const ExercisesHead = document.querySelector('.ExercisesHead');

const BASE_URL = 'https://energyflow.b.goit.study/api';
exerciseFiltersList.addEventListener('click', onCardClick);

async function onCardClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  // при кліку на картку додаємо клас до ul (бо він має інші стилі)
  exerciseFiltersList.classList.add('ExerciseCategoryList');
  // при кліку на картку шукаємо найближчий елемент у якого буде заданий селектор (це li)
  const liEl = event.target.closest('.ExercisesItem');
  console.log(liEl);
  // тепер можемо отримати li дата-атрибути
  const filterValue = liEl.dataset.filter;
  const nameValue = liEl.dataset.name;
  console.log(filterValue); //Muscles
  console.log(nameValue); // abductors
  // передаємо ці атрибути в функцію , яка робить запит
  try {
    const data = await getExercisesByFilter(filterValue, nameValue);
    // це буде масив об'єктів
    exerciseFiltersList.innerHTML = createMarkUp(data);
    ExercisesHead.innerHTML = updateExercisesHeaderMarkup(nameValue);
  } catch (error) {
    console.log(error);
  }
}

async function getExercisesByFilter(filterValue, nameValue) {
  // в запиті можливі три ключі, тому відповідно до значення фільтра пишемо цей ключ
  try {
    if (filterValue === 'Muscles') {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        params: {
          muscles: nameValue,
        },
      });
      return response.data.results;
    } else if (filterValue === 'Body parts') {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        params: {
          bodypart: nameValue,
        },
      });
      return response.data.results;
    } else {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        params: {
          equipment: nameValue,
        },
      });
      return response.data.results;
    }
  } catch (error) {
    console.log(error);
  }
}

function createMarkUp(array) {
  const markup = array
    .map(({ rating, name, burnedCalories, time, bodyPart, target }) => {
      return `<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${rating}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='/src/img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn'>
          <p>Start</p>
          <svg width='13' height='13'>
          <use href='/src/img/symbol-defs.svg#icon-arrow'></use>
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='/src/img/symbol-defs.svg#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${name}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${burnedCalories} / ${time} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${bodyPart}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${target}</span></p>
        </li>
      </ul>
    </li>`;
    })
    .join('');
  return markup;
}

function updateExercisesHeaderMarkup(nameValue) {
  return `<div>
  <h2 class="title-exercises">Exercises / <span class="NameValue"> ${nameValue}</span></h2>
  <div class="ExercisesHeared">
  <div class="list-exercises filter-buttons">
    <button class="item-exercises" data-filter="Muscles">Muscles</button>
    <button class="item-exercises" data-filter="Body parts">Body parts</button>
    <button class="item-exercises" data-filter="Equipment">Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='/src/img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`;
}
