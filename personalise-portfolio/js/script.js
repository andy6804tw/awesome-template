window.onload = () => {
  setTimeout(function(){
    document.querySelector('.loader').style.opacity = 0;
  }, 1200)
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', () =>
    document.querySelector('ul').classList.toggle('open')
  );
};