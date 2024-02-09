import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('searchForm'); // Получение ссылки на форму поиска
const searchInput = document.querySelector('searchInput'); // Получение ссылки на поле ввода поискового запроса
const searchList = document.querySelector('searchList'); // Получение ссылки на список результатов поиска
const loadMoreButton = document.querySelector('loadMoreButton'); // Получение ссылки на кнопку "Загрузить еще"

let currentPage = 1; // Установка начального значения переменной currentPage равное 1. Текущая страница
const limit = 9; // Установка константы limit равное 9

searchForm.addEventListener('submit', handleSearch); // Добавление обработчика события submit на форму поиска

function handleSearch(event) {
  event.preventDefault(); // Предотвращение стандартного поведения формы

  const query = searchInput.value; // Извлечение поискового запроса из поля ввода
  const bodypart = ''; // Установка пустого значения для bodypar, muscles, equipment
  const muscles = '';
  const equipment = '';
  currentPage = 1; // Обнуление currentPage

  getExercises(query, bodypart, muscles, equipment); // Вызов функции getExercises для получения данных и отображения результатов
}

async function getExercises(query, bodypart, muscles, equipment) {
  try {
    const response = await axios.get(
      `https://energyflow.b.goit.study/api/exercises?q=${query}&bodypart=${bodypart}&muscles=${muscles}&equipment=${equipment}&page=${currentPage}&limit=${limit}`
    );
    renderExercises(response.data.results); // Отображение результатов на странице
  } catch (error) {
    handleError(error); // Обработка ошибки при запросе данных
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

loadMoreButton.addEventListener('click', () => {
  currentPage++; // Увеличение значения currentPage
  getExercises(searchInput.value, '', '', ''); // Выполнение нового запроса для загрузки дополнительных результатов
});

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
