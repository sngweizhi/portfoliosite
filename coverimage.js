document.addEventListener('DOMContentLoaded', function() {
  const observer = new MutationObserver(function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const imgElement = document.querySelector('.notion-header__cover img');

        if (imgElement) {
          imgElement.removeAttribute('srcset');

          observer.disconnect();
        }
      }
    }
  });

  observer.observe(document, { childList: true, subtree: true });
});