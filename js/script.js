var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


var landing = anime({
  targets: 'div.landing',
  translateY: h * 0.30,
  scale: 0.5,
  opacity: 0,
  duration: h * 0.60,
  delay: h * 0.15,
  easing: 'linear',
  autoplay: false
});

var title = anime({
  targets: '.title',
  opacity: 1,
  duration: h * 0.25,
  delay: h * 0.20,
  easing: 'linear',
  autoplay: false
});

window.addEventListener('scroll', () =>{
  const scrolled = window.scrollY;
  landing.seek(scrolled);
  title.seek(scrolled);
});

$(document).ready(function() {
  $('.particle').particleground({
    dotColor: '#e56d7a',
    lineColor: '#e56d7a',
    density: 15000
  });
});
