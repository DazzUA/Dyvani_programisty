import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { paginationPages } from './exercises_filters';
import { markupExercises } from './exercises_filters';
import { onScroll } from './exercises_filters';
import icons from '/img/symbol-defs.svg';

const exerciseFiltersList = document.querySelector('.exercise-filters-list');
const pagination = document.querySelector('.pagination');
const paginationSubcategories = document.querySelector(
  '.pagination-subcategories'
);
const exerciseFiltersListSubcategories = document.querySelector(
  '.exercise-filters-list-subcategories'
);
const form = document.querySelector('.exercises-form');
const titleExercises = document.querySelector('.title-exercises');

const BASE_URL = 'https://energyflow.b.goit.study/api';
let currentPage = 1;
let filterValue;
let nameValue;

exerciseFiltersList.addEventListener('click', onCardClick);

async function onCardClick(event) {
  form.classList.remove('visually-hidden');
  pagination.innerHTML = '';
  exerciseFiltersList.classList.add('visually-hidden');
  exerciseFiltersListSubcategories.classList.remove('visually-hidden');
  pagination.removeEventListener('click', onPaginationPagesbyFilter);

  if (event.target === event.currentTarget) {
    return;
  }

  const liEl = event.target.closest('.exercises-item');
  const { filter, name } = liEl.dataset;

  filterValue = filter;
  nameValue = name;
  titleExercises.innerHTML = `Exercises /<span class='span-title-exercises'> ${nameValue}</span>`;

  try {
    const { page, totalPages, results } = await getExercisesByFilter(
      filterValue,
      nameValue
    );
    exerciseFiltersListSubcategories.innerHTML = createMarkUp(results);

    if (totalPages > 1) {
      const pag = paginationPages(page, totalPages);
      paginationSubcategories.innerHTML = pag;
    }
    paginationSubcategories.addEventListener(
      'click',
      onPaginationSubcategoriesPage
    );
  } catch (error) {
    createIziToastError('Error');
  }
}

async function getExercisesByFilter(filterValue, nameValue, currentPage) {
  try {
    if (filterValue === 'Muscles') {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        params: {
          muscles: nameValue,
          page: currentPage,
          limit: 9,
        },
      });
      return response.data;
    } else if (filterValue === 'Body parts') {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        params: {
          bodypart: nameValue,
          page: currentPage,
          limit: 9,
        },
      });
      return response.data;
    } else {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        params: {
          equipment: nameValue,
          page: currentPage,
          limit: 9,
        },
      });
      return response.data;
    }
  } catch (error) {
    createIziToastError('Error');
  }
}

function createMarkUp(array) {
  const markup = array
    .map(({ rating, name, burnedCalories, time, bodyPart, target, _id }) => {
      return `<li class="workout-card exercise-category-list" id ='${_id}'>
      <div class='card-header'>
        <div class='workout-wrapper'>
          <p class='workout'>workout</p>
          <div class='rating-wrapper'><p>${rating}</p>
          <svg class='star-icon' width='13' height='13'>
          <use href='${icons}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="start-btn">
  START<svg width='13' height='13'>
          <use href='${icons}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='card-main-part'>
      <div class='run-icon-wrapper'><svg width='14' height='14'>
          <use href='${icons}#icon-running'></use>
        </svg></div>
        <p class='main-part-name'>${name}</p>
      </div>
      <ul class="card-footer">
        <li>
          <p class='card-footer-text-descr'>Burned calories: <span class='card-footer-text-value'>${burnedCalories} / ${time} min</span></p>
        </li>
        <li>
          <p class='card-footer-text-descr'>Body part: <span class='card-footer-text-value'>${bodyPart}</span></p>
        </li>
        <li>
          <p class='card-footer-text-descr'>Target: <span class='card-footer-text-value'>${target}</span></p>
        </li>
      </ul>

    </li>`;
    })
    .join('');
  return markup;
}

async function getExercise(filter = filterValueDefault) {
  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      params: {
        filter: filter,
        page: currentPage,
        limit: 12,
      },
    });
    return response.data;
  } catch (error) {
    createIziToastError('Error');
  }
}

async function onPaginationSubcategoriesPage(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  onScroll();
  currentPage = e.target.textContent;
  try {
    const { results } = await getExercisesByFilter(
      filterValue,
      nameValue,
      currentPage
    );
    exerciseFiltersListSubcategories.innerHTML = createMarkUp(results);
  } catch (error) {
    createIziToastError('Error');
  }
}

async function onPaginationPagesbyFilter(e) {
  currentPage = e.target.textContent;
  try {
    const { results } = await getExercise(filterValue, currentPage);
    exerciseFiltersList.innerHTML = markupExercises(results);
  } catch (error) {
    createIziToastError('Error');
  }
}

function createIziToastError(notification) {
  iziToast.error({
    message: notification,
    messageColor: '#FAFAFB',
    messageLineHeight: '24px',
    messageSize: '16px',
    position: 'topRight',
    backgroundColor: '#EF4040',
    maxWidth: '350px',
    timeout: false,
  });
}

export { filterValue, nameValue, createMarkUp, createIziToastError };
