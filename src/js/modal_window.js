import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

async function fetchImages(query) {
  const key = '41984486-af85e40ac9c664bf86aaf37aa';

  const url = `https://pixabay.com/api/?`;

  try {
    const response = await axios.get(url, {
      params: {
        key: key,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 40,
        safesearch: true,
      },
    });
    if (response.data.hits.length === 0) {
      searchForm.reset();
      hideButton();
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      return response.data;
    }
  } catch (error) {
    throw new Error(error);
  }
}
