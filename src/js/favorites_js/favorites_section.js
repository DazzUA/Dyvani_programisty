import sprite from '../../img/symbol-defs.svg';
const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = '/page-2.html'; //fullUrl.substring(lastSlashIndex);

function checkLocalStorageData(key) {
  let storageItem = localStorage.getItem(key);
  if (!storageItem) {
    localStorage.setItem(key, JSON.stringify([]));
    storageItem = '[]';
  }
  return storageItem;
}

let storage = 'favorites'; // ключ для localStorage
let storageItem = checkLocalStorageData(storage); // виклик функції з переданим ключем
let parsedItem = JSON.parse(storageItem); // Перетворити рядок JSON на об'єкт або масив

const favorites = document.querySelector('.add-favorites');
const favoritesList = document.querySelector('.favorites-list');
let id = '';
let cardForDelete;
const messageInfo = document.querySelector('.message-favorites');
const paginationBlock = document.querySelector('.favorites-pagination-block');
const favoritesContainerBlock = document.querySelector(
  '.div-favorites-section'
);
const deleteCards = document.querySelectorAll('.favorites-list-item');

// Функція для створення карти збережених улюблених елементів
function createFavoriteCard(elem) {
  const markup = createFavoriteCardMarkup(elem);

  // Вставити створену карту в список улюблених
  favoritesList.insertAdjacentHTML('beforeend', markup);
}

///**перевіряє чи є в локалсторідж запис і якщо є, то малює картки, інакше показує повідомлення */
if (result === '/page-2.html') {
  if (!storageItem || parsedItem.length == 0) {
    messageInfo.classList.add('is-open-message-favorites');
    paginationBlock.classList.add('close');
  } else if (storageItem) {
    try {
      // Пройтися по кожному елементу і створити відповідну карту
      parsedItem.forEach(elem => {
        createFavoriteCard(elem);
      });
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}

/**пагінація */
if (result === '/page-2.html') {
  document.addEventListener('DOMContentLoaded', function () {
    // Функція для відображення пагінації залежно від ширини екрану.
    function togglePagination() {
      const currentPage = window.location.pathname; // Отримання поточного шляху сторінки
      // Перевірка, чи поточна сторінка - '/page-2.html', і ширина екрану менше або дорівнює 767px.
      if (
        window.innerWidth <= 767 &&
        isFavoritesListVisible()
        /*currentPage === '/fitnes-app/page-2.html' &&
        window.innerWidth <= 767 &&
        isFavoritesListVisible()*/
      ) {
        // Відображення пагінації для невеликих екранів на сторінці 2.
        paginationBlock.style.display = 'flex';
      } else {
        // Приховати пагінацію для більших екранів або якщо список вибраного вмісту не видимий.
        paginationBlock.style.display = 'none';
      }
    }

    // Function to check if favorites list is visible
    function isFavoritesListVisible() {
      return favoritesList && favoritesList.offsetParent !== null;
    }

    // Function to handle pagination logic
    function paginate() {
      // Define items per page based on screen width and visibility of favorites list
      const itemsPerPage =
        window.innerWidth <= 767 && isFavoritesListVisible()
          ? 8
          : favoritesList.children.length;

      // Show all items if screen width is greater than 767px
      if (window.innerWidth > 767 && isFavoritesListVisible()) {
        for (let i = 0; i < favoritesList.children.length; i++) {
          favoritesList.children[i].style.display = 'block';
        }
        return;
      }

      const totalPages = Math.ceil(
        favoritesList.children.length / itemsPerPage
      );

      let currentPage = 1;

      // Function to show items for current page
      function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Hide all items
        for (let i = 0; i < favoritesList.children.length; i++) {
          favoritesList.children[i].style.display = 'none';
        }

        // Show items for current page
        for (
          let i = startIndex;
          i < endIndex && i < favoritesList.children.length;
          i++
        ) {
          favoritesList.children[i].style.display = 'block';
        }
      }

      // Show the first page initially
      showPage(currentPage);

      // Event listeners for pagination buttons
      paginationBlock.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
          // Remove active class from all buttons
          const buttons = paginationBlock.querySelectorAll('button');
          buttons.forEach(button => button.classList.remove('active-btn'));

          // Add active class to the clicked button
          event.target.classList.add('active-btn');

          // Show the corresponding page
          currentPage = parseInt(event.target.textContent);
          showPage(currentPage);
        }
      });
    }

    // Function to handle scroll behavior
    function checkScroll() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        favoritesContainerBlock.style.overflowY = 'scroll';
      } else {
        favoritesContainerBlock.style.overflowY = 'visible';
      }

      if (window.matchMedia('(min-width: 1440px)').matches) {
        favoritesContainerBlock.style.maxHeight = '480px'; // Set maximum height if necessary
      } else {
        favoritesContainerBlock.style.maxHeight = 'none';
      }

      // Зробити скролінг менш інтенсивним і більш плавним
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start', // Налаштування скролінгу починається від верхнього краю елементу
      };

      window.scrollBy(0, 10); // Змінити значення, яке ви вважаєте відповідним
    }

    // Перевірка поведінки прокрутки при першому завантаженні
    checkScroll();

    // Check pagination visibility on initial load
    togglePagination();

    // Перевірка видимості пагінації та ініціалізація пагінації під час зміни розміру вікна
    window.addEventListener('resize', function () {
      togglePagination();
      paginate();
      checkScroll();
    });

    // Initialize pagination if needed
    if (isFavoritesListVisible() && favoritesList.children.length >= 8) {
      paginate();
    }
  });
}

