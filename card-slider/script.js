$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  const current = document.getElementsByClassName('flex--active')[0].getAttribute('data-slide');
  // get button data-slide
  const next = this.getAttribute('data-slide');

  document.getElementsByClassName('slide-nav')[0].classList.remove('active');
  this.classList.add('active');

  if (current === next) {
    return false;
  } else {
    // $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    document.querySelectorAll(`div[data-slide='${next}']`)[0].classList.add('flex--preStart');
    // $('.flex--active').addClass('animate--end');
    document.getElementsByClassName('flex--active')[0].classList.add('animate--end');
    setTimeout(function() {
      // $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      document.getElementsByClassName('flex--preStart')[0].classList.add('flex--active');
      document.getElementsByClassName('flex--preStart')[0].classList.remove('animate--start', 'flex--preStart');
      // $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      document.getElementsByClassName('animate--end')[0].classList.add('animate--start');
      document.getElementsByClassName('animate--end')[0].classList.remove('animate--end', 'flex--active');
    }, 800);
  }
});


// document.body.onscroll = function (event) {
//   const html = document.documentElement;
//   console.log(html.scrollTop);
// };

let index=1;
let animating=false;
window.addEventListener('wheel', function (event) {
  console.log(animating);
  if (animating) return;
  animating = true;
  
  if (event.deltaY > 0) {
    console.log('scrolling up');
    index-=1;
    // document.getElementById('status').textContent = 'scrolling up';
  } else if (event.deltaY < 0) {
    console.log('scrolling down');
    index+=1;
    // document.getElementById('status').textContent = 'scrolling down';
  }
  if (index < 1)
    index = 5;
  else if (index > 5)
    index = 1;
  $('.slider__warpper').find('.flex__container[data-slide=' + index + ']').addClass('flex--preStart');
  $('.flex--active').addClass('animate--end');
  setTimeout(function () {
    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
  }, 800);
  setTimeout(function(){
    animating = false;
  },1800)
});


var ts;
window.addEventListener('touchstart', function (e) {
  ts = e.touches[0].clientY;
});
window.addEventListener('touchmove', function (e) {
  if (animating) return;
  animating = true;
  var te = e.touches[0].clientY;
  if (ts > te) {
    // next
    console.log('down');
    index += 1;
  } else {
    console.log('up');
    index -= 1;
  }
  if (index < 1)
    index = 5;
  else if (index > 5)
    index = 1;
  $('.slider__warpper').find('.flex__container[data-slide=' + index + ']').addClass('flex--preStart');
  $('.flex--active').addClass('animate--end');
  setTimeout(function () {
    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
  }, 800);
  setTimeout(function () {
    animating = false;
  }, 1800)
});