// Что реализовано в коде:
// Пользователь может вводить поисковый запрос и отправлять его на сервер;
// После получения ответа от сервера, результаты поиска отображаются на странице;
// Созданы элементы списка с названиями упражнений и добавляены в список результатов поиска.
// В случае отсутствия результатов поиска выводится соответствующее уведомление (функция showNoResultsToast).

import axios from 'axios';

// базовый URL для отправки запросов к API
const BASE_URL = 'https://energyflow.b.goit.study/api/exercises';

// объект с ссылками на:
const refs = {
  searchForm: document.querySelector('.ExercisesForm'), // форму поиска
  searchInput: document.querySelector('.SearchInput'), // поле ввода,
  searchBtn: document.querySelector('.SearchButton'), // кнопку
  searchIcon: document.querySelector('.IconSearch'), // иконку
  searchLable: document.querySelector('#search'), // элемент формы <lable>
};

// передаем параметры запроса при выполнении запроса к API. Задаем начальные параметры для поиска.
const queryParams = {
  query: '', // строка запроса для поиска
  page: 1, // по умолчанию отображается первая страница результатов
};

// Определяем асинхронную функцию handleSearch. Функция принимает событие в качестве аргумента

async function handleSearch(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Очищаем список результатов поиска перед новым запросом
  refs.searchList.innerHTML = '';

  // Обновляем параметры запроса queryParams.
  queryParams.page = 1;
  const form = event.currentTarget;
  queryParams.query = form.elements.query.value.trim();

  if (!queryParams.query) {
    return;
  }

  // Вызываем функция onFormSubmit с передачей параметров запроса.
  try {
    const card = await onFormSubmit(query);
    renderExercises(card); // передаем массив упражнений из объекта card.data
  } catch (error) {}
}

// Определяем асинхронную функцию onFormSubmit. Функция принимает объект запроса query
async function onFormSubmit(data, query) {
  try {
    // Выполняем GET-запрос к API с передачей параметров запроса. Результат запроса сохраняем в переменной response
    const response = await axios.get(BASE_URL, {
      params: {
        bodypart: data,
        keyword: query, // передаем значение из свойства query объекта queryParams, которое содержит строку ключевого слова для поиска
        page: queryParams.page, // передаем значение из свойства page объекта queryParams, которое содержит номер страницы
        limit: 9,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error); // Вывод ошибки в консоль при возникновении ошибки запроса
  }
}
// Определяем функцию renderExercises. Функция принимает массив упражнений. Если массив пустой, вызывается функция showNoResultsToast. Если нет - создаются элементы списка 'li' с названиями упражнений и добавляются в список результатов поиска.

function renderExercises(exercises) {
  if (exercises.length === 0) {
    showNoResultsToast(); // Вызов функции showNoResultsToast при отсутствии результатов поиска
  } else {
    createMarkUp(exercises);
  }

  // Функция для вывода всплывающего уведомления с сообщением об отсутствии результатов поиска
  function showNoResultsToast() {
    const noResultsMessageContainer = document.createElement('div'); // контейнер для оформления сообщения
    noResultsMessageContainer.classList.add('NoResultsMessageContainer'); // добавил класс для контейнера

    const noResultsMessage = document.createElement('div'); // контейнер для текста
    noResultsMessageo.classList.add('NoResultsMessage'); // добавил класс для сообщения
    noResultsMessageo.innerHTML =
      'Unfortunately, <span class="NoResultsMessageAccent">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.';

    noResultsMessageContainer.appendChild(noResultsMessage); // добавил сообщение внутрь контейнера, в котором это сообщение находится
    document.body.appendChild(noResultsMessageContainer); // добавил контейнер с сообщением на страницу внутрь <body>, чтобы показать всплывающее уведомление
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
export { handleSearch };
//--------------------------------------Пагинация------------------------------------//
