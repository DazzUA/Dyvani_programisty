import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const refs = {
  form: document.querySelector('.footer-form'),
  input: document.querySelector('.form-input'),
  submit: document.querySelector('.modal-button'),
};
const BASE_URL = 'https://energyflow.b.goit.study/api/subscription';
const localStorageKey = 'feedback-form-state';
const localFormData = JSON.parse(localStorage.getItem(localStorageKey));

refs.submit.addEventListener('click', searchForm);
async function searchForm(event) {
  event.preventDefault();
  const email = refs.input.value.trim();
  try {
    const response = await axios.post(BASE_URL, {
      email: email,
    });
    // console.log('Response:', response);
    createMessage(
      JSON.stringify(JSON.parse(response.request.responseText).message)
    );
  } catch (error) {
    // console.error(
    //   'Error:',
    //   JSON.stringify(JSON.parse(error.request.responseText).message)
    // );
    createMessage(
      JSON.stringify(JSON.parse(error.request.responseText).message)
    );
  }
  refs.input.innerHTML = '';
}
function createMessage(message) {
  iziToast.show({
    class: 'error-svg',
    position: 'topRight',
    icon: 'error-svg',
    message: message,
    maxWidth: '432',
    messageColor: '#fff',
    messageSize: '16px',
    backgroundColor: '#EF4040',
    close: false,
    closeOnClick: true,
  });
}
