document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.notion-image');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxWrapper = document.querySelector('.lightbox-wrapper');
    const closeLightbox = document.querySelector('.close-lightbox');

    const openLightbox = (e) => {
        lightboxImage.setAttribute("src", e.target.src);
        lightboxWrapper.style.display = 'flex';
        lightboxWrapper.classList.add('open');
    };

    const closeOnEscape = (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    };

    const closeLightbox = () => {
        lightboxWrapper.style.display = 'none';
        lightboxWrapper.classList.remove('open');
        lightboxImage.setAttribute("src", '');
    };

    const cleanupLightbox = () => {
        images.forEach(image => {
            image.removeEventListener('click', openLightbox);
        });

        lightboxWrapper.removeEventListener('click', closeLightbox);
        closeLightbox.removeEventListener('click', closeLightbox);
        document.removeEventListener('keydown', closeOnEscape);
    };

    const initLightbox = () => {
        cleanupLightbox(); // Clean up previous listeners

        images.forEach(image => {
            image.addEventListener('click', openLightbox);
        });

        lightboxWrapper.addEventListener('click', closeLightbox);
        closeLightbox.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', closeOnEscape);
    };

    initLightbox();

    window.addEventListener('load', () => {
        next.router.events.on('routeChangeComplete', () => {
            cleanupLightbox();
            initLightbox();
        });
    });
});
