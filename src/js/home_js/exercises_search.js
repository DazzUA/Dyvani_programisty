// Что реализовано в коде:
// Пользователь может вводить поисковый запрос и отправлять его на сервер;
// После получения ответа от сервера, результаты поиска отображаются на странице;
// Созданы элементы списка с названиями упражнений и добавляены в список результатов поиска.
// В случае отсутствия результатов поиска выводится соответствующее уведомление (функция showNoResultsToast).

import axios from 'axios';
import {
  filterValue,
  nameValue,
  createMarkUp,
} from './exercises_subcategories';
import { paginationPages } from './exercises_filters';

// базовый URL для отправки запросов к API
const BASE_URL = 'https://energyflow.b.goit.study/api';

// объект с ссылками на элементы формы поиска
const exercisesFilterSection = document.querySelector(
  '.ExerciseFiltersListSubcategories'
);
const searchContainer = document.querySelector('.search-container');
const searchListEl = document.querySelector('.search-list');
const formEl = document.querySelector('.ExercisesForm');
const noResultsText = document.querySelector('.no-results');
const PaginationSubcategories = document.querySelector(
  '.PaginationSubcategories'
);
const searchPagination = document.querySelector('.search-pagination');
let query;
let resultsArray;
let page = 1;
formEl.addEventListener('submit', onSearch);

// bodypart запит
async function bodyPart(group, query, page = 1, limit = 9) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        bodypart: group,
        keyword: query,
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// muscles запит
async function muscles(group, query, page = 1, limit = 9) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        muscles: group,
        keyword: query,
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// equipment запит
async function equipment(group, query, page = 1, limit = 9) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        equipment: group,
        keyword: query,
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function onSearch(event) {
  event.preventDefault();
  PaginationSubcategories.classList.add('visually-hidden');
  query = event.currentTarget.elements['search'].value.trim();
  console.log(query);
  let data;

  try {
    if (filterValue === 'Body parts') {
      data = await bodyPart(nameValue, query);
    } else if (filterValue === 'Muscles') {
      data = await muscles(nameValue, query);
    } else if (filterValue === 'Equipment') {
      data = await equipment(nameValue, query);
    }
    console.log(event.target);

    const { totalPages, page, results } = data;
    const array = data.results;
    // console.log(array);
    console.log(totalPages);
    console.log(page);

    if (totalPages > 1) {
      const pag = paginationPages(page, totalPages);
      searchPagination.innerHTML = pag;
    } else {
      searchPagination.innerHTML = '';
    }

    if (totalPages === null) {
      searchContainer.classList.remove('visually-hidden');
      noResultsText.classList.remove('visually-hidden');
      exercisesFilterSection.classList.add('visually-hidden');
      searchListEl.classList.add('visually-hidden');
    } else {
      // const {
      //   results: [
      //     { bodyPart, target, name, burnedCalories, rating, time, _id },
      //   ],
      // } = data;
      searchContainer.classList.remove('visually-hidden');
      searchListEl.classList.remove('visually-hidden');
      noResultsText.classList.add('visually-hidden');
      exercisesFilterSection.classList.add('visually-hidden');

      resultsArray = data.results;
      console.log(resultsArray);

      // console.log('TODO: малюэмо розмітку');

      searchListEl.innerHTML = createMarkUp(resultsArray);
    }
  } catch (error) {
    console.log(error);
  } finally {
    // console.log('блок finally');
    formEl.reset();
  }
}

async function onPaginationFilterPages(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  console.log(e.target);
  page = e.target.textContent;
  console.log(page);
  searchListEl.innerHTML = '';
  try {
    console.log(filterValue);
    if (filterValue === 'Body parts') {
      const { results, page, totalPages } = await bodyPart(nameValue, query);
      searchListEl.innerHTML = createMarkUp(results);
      console.log(results);
    } else if (filterValue === 'Muscles') {
      const { results } = await muscles(nameValue, query);
      searchListEl.innerHTML = createMarkUp(results);
      console.log(results);
    } else if (filterValue === 'Equipment') {
      const { results } = await equipment(nameValue, query);
      searchListEl.innerHTML = createMarkUp(results);
      console.log(results);
    }
  } catch (error) {
    console.log(error);
  }
}

searchPagination.addEventListener('click', onPaginationFilterPages);
