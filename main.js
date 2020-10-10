import images from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");

const cardsMarkup = createImagesCardMarkup(images);

const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

const lightBoxImage = document.querySelector(".lightbox__image");
const lightBox = document.querySelector(".lightbox");
const lightboxOverlay = document.querySelector(".lightbox__overlay");



gallery.insertAdjacentHTML("beforeend", cardsMarkup);

function createImagesCardMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
    })
    .join("");
}

gallery.addEventListener("click", openModalWindow);
closeModalBtn.addEventListener("click", onCloseModalWindow);
lightboxOverlay.addEventListener("click", onCloseModalWindow);

function openModalWindow(event) {
  window.addEventListener("keydown", onEscKeyCloseModal);

  window.addEventListener('keydown', onChangePhoto);

  event.preventDefault();
  lightBox.classList.add("is-open");
  lightBoxImage.src = event.target.dataset.source;
}

function onCloseModalWindow() {
  window.removeEventListener("keydown", onEscKeyCloseModal);
  window.removeEventListener('keydown', onChangePhoto);
  lightBox.classList.remove("is-open");
  lightBoxImage.src = "";
}

function onEscKeyCloseModal(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    onCloseModalWindow();
  }
}


function onChangePhoto(e) {
  
  if (e.code === 'ArrowRight') {
    
  }
  if (e.code === 'ArrowLeft') {
    
  }
}
