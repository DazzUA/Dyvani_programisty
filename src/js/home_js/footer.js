import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const refs = {
  form: document.querySelector('.FooterForm'),
  input: document.querySelector('.FormInput'),
  submit: document.querySelector('.ModalButton'),
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
    createMessage(
      JSON.stringify(JSON.parse(response.request.responseText).message)
    );
    refs.input.value = '';
  } catch (error) {
    createMessage(
      JSON.stringify(JSON.parse(error.request.responseText).message)
    );

    refs.input.value = '';
  }
}
function createMessage(message) {
  iziToast.show({
    position: 'topRight',
    message: message,
    maxWidth: '352',
    messageColor: '#fff',
    messageSize: '15px',
    backgroundColor: 'rgba(27, 27, 27, 0.7)',
    close: false,
    closeOnClick: true,
  });
}
// loader
// const loaderForm = document.querySelector('.loader');
// loader для очікування відповіді на клік
// function showLoader(state = true) {
//   refs.loaderForm.style.display = !state ? 'none' : 'inline-block';
//   filterButtons.disabled = state;
// }
