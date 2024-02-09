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
// loader
const loaderForm = document.querySelector('.loader');

if (localFormData !== null && localFormData !== undefined) {
  refs.input.value = localFormData.email;
} else {
  refs.input.value = '';
}

refs.submit.addEventListener('click', searchForm);
async function searchForm(event) {
  const email = refs.input.value.trim();
  event.preventDefault();
  //   console.log('____', emailInput);
  //   if (!emailInput.checkValidity()) {
  //     console.log('validiti = ', emailInput.checkValidity());
  //     iziToast.show({
  //       // class: 'error-svg',
  //       position: 'topRight',
  //       message: 'Please enter a valid email adress',
  //       maxWidth: '432',
  //       messageColor: '#fff',
  //       messageSize: '16px',
  //       backgroundColor: 'pink',
  //       close: false,
  //       closeOnClick: true,
  //     });
  //   }
  try {
    const response = await axios.post(BASE_URL, {
      email: email,
    });
    iziToast.show({
      // class: 'error-svg',
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
    // }
    refs.input.value = '';
  } catch (error) {
    iziToast.show({
      position: 'topRight',
      message: JSON.stringify(JSON.parse(error.request.responseText).message),
      maxWidth: '352',
      messageColor: '#fff',
      messageSize: '15px',
      backgroundColor: '#EF4040',
      close: false,
      closeOnClick: true,
    });

    refs.input.value = '';
  }
}

// loader для очікування відповіді на клік
function showLoader(state = true) {
  refs.loaderForm.style.display = !state ? 'none' : 'inline-block';
  filterButtons.disabled = state;
}
// scrool
const scrollBtn = document.querySelector('.scroll');
window.addEventListener('scroll', trackScroll);
function trackScroll() {}
scrollBtn.addEventListener('click', goTop);
function goTop() {
  if (
    document.body.scrollTop !== 0 ||
    document.documentElement.scrollTop !== 0
  ) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}
