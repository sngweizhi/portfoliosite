let currentListeners = {
    images: [],
    lightbox: [],
    keydown: null
};

const initLightbox = () => {
    console.log('Initializing lightbox...');

    const images = document.querySelectorAll('.notion-image');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxWrapper = document.querySelector('.lightbox-wrapper');
    const closeLightbox = document.querySelector('.close-lightbox');

    if (!images.length) {
        console.warn('No images found for lightbox initialization.');
        return;  // Exit if no images are found
    }

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            console.log('Image clicked.');
            lightboxImage.setAttribute("src", e.target.src);
            lightboxWrapper.style.display = 'flex';
            lightboxWrapper.classList.add('open');
        });
    });

    const lightboxClickListener = (e) => {
        console.log('Lightbox or close button clicked.');
        if (lightboxWrapper.classList.contains('open')) {
            lightboxWrapper.style.display = 'none';
            lightboxWrapper.classList.remove('open');
            lightboxImage.setAttribute("src", '');
        }
    };

    [lightboxWrapper, closeLightbox].forEach(button => {
        button.addEventListener('click', lightboxClickListener);
    });

    const keydownListener = event => {
        if (event.key === 'Escape' && lightboxWrapper.classList.contains('open')) {
            console.log('Escape key pressed.');
            lightboxWrapper.style.display = 'none';
            lightboxWrapper.classList.remove('open');
        }
    };

    document.addEventListener('keydown', keydownListener);
};

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    initLightbox();

    if (window.next && next.router && next.router.events) {
        console.log('Detected Next.js. Listening to route changes...');
        next.router.events.on('routeChangeComplete', () => {
            console.log('Route change detected.');
            initLightbox();
        });
    }
});
