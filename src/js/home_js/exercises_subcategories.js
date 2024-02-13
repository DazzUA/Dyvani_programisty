import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { paginationPages } from './exercises_filters';
import { markupExercises } from './exercises_filters';
import icons from '/img/symbol-defs.svg';

const exerciseFiltersList = document.querySelector('.ExerciseFiltersList');
const ExercisesHead = document.querySelector('.ExercisesHead');
const pagination = document.querySelector('.Pagination');
const PaginationSubcategories = document.querySelector(
  '.PaginationSubcategories'
);
const ExerciseFiltersListSubcategories = document.querySelector(
  '.ExerciseFiltersListSubcategories'
);
const form = document.querySelector('.ExercisesForm');

const BASE_URL = 'https://energyflow.b.goit.study/api';
let currentPage = 1;
let filterValue;
let nameValue;

exerciseFiltersList.addEventListener('click', onCardClick);

async function onCardClick(event) {
  form.classList.remove('visually-hidden');
  pagination.innerHTML = '';
  exerciseFiltersList.classList.add('visually-hidden');
  ExerciseFiltersListSubcategories.classList.remove('visually-hidden');
  // exerciseFiltersList.removeEventListener('click', onCardClick);
  // pagination.removeEventListener('click', onPaginationFilterPages);
  pagination.removeEventListener('click', onPaginationPagesbyFilter);
  if (event.target === event.currentTarget) {
    return;
  }

  const liEl = event.target.closest('.ExercisesItem'); // при кліку на картку шукаємо найближчий елемент у якого буде заданий селектор (це li)
  const { filter, name } = liEl.dataset;

  filterValue = filter; //Muscles   // тепер можемо отримати li дата-атрибути
  nameValue = name; // abductors

  try {
    const { page, totalPages, results } = await getExercisesByFilter(
      filterValue,
      nameValue
    );
    ExerciseFiltersListSubcategories.innerHTML = createMarkUp(results); // це буде масив об'єктів

    // const FilterBtn = document.querySelector('#FilterBtn'); // додаємо на три кнопки фільтрів слухача по кліку
    // FilterBtn.addEventListener('click', onBtnClick);
    // FilterBtn.addEventListener('click', onBtnClickForFormDelete);
    pagination.innerHTML = ''; // пагінація
    if (totalPages > 1) {
      const pag = paginationPages(page, totalPages);
      PaginationSubcategories.innerHTML = pag; // додаємо в div розмітку сторінок
    }
    PaginationSubcategories.addEventListener(
      'click',
      onPaginationSubcategoriesPage
    );
    // pagination.addEventListener('click', onPaginationSubcategoriesPage); // вішаємо на дів з кнопками нумерації сторінок слухача подій при кліку
  } catch (error) {
    createIziToastError('Error');
  }
}

function onBtnClickForFormDelete() {
  const ExercisesForm = document.querySelector('.ExercisesForm');
  // ???vформа видаляється при першому кліку, а при другому знову хоче видалити, а її вже нема
  // ExercisesForm.remove();
  FilterBtn.removeEventListener('click', onBtnClickForFormDelete);
}

async function getExercisesByFilter(filterValue, nameValue, currentPage) {
  // в запиті можливі три ключі, тому відповідно до значення фільтра пишемо цей ключ
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
      return `<li class="WorkoutCard ExerciseCategoryList id ='${_id}">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${rating}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='${icons}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="StartBtn">
  START<svg width='13' height='13'>
          <use href='${icons}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='${icons}#icon-running'></use>
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

// це виклик функції Данила. Треба щоб він зробив експорт
// функція, яка спрацьовує коли ми клікаємо по фільтру (Muscle, Body Part, Equipment) і повертаємось назад
async function onBtnClick(event) {
  exerciseFiltersList.classList.re('visually-hidden');

  ExerciseFiltersListSubcategories.innerHTML = '';
  exerciseFiltersList.classList.remove('visually-hidden');
  // ExerciseFiltersListSubcategories.classList.add('visually-hidden');
  const filtersBtnArray = document.querySelectorAll('.ItemExercises');
  filtersBtnArray.forEach(btn => {
    btn.classList.remove('FilterBtnIsActive');
  });
  exerciseFiltersList.addEventListener('click', onCardClick);
  exerciseFiltersList.classList.remove('ExerciseCategoryList');
  exerciseFiltersList.classList.add('ExerciseFiltersList');
  currentPage = 1; // робимо поточну сторінку першою
  // pagination.removeEventListener('click', onPaginationSubcategoriesPage); // видаляємо з нумерації сторінок слухача попереднього
  Array.from(event.currentTarget.children).map(item => {
    if (item.textContent !== event.target.textContent) {
      item.classList.remove('ButtonIsActive');
    } else {
      event.target.classList.add('ButtonIsActive');
    }
  });
  if (event.target === event.currentTarget) {
    return;
  }
  filterValue = event.target.dataset.filter; // дістаємо значення дата-атрибута елемента, на який клацнули
  try {
    const { page, totalPages, results } = await getExercise(filterValue);
    exerciseFiltersList.innerHTML = markupExercises(results); // робимо розмітку всередині ul по фільтру починаюxи з першої сторінки
    if (totalPages > 1) {
      const pag = paginationPages(page, totalPages);
      PaginationSubcategories.innerHTML = pag;
    } else {
      PaginationSubcategories.innerHTML = '';
    }
    PaginationSubcategories.addEventListener(
      'click',
      onPaginationPagesbyFilter
    );
    // тут видалення тексту після слеша та форми
    const titleExercises = document.querySelector('.TitleExercises');
    titleExercises.innerHTML = 'Exercises';
    // ------------------------------------------
  } catch (error) {
    createIziToastError('Error');
  }
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
  currentPage = e.target.textContent; // при кліку на цифру сторінки будемо діставати цифру (текст-контент кнопки: 1, 4, 7...)
  try {
    // запит на картки по фільтру
    const { results } = await getExercisesByFilter(
      filterValue,
      nameValue,
      currentPage
    );
    ExerciseFiltersListSubcategories.innerHTML = createMarkUp(results); // робимо розмітку підкатегорій відповідно до номеру сторінки
  } catch (error) {
    createIziToastError('Error');
  }
}

// вішаємо слухач на дів з цифрами сторінок

async function onPaginationPagesbyFilter(e) {
  currentPage = e.target.textContent;
  try {
    // запит на картки по фільтру
    const { results } = await getExercise(filterValue, currentPage);
    exerciseFiltersList.innerHTML = markupExercises(results);
  } catch (error) {
    createIziToastError('Error');
  }
}

// Импорт необходимых библиотек

// function onStartBtnClick(event) {
//   divEl = event.target.closest('.StartBtn');
//   console.log(divEl);
//   // idValue = divEl.dataset.id;
//   // console.log(idValue);
// }
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

export { filterValue, nameValue, createMarkUp };
