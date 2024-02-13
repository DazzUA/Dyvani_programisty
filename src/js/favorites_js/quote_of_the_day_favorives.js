import axios from 'axios';

let quoteTextEl = document.querySelector('.quoteFavoritesText');
let authorEl = document.querySelector('.quoteFavoritesAuthor');

window.addEventListener('DOMContentLoaded', async function () {
    try {
        // Перевірка, чи дані вже зберігалися раніше
        let storedData = localStorage.getItem('quoteData');
        let storedDate = localStorage.getItem('quoteDate');

        let currentDate = new Date();
        let storedDateObj = storedDate ? new Date(storedDate) : null;

        // Перевірка, чи сьогодні вже був запит, і якщо так, використовуємо збережені дані
        if (storedData && storedDateObj && isSameDay(currentDate, storedDateObj)) {
            updateUI(JSON.parse(storedData));
            return;
        }

        // Якщо ні дістаємо нові дані з backend
        let response = await axios.get('https://energyflow.b.goit.study/api/quote');
        let data = response.data;

        // Зберігаємо отримані дані та дату
        localStorage.setItem('quoteData', JSON.stringify(data));
        localStorage.setItem('quoteDate', currentDate.toISOString());

        // Оновлення елементів HTML отриманими даними
        updateUI(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

function updateUI(data) {
  quoteTextEl.innerText = data.quote;
  authorEl.innerText = data.author;
}

function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}
