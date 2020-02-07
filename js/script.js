var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const scrollable = document.documentElement.scrollHeight - h;


var landing = anime({
  targets: '.landing',
  translateY: [
    {value: h * 0.30, duration: h * 0.6, delay: h * 0.15}
  ],
  scale: [
    {value: 0.5, duration: h * 0.6, delay: h * 0.15},
    {value: 0, duration: 0, delay: h * 0.75}
  ],
  opacity: [
    {value: 0, duration: h * 0.6, delay: h * 0.15}
  ],
  easing: 'linear',
  autoplay: false
});

var comic = anime({
  targets: '.comic',
  //scale: [
   // {value: 0.5, duration: h * 0.6, delay: h * 0.15},
   // {value: 0, duration: 0, delay: h * 0.75}
  //],
  opacity: [
    {value: 100, duration: scrollable - h, delay: scrollable - h * 0.25}
  ],
  easing: 'linear',
  autoplay: false
})

var title = anime({
  targets: '.title',
  opacity: [
    {value: 1, duration: h * 0.6, delay: 0}
  ],
  easing: 'linear',
  autoplay: false
});

function navTitleHref() {
  var navTitle = document.getElementsByClassName("title")[0];
  
  if (navTitle.style.opacity == 0) {
    navTitle.style.pointerEvents = "none";
  }
  else {
    navTitle.style.pointerEvents = "auto";
  }
}


document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    navTitleHref();
    document.getElementById("intro").innerHTML = "0x4A757374696E!";
    KUTE.to(
      document.getElementById("intro"),
      {text: "Hello, I'm Justin!"},
      {textChars: 'numeric', delay: 1000, duration: 1500, easing: 'easeOut'}
    ).start();
    document.getElementById("navtitle").innerHTML = "0x4A757374696E!";
    KUTE.to(
      document.getElementById("navtitle"),
      {text: "Hello, I'm Justin!"},
      {textChars: 'numeric', delay: 1000, duration: 1500, easing: 'easeOut'}
    ).start();
  }
}


// Topbar shadow
window.addEventListener('scroll', () =>{
  //const scrollable = document.documentElement.scrollHeight - h;
  const scrolled = window.scrollY;
  landing.seek(scrolled);
  title.seek(scrolled);
  comic.seek(scrolled);
  if (scrolled >= scrollable - 3.5 * getEmPixels()) {
    document.getElementById("header").classList.remove('z-depth-2');
  }
  else {
    document.getElementById("header").classList.add('z-depth-2');
  }
  navTitleHref();
});