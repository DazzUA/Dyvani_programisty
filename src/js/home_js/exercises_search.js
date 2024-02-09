import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.SearchExercises'); // Получение ссылки на форму поиска
const searchInput = document.querySelector('.SearchInput'); // Получение ссылки на поле ввода поискового запроса
const searchList = document.querySelector('.SearchExercisesList'); // Получение ссылки на список результатов поиска
const loadMoreButton = document.querySelector('#LoadMoreButton'); // Получение ссылки на кнопку "Загрузить еще"

// let currentPage = 1; // Установка начального значения переменной currentPage равное 1. Текущая страница
// const limit = 9; // Установка константы limit равное 9
let query = '';
searchForm.addEventListener('submit', handleSearch); // Добавление обработчика события submit на форму поиска

function handleSearch(event) {
  event.preventDefault(); // Предотвращение стандартного поведения формы

  query = searchInput.value; // Извлечение поискового запроса из поля ввода
  //   const bodypart = ''; // Установка пустого значения для bodypar, muscles, equipment
  //   const muscles = '';
  //   const equipment = '';
  //   currentPage = 1; // Обнуление currentPage

  onFormSubmit(query); // Вызов функции onFormSubmit для получения данных и отображения результатов query, bodypart, muscles, equipment
}

async function onFormSubmit(query) {
  try {
    const url = `https://energyflow.b.goit.study/api/exercises?`;

    const response = await axios.get(url, {
      params: {
        bodypart: 'back',
        keyword: query,
        page: 1,
        limit: 9,
      },
    });
    renderExercises(response.data.results); // Отображение результатов на странице
  } catch (error) {
    handleError(error); // Обработка ошибки при запросе данных
  } finally {
    searchForm.reset(); // сброс полей форми
  }
}
// Функция принимает массив объектов упражнений exercises, и отображает их на странице. Она отображает список упражнений на странице, используя данные из массива exercises.

function renderExercises(exercises) {
  if (exercises.length === 0) {
    showNoResultsToast(); // Вывод всплывающего уведомления о отсутствии результатов
  } else {
    exercises.forEach(exercise => {
      const exerciseItem = document.createElement('li'); // Создается новый элемент списка

      exerciseItem.textContent = exercise.name; // Текстовое содержимое этого элемента устанавливается равным названию упражнения из объекта
      searchList.appendChild(exerciseItem); // Созданный элемент добавляется к списку упражнений на странице
    });
  }
}

function handleError(error) {
  console.log(error); // Вывод ошибки в консоль
}

function showNoResultsToast() {
  iziToast.error({
    title: 'No Results',
    message:
      'Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs',
  }); // Уведомление об отсутствии упражнений по запросу
}
export { onFormSubmit };
