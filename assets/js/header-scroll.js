(function () {
  var header = document.querySelector('.header-wrap');
  if (!header) return;

  var threshold = 40;

  function onScroll() {
    if (window.scrollY > threshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
