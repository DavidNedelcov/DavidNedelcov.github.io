// Images remain ordinary links if JavaScript or dialog support is unavailable.
const viewer = document.querySelector('.lightbox');
if (viewer && typeof viewer.showModal === 'function') {
  let origin;
  document.querySelectorAll('[data-zoom]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      origin = link;
      const source = link.querySelector('img');
      const img = viewer.querySelector('img');
      img.src = link.href;
      img.alt = source.alt;
      viewer.querySelector('p').textContent = link.closest('figure').querySelector('figcaption')?.textContent || source.alt;
      viewer.showModal();
    });
  });
  viewer.querySelector('.close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if(event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => origin?.focus());
}
