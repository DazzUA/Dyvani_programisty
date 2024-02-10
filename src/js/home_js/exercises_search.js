// Что реализовано в коде:
// Пользователь может вводить поисковый запрос и отправлять его на сервер;
// После получения ответа от сервера, результаты поиска отображаются на странице;
// В случае отсутствия результатов поиска выводится соответствующее уведомление.

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// базовый URL для отправки запросов к API
const BASE_URL = 'https://energyflow.b.goit.study/api/exercises';

// объект с ссылками на форму поиска, поле ввода и список результатов поиска
const refs = {
  searchForm: document.querySelector('.SearchExercises'),
  searchInput: document.querySelector('.SearchInput'),
  searchList: document.querySelector('.SearchExercisesList'),
};

// передаем параметры запроса при выполнении запроса к API. Задаем начальные параметры для поиска.
const queryParams = {
  query: '', // строка запроса для поиска
  page: 1, // по умолчанию отображается первая страница результатов
};

// повесили слушателя события submit на форму поиска, который вызывает функцию handleSearch при отправке формы.
refs.searchForm.addEventListener('submit', handleSearch);

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
  await onFormSubmit(queryParams);
}

// Определяем асинхронную функцию onFormSubmit. Функция принимает объект запроса query
async function onFormSubmit(query) {
  try {
    // Выполняем GET-запрос к API с передачей параметров запроса. Результат запроса сохраняем в переменной response
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        bodypart: '',
        muscles: '',
        equipment: '',
        keyword: query.query, // эти значения из queryParams
        page: query.page,
        limit: 9,
      },
    });
    // Вызываем функцию renderExercises с передачей массива упражнений из ответа
    renderExercises(response.data.results);
  } catch (error) {
    handleError(error); // Вывод ошибки в консоль при возникновении ошибки запроса
  }
}
// Определяем функцию renderExercises. Функция принимает массив упражнений. Если массив пустой, вызывается функция showNoResultsToast. Если нет - создаются элементы списка 'li' с названиями упражнений и добавляются в список результатов поиска.

function renderExercises(exercises) {
  if (exercises.length === 0) {
    showNoResultsToast(); // Вызов функции showNoResultsToast при отсутствии результатов поиска
  } else {
    exercises.forEach(exercise => {
      const exerciseItem = document.createElement('li');
      exerciseItem.textContent = exercise.name;

      // Используем refs для доступа к searchList
      refs.searchList.appendChild(exerciseItem);
    });
  }
}

// Функция для вывода всплывающего уведомления с сообщением о отсутствии результатов поиска
function showNoResultsToast() {
  iziToast.error({
    title: 'No Results',
    message:
      'Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs',
  });
}
