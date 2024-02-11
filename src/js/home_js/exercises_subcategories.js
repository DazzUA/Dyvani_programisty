import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { onPaginationFilterPages } from './exercises_filters';
import { paginationPages } from './exercises_filters';
import { markupExercises } from './exercises_filters';

const exerciseFiltersList = document.querySelector('.ExerciseFiltersList');
const ExercisesHead = document.querySelector('.ExercisesHead');
const pagination = document.querySelector('.Pagination');

const BASE_URL = 'https://energyflow.b.goit.study/api';
let currentPage = 1;
let filterValue;
let nameValue;

exerciseFiltersList.addEventListener('click', onCardClick);

async function onCardClick(event) {
  exerciseFiltersList.removeEventListener('click', onCardClick);
  pagination.removeEventListener('click', onPaginationFilterPages);
  pagination.removeEventListener('click', onPaginationPagesbyFilter);
  if (event.target === event.currentTarget) {
    return;
  }
  exerciseFiltersList.classList.add('ExerciseCategoryList'); // при кліку на картку додаємо клас до ul (бо він має інші стилі)
  exerciseFiltersList.classList.remove('ExerciseFiltersList');
  const liEl = event.target.closest('.ExercisesItem'); // при кліку на картку шукаємо найближчий елемент у якого буде заданий селектор (це li)
  filterValue = liEl.dataset.filter; //Muscles   // тепер можемо отримати li дата-атрибути
  nameValue = liEl.dataset.name; // abductors
  try {
    ExercisesHead.innerHTML = updateExercisesHeaderMarkup(nameValue); // оновлюємо хедер секції Exercises
    const MusclesBtn = document.querySelector('#MusclesBtn');
    if (filterValue === 'Muscles') {
      MusclesBtn.classList.add('FilterBtnIsActive');
    } else if (filterValue === 'Body parts') {
      const BodyPartBtn = document.querySelector('#BodyPartBtn');
      BodyPartBtn.classList.add('FilterBtnIsActive');
    } else if (filterValue === 'Equipment') {
      const EquipmentBtn = document.querySelector('#EquipmentBtn');
      EquipmentBtn.classList.add('FilterBtnIsActive');
    }
    const { page, totalPages, results } = await getExercisesByFilter(
      filterValue,
      nameValue
    );
    exerciseFiltersList.innerHTML = createMarkUp(results); // це буде масив об'єктів
    // const StartBtn = document.querySelectorAll('.StartBtn');
    // console.log(StartBtn);
    // // треба імпортувати функцію onStartBtnClick -------
    // StartBtn.addEventListener('click', onStartBtnClick);

    const FilterBtn = document.querySelector('#FilterBtn'); // додаємо на три кнопки фільтрів слухача по кліку
    FilterBtn.addEventListener('click', onBtnClick);
    FilterBtn.addEventListener('click', onBtnClickForFormDelete);
    pagination.innerHTML = ''; // пагінація
    if (totalPages > 1) {
      const pag = paginationPages(page, totalPages); // const pag це буде рядок розмітки кнопок(нумерація сторінок)
      pagination.innerHTML = pag; // додаємо в div розмітку сторінок
    }
    pagination.addEventListener('click', onPaginationSubcategoriesPage); // вішаємо на дів з кнопками нумерації сторінок слухача подій при кліку
  } catch (error) {
    createIziToastError('Error');
  }
}

function onBtnClickForFormDelete() {
  const ExercisesForm = document.querySelector('.ExercisesForm');
  // ???vформа видаляється при першому кліку, а при другому знову хоче видалити, а її вже нема
  ExercisesForm.remove();
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
      return `<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${rating}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${_id}'>
          <p>Start</p>
          <svg width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-arrow'></use>
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='./img/symbol-defs.svg#icon-running'></use>
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
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${nameValue}</span></h2>
  <div class="ExercisesHeared">
  <div id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles" id='MusclesBtn'>Muscles</button>
    <button class="ItemExercises" data-filter="Body parts" id='BodyPartBtn'>Body parts</button>
    <button class="ItemExercises" data-filter="Equipment" id='EquipmentBtn'>Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='./img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`;
}

// це виклик функції Данила. Треба щоб він зробив експорт
// функція, яка спрацьовує коли ми клікаємо по фільтру (Muscle, Body Part, Equipment) і повертаємось назад
async function onBtnClick(event) {
  const filtersBtnArray = document.querySelectorAll('.ItemExercises');
  filtersBtnArray.forEach(btn => {
    btn.classList.remove('FilterBtnIsActive');
  });
  exerciseFiltersList.addEventListener('click', onCardClick);
  exerciseFiltersList.classList.remove('ExerciseCategoryList');
  exerciseFiltersList.classList.add('ExerciseFiltersList');
  currentPage = 1; // робимо поточну сторінку першою
  pagination.removeEventListener('click', onPaginationSubcategoriesPage); // видаляємо з нумерації сторінок слухача попереднього
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
      pagination.innerHTML = pag;
    } else {
      pagination.innerHTML = '';
    }
    pagination.addEventListener('click', onPaginationPagesbyFilter);
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
/!Цю функцію я імпортував у себе/;
// function markupExercise(results) {
//   const markup = results
//     .map(
//       ({
//         name,
//         filter,
//         imgUrl,
//       }) => ` <li class='FilterList ExercisesItem' data-filter='${filter}' data-name='${name}'>
//         <img class="ImgExercises" src="${imgUrl}" alt="${filter}">
//         <div class="FilterText">
//           <p class="FilterExercises">${name}</p>
//           <p class="FilterName">${filter}</p>
//         </div>
//       </li>`
//     )
//     .join('');
//   return markup;
// }
// ---------------------------------------------------ПАГІНАЦІЯ------------------------------------------------------------

/!Цю функцію я імпортував у себе/;
// function paginationPages(totalPages) {
//   let paginationHtml = '';
//   for (let i = 1; i <= totalPages; i += 1) {
//     paginationHtml += `<button class="pagination-btn" type="button">${i}</button>`;
//   }

//   return paginationHtml; // в залежності від к-ті сторінок повертає таку кількість кнопок в розмітці
// }

/! В цій функції я змінив назву, була onPaginationPage/;
//----
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
    exerciseFiltersList.innerHTML = createMarkUp(results); // робимо розмітку підкатегорій відповідно до номеру сторінки
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
