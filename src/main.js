import { getPictures } from './js/pixabay-api';
import { pictureMarkup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-photo');
const picturesList = document.querySelector('.pictures-list');
export const lightBox = new SimpleLightbox('.pictures-list a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmitSearch);

function handleSubmitSearch(event) {
  event.preventDefault();
  picturesList.innerHTML = '';

  const query = form.search.value.toLowerCase().trim();
  if (query != '') {
    getPictures(query)
      .then(photos => {
        const arrPhotos = photos.hits;
        console.log(arrPhotos);
        picturesList.innerHTML = pictureMarkup(arrPhotos);
        lightBox.refresh();
      })
      .catch(error => console.log(error));
  } else {
    iziToast.error({
      message: 'Please enter valid query.',
      position: 'topRight',
      theme: 'dark',
    });
  }
}
