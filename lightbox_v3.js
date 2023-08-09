const initLightbox = () => {
    const images = document.querySelectorAll('.notion-image');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxWrapper = document.querySelector('.lightbox-wrapper');
    const closeLightbox = document.querySelector('.close-lightbox');

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            lightboxImage.setAttribute("src", e.target.src);
            lightboxWrapper.style.display = 'flex';
            lightboxWrapper.classList.add('open');
        });
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
    });

    const keydownListener = event => {
        if (event.key === 'Escape' && lightboxWrapper.classList.contains('open')) {
            lightboxWrapper.style.display = 'none';
            lightboxWrapper.classList.remove('open');
        }
    };

    document.addEventListener('keydown', keydownListener);
};

window.addEventListener('load', e => {
    initLightbox();
});
