import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const refs = {
  form: document.querySelector('.footerForm'),
  input: document.querySelector('.formInput'),
  submit: document.querySelector('.modalButton'),
};
const BASE_URL = 'https://energyflow.b.goit.study/api/subscription';
const localStorageKey = 'feedback-form-state';
const localFormData = JSON.parse(localStorage.getItem(localStorageKey));

if (localFormData !== null && localFormData !== undefined) {
  refs.input.value = localFormData.email;
} else {
  refs.input.value = '';
}

refs.submit.addEventListener('click', searchForm);
async function searchForm(event) {
  const email = refs.input.value.trim();
  event.preventDefault();
  try {
    const response = await axios.post(BASE_URL, {
      email: email,
    });
    iziToast.show({
      position: 'topRight',
      message: JSON.stringify(
        JSON.parse(response.request.responseText).message
      ),
      maxWidth: '352',
      messageColor: '#fff',
      messageSize: '15px',
      backgroundColor: 'rgba(27, 27, 27, 0.7)',
      close: false,
      closeOnClick: true,
    });
    refs.input.value = '';
  } catch (error) {
    iziToast.show({
      position: 'topRight',
      message: JSON.stringify(JSON.parse(error.request.responseText).message),
      maxWidth: '352',
      messageColor: '#fff',
      messageSize: '15px',
      backgroundColor: 'rgba(27, 27, 27, 0.7)',
      close: false,
      closeOnClick: true,
    });

    refs.input.value = '';
  }
}
// loader
// const loaderForm = document.querySelector('.loader');
// loader для очікування відповіді на клік
// function showLoader(state = true) {
//   refs.loaderForm.style.display = !state ? 'none' : 'inline-block';
//   filterButtons.disabled = state;
// jjjj}