//**Ігорю на кнопку*/

const favoritesButton = document.querySelector('.add-favorites');
function toggleFavorite() {
  if (favoritesButton.textContent.trim() == 'Add to favorites') {
    parsedItem.push({
      id: '64f389465ae26083f39b17df', //id
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0067.gif', //gif.src
      name: 'barbell one arm snatch', //name.textContent
      rating: '3.67', //rating.textContent
      target: 'delts', //target.textContent
      popular: '5548', //popular.textContent
      bodyPart: 'shoulders', //bodyPart.textContent
      equipment: 'barbell', //equipment.textContent
      burnedCalories: '345', //burnedCalories.textContent
      description:
        'Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises.', //description.textContent
    });
    localStorage.setItem(storage, JSON.stringify(parsedItem));
    favoritesButton.textContent = `Delete from favorites`;
    //favoritesButton.innerHTML = `Delete from favorites`;
  } else {
    const index = parsedItem.findIndex(item => item.id == id);
    parsedItem.splice(index, 1);
    localStorage.setItem(storage, JSON.stringify(parsedItem));
    const fullCards = document.querySelectorAll('.favorites-list-item');

    favoritesButton.textContent = `Add to favorities`;
    //favoritesButton.innerHTML = `Add to favorities ${heartIcon}`;
    if (document.querySelector(`.favorites-list-item[id="${id}"]`)) {
      fullCards.forEach(elem => {
        if (elem.id == id) cardForDelete = elem;
      });
      list.removeChild(cardForDelete);
      if (!storageItem || parsedItem.length == 0) {
        messageInfo.classList.add('is-open-message-info');
        paginationBlock.classList.add('close');
      }
    }
  }
}

favoritesButton.addEventListener('click', toggleFavorite);

function handleFavoritesListClick(event) {
  if (
    event.target.classList.contains('favorites-btn-trash') ||
    event.target.classList.contains('favorites-icon-delete') ||
    event.target.classList.contains('favorites-icon-delete-use')
  ) {
    const id = event.currentTarget.id;
    deleteCard(id);
  }
}

if (result === '/page-2.html') {
  favoritesList.addEventListener('click', handleFavoritesListClick);
}

function deleteCard(id) {
  const index = parsedItem.findIndex(item => item.id == id);
  parsedItem.splice(index, 1);
  localStorage.setItem(storage, JSON.stringify(parsedItem));
  deleteCards.forEach(elem => {
    if (elem.id == id) cardForDelete = elem;
  });
  if (cardForDelete) {
    favoritesList.removeChild(cardForDelete);
  }
  if (!storageItem || parsedItem.length == 0) {
    messageInfo.classList.add('is-open-message-info');
    paginationBlock.classList.add('close');
  }
  renderFavoriteCards();
}

function renderFavoriteCards() {
  // Очищаємо поточні карточки зі списку
  favoritesList.innerHTML = '';
  // Рендеримо кожну карточку у списку
  parsedItem.forEach(elem => {
    const markup = createFavoriteCardMarkup(elem);
    // Вставляємо розмітку карточки у список улюблених елементів
    favoritesList.insertAdjacentHTML('beforeend', markup);
  });
}

function createFavoriteCardMarkup(elem) {
  return `<li class="favorites-list-item" id="${elem.id}">
        <div class="favorites-card-header">
            <div class="favorites-workout">
                <p>WORKOUT</p>
            </div>
            <button class="favorites-btn-trash" aria-label="trash" type="button">
                <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                    <use class="favorites-icon-delete-use" href="${sprite}#icon-trash"></use>
                </svg>
            </button>
            <button
                data-id="${elem.id}"
                class="favorites-btn-arrow"
                aria-label="start"
                type="button">Start
                    <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                        <use class="favorites-icon-arrow-use" href="${sprite}#icon-arrow"></use>
                    </svg>
            </button>
            </div>
            <div class="favorites-main-container">
    
            <div class="favorite-icon-run-man">
            <svg width="14" height="14">
      <use href="${sprite}#icon-running"></use>
    </svg></div>                  
                <h3 class="favorites-name-part">${elem.name}</h3>
            </div>
            <div class="favorites-card-footer">
            <ul class="favorites-card-footer-list">
                <li class="favorites-card-footer-item">
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Burned calories:</h4>
                        <p class="favorites-card-footer-block">${elem.burnedCalories}</p>
                    </div>
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Body part:</h4>
                        <p class="favorites-card-footer-block">${elem.bodyPart}</p>
                    </div>
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Target:</h4>
                        <p class="favorites-card-footer-block">${elem.target}</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>`;
}
