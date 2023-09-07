import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
console.log(galleryItems);
const galleryList = document.querySelector(".gallery");


function createGalleryItems(elements) {
    return elements.map((element) => 

    `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
       <img
        class="gallery__image"
        src="${element.preview}" 
        alt="${element.description}" 
        />
    </a>
 </li>`
).join('');
}

galleryList.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250, });