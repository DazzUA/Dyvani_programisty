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
import { paginationPages, onScroll } from './exercises_filters';

// базовый URL для отправки запросов к API
const BASE_URL = 'https://energyflow.b.goit.study/api';

// объект с ссылками на элементы формы поиска
const exercisesFilterSection = document.querySelector(
  '.exercise-filters-list-subcategories'
);
const searchContainer = document.querySelector('.search-container');
const searchListEl = document.querySelector('.search-list');
const formEl = document.querySelector('.exercises-form');
const noResultsText = document.querySelector('.no-results');
const paginationSubcategories = document.querySelector(
  '.pagination-subcategories'
);
const searchPagination = document.querySelector('.search-pagination');
let query;
let resultsArray;
let page = 1;

formEl.addEventListener('submit', onSearch);
//Цей код додає обробник подій на подію keydown для поля введення пошукового запиту. В обробнику подій перевіряється, чи натиснута клавіша Enter (keyCode 13), і якщо так, викликається функція onSearch, яка виконує пошук.
formEl.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    onSearch(event);
  }
});
async function bodyPart(group, query, page, limit = 9) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        bodypart: group,
        keyword: query,
        page: page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function muscles(group, query, page, limit = 9) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        muscles: group,
        keyword: query,
        page: page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function equipment(group, query, page, limit = 9) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        equipment: group,
        keyword: query,
        page: page,
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
  paginationSubcategories.classList.add('visually-hidden');
  query = event.currentTarget.elements['search'].value.trim();
  let data;

  try {
    if (filterValue === 'Body parts') {
      data = await bodyPart(nameValue, query);
    } else if (filterValue === 'Muscles') {
      data = await muscles(nameValue, query);
    } else if (filterValue === 'Equipment') {
      data = await equipment(nameValue, query);
    }

    const { totalPages, page, results } = data;
    const array = data.results;

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
      searchContainer.classList.remove('visually-hidden');
      searchListEl.classList.remove('visually-hidden');
      noResultsText.classList.add('visually-hidden');
      exercisesFilterSection.classList.add('visually-hidden');

      resultsArray = data.results;

      searchListEl.innerHTML = createMarkUp(resultsArray);
    }
  } catch (error) {
    console.log(error);
  } finally {
    formEl.reset();
  }
}
searchPagination.addEventListener('click', onPaginationFilterPages);

async function onPaginationFilterPages(event) {
  event.preventDefault();
  onScroll();
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  page = event.target.textContent;
  searchListEl.innerHTML = '';
  try {
    if (filterValue === 'Body parts') {
      const { results } = await bodyPart(nameValue, query, page);
      searchListEl.innerHTML = createMarkUp(results);
    } else if (filterValue === 'Muscles') {
      const { results } = await muscles(nameValue, query, page);
      searchListEl.innerHTML = createMarkUp(results);
    } else if (filterValue === 'Equipment') {
      const { results } = await equipment(nameValue, query, page);
      searchListEl.innerHTML = createMarkUp(results);
    }
  } catch (error) {
    console.log(error);
  }
}
