import { galleryItems } from './gallery-items.js';
// Change code below this line

document.querySelectorAll('.gallery');
const markup = galleryItems
  .map(item => {
    return `
    <li>
    <a class="gallery__item"
    href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}"
  alt="${item.description}" />
</a> </li>`;
  })
  .join('');

document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(lightbox);
