import axios from 'axios';
import { filterValue } from './exercises_subcategories';

const filterButtons = document.querySelector('.FilterButtons');
const exerciseFiltersList = document.querySelector('.ExerciseFiltersList');
const pagination = document.querySelector('.Pagination');
const form = document.querySelector('.ExercisesForm');
const ExerciseFiltersListSubcategories = document.querySelector(
  '.ExerciseFiltersListSubcategories'
);
const PaginationSubcategories = document.querySelector(
  '.PaginationSubcategories'
);
const searchList = document.querySelector('.search-list'); // ok
const searchPagination = document.querySelector('.search-pagination');
const noResultsText = document.querySelector('.no-results');
const home = document.querySelector('.Exercises');

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
    console.log(error);
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
    console.error('Error fetching exercises:', error);
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
  ExerciseFiltersListSubcategories.classList.add('visually-hidden');
  exerciseFiltersList.classList.remove('visually-hidden');
  pagination.innerHTML = '';
  PaginationSubcategories.innerHTML = '';
  PaginationSubcategories.classList.remove('visually-hidden');
  currentPage = 1;
  const filterValue = event.target;
  const qwer = filterValue.dataset.filter;
  filterValueDefault = qwer;
  exerciseFiltersList.innerHTML = '';

  Array.from(event.target.children).map(item => {
    if (item.textContent !== event.target.textContent) {
      item.classList.remove('ButtonIsActive');
    } else {
      event.target.classList.add('ButtonIsActive');
    }
  });
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
    console.log(error);
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
      item.classList.remove('PaginationBtnIsActive');
    } else {
      e.target.classList.add('PaginationBtnIsActive');
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
    console.log(error);
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
      }) => ` <li class='FilterList ExercisesItem' data-filter='${filter}' data-name='${name}'>
        <img class="ImgExercises" src="${imgUrl}" alt="${filter}">
        <div class="FilterText">
          <p class="FilterExercises">${name}</p>
          <p class="FilterName">${filter}</p>
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
    paginationHtml += `<button class="PaginationBtn PaginationBtnIsActive" type="button" value="${i}">${i}</button>`;
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
