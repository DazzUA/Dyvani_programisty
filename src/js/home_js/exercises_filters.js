import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createIziToastError } from './exercises_subcategories';

const filterButtons = document.querySelector('.filter-buttons');
const exerciseFiltersList = document.querySelector('.exercise-filters-list');
const pagination = document.querySelector('.pagination');
const form = document.querySelector('.exercises-form');
const exercises = document.querySelector('.exercises ');

const exerciseFiltersListSubcategories = document.querySelector(
  '.exercise-filters-list-subcategories'
);
const paginationSubcategories = document.querySelector(
  '.pagination-subcategories'
);
const searchList = document.querySelector('.search-list'); // ok
const searchPagination = document.querySelector('.search-pagination');
const noResultsText = document.querySelector('.no-results');
const home = document.querySelector('.exercises');

const BASE_URL = 'https://energyflow.b.goit.study/api';
let filterValueDefault = 'Muscles';
let currentPage = 1;
let screenWidth = window.innerWidth;
let currentLimit = 0;
//-----------------------------------------------Слухачі------------------------------------------------------------------------
filterButtons.addEventListener('click', filterBtnClick);
pagination.addEventListener('click', onPaginationFilterPages);
//--------------------------------------------------Кількість картинок в залежності від розміру екрана---------------------------
if (screenWidth <= 375) {
  currentLimit = 8;
} else if (screenWidth <= 768) {
  currentLimit = 12;
} else {
  currentLimit = 12;
}
//---------------------------------------------------Запит на сервер-------------------------------------------------------------
async function getExercises() {
  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      params: {
        filter: filterValueDefault,
        page: currentPage,
        limit: currentLimit,
      },
    });

    return response.data;
  } catch (error) {
    createIziToastError('Error');
  }
}

//---------------------------------------------------Дефолтний запит для відображення Muscles при загрузці сторінки-----------------------

async function fetchDefaultApiUrl() {
  try {
    const response = await getExercises().then(data => {
      const { results, totalPages, page } = data;
      if (results && results.length > 0) {
        exerciseFiltersList.innerHTML = markupExercises(results);

        const pag = paginationPages(page, totalPages);
        pagination.innerHTML = pag;
      } else {
        console.error('No exercises found.');
      }
    });
  } catch (error) {
    createIziToastError('Error');
  }
}

//---------------------------------------------------Виклик функцію для відображення Muscles при загрузці сторінки-----------------------

fetchDefaultApiUrl();

//-----------------------------------------Функція фільтрів Muscles, Body parts, Equipment--------------------------------------------
async function filterBtnClick(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  onScroll();
  searchList.innerHTML = '';
  searchPagination.innerHTML = '';
  event.preventDefault();
  form.classList.add('visually-hidden');
  noResultsText.classList.add('visually-hidden');
  exerciseFiltersListSubcategories.classList.add('visually-hidden');
  exerciseFiltersList.classList.remove('visually-hidden');
  pagination.innerHTML = '';
  paginationSubcategories.innerHTML = '';
  paginationSubcategories.classList.remove('visually-hidden');
  currentPage = 1;
  const filterValue = event.target;
  const qwer = filterValue.dataset.filter;
  filterValueDefault = qwer;
  exerciseFiltersList.innerHTML = '';
  const prevBtn = exercises.querySelector('.button-is-active');
  const nextBtn = event.target;
  prevBtn.classList.remove('button-is-active');
  nextBtn.classList.add('button-is-active');

  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  try {
    getExercises(qwer).then(data => {
      const { results, totalPages, page } = data;
      exerciseFiltersList.innerHTML = markupExercises(results);

      if (1) {
        const pag = paginationPages(page, totalPages);
        pagination.innerHTML = pag;
      } else {
        pagination.innerHTML = '';
      }
    });
  } catch (error) {
    createIziToastError('Error');
  }
}
//-----------------------------------------Функція перехід по сторінкам------------------------------------------------------

async function onPaginationFilterPages(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  e.preventDefault();
  onScroll();
  currentPage = e.target.textContent;
  Array.from(e.currentTarget.children).map(item => {
    if (item.textContent !== currentPage) {
      item.classList.remove('pagination-btn-is-active');
    } else {
      e.target.classList.add('pagination-btn-is-active');
    }
  });
  exerciseFiltersList.innerHTML = '';
  try {
    const { results, page, totalPages } = await getExercises();
    if (page === totalPages) {
      return;
    }

    exerciseFiltersList.innerHTML = markupExercises(results);
  } catch (error) {
    createIziToastError('Error');
  }
}

//---------------------------------------------------Розмітка Muscles, Body parts, Equipment--------------------------------------------

function markupExercises(results) {
  const markup = results
    .map(
      ({
        name,
        filter,
        imgUrl,
      }) => ` <li class='filter-list exercises-item' data-filter='${filter}' data-name='${name}'>
        <img class="img-exercises" src="${imgUrl}" alt="${filter}">
        <div class="filter-text">
          <p class="filter-exercises">${name}</p>
          <p class="filter-name">${filter}</p>
        </div>
      </li>`
    )
    .join('');
  return markup;
}
//---------------------------------------------------Розмітка номерів сторінки--------------------------------------------

function paginationPages(page, totalPages) {
  let paginationHtml = '';

  for (let i = 1; i <= totalPages; i += 1) {
    paginationHtml += `<button class="pagination-btn pagination-btn-is-active" type="button" value="${i}">${i}</button>`;
  }
  return paginationHtml;
}
function onScroll() {
  home.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export { onScroll };
export { onPaginationFilterPages };
export { paginationPages };
export { markupExercises };
