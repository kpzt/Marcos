const barra = document.getElementById('top-bar');

window.addEventListener('scroll', () => {
  const topoDaTela = barra.getBoundingClientRect().top;
  if (topoDaTela <= 0) {
    barra.classList.add('fixa');
  } else {
    barra.classList.remove('fixa');
  }
});
