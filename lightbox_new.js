let currentListeners = {
    images: [],
    lightbox: [],
    keydown: null
};

const initLightbox = () => {
    removeEventListeners();

    const images = document.querySelectorAll('.notion-image');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxWrapper = document.querySelector('.lightbox-wrapper');
    const closeLightbox = document.querySelector('.close-lightbox');

    images.forEach(image => {
        const imageClickListener = (e) => {
            lightboxImage.setAttribute("src", e.target.src);
            lightboxWrapper.style.display = 'flex';
            lightboxWrapper.classList.add('open');
        };
        image.addEventListener('click', imageClickListener);
        currentListeners.images.push({ element: image, listener: imageClickListener });
    });

    const lightboxClickListener = (e) => {
        if (lightboxWrapper.classList.contains('open')) {
            lightboxWrapper.style.display = 'none';
            lightboxWrapper.classList.remove('open');
            lightboxImage.setAttribute("src", '');
        }
    };

    [lightboxWrapper, closeLightbox].forEach(button => {
        button.addEventListener('click', lightboxClickListener);
        currentListeners.lightbox.push({ element: button, listener: lightboxClickListener });
    });

    const keydownListener = event => {
        if (event.key === 'Escape' && lightboxWrapper.classList.contains('open')) {
            lightboxWrapper.style.display = 'none';
            lightboxWrapper.classList.remove('open');
        }
    };

    document.addEventListener('keydown', keydownListener);
    currentListeners.keydown = keydownListener;
};

const removeEventListeners = () => {
    currentListeners.images.forEach(({ element, listener }) => {
        element.removeEventListener('click', listener);
    });
    currentListeners.lightbox.forEach(({ element, listener }) => {
        element.removeEventListener('click', listener);
    });
    if (currentListeners.keydown) {
        document.removeEventListener('keydown', currentListeners.keydown);
    }

    currentListeners = {
        images: [],
        lightbox: [],
        keydown: null
    };
};

window.addEventListener('load', e => {
    initLightbox();
    if (typeof next !== 'undefined' && next.router && next.router.events) {
        next.router.events.on('routeChangeComplete', () => {
            initLightbox();
        });
    }
});
