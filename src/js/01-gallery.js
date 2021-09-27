import { galleryItems } from './gallery-items.js';
// Change code below this line

document.querySelectorAll('.gallery');
const markup = galleryItems
  .map(item => {
    return `<div class ="gallery__item"> 
    <a class="gallery__link"
     href ="${item.original}">
    <img class="gallery__image"
    data-source ="${item.original}"
    src ="${item.preview}"
     alt="${item.description}"
     />
     </a>
</div>`;
  })
  .join('');

document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
document.querySelector('.gallery').addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.className === '.gallery__image') {
    return;
  }
  const imgToInsert = e.target.dataset.source;
  const instance = basicLightbox.create(`

           <img src= "${imgToInsert}"
           />

  `);

  instance.show();
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
});
