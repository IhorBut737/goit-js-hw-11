import axios from 'axios';

const API_KEY = '48994521-1332b5dc6d32291391eccb048';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const params = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?key=${API_KEY}&${params.toString()}`;

  return axios.get(url).then(response => {
    if (response.data.hits.length === 0) {
      return Promise.reject(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.data.hits;
  });
}
