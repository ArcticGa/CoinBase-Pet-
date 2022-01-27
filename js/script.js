/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
const closeLogin = document.getElementById('close-login')


// SHOW
toggleMenu.addEventListener('click', () => {
   navMenu.classList.toggle('show')
});

//Hidden
closeMenu.addEventListener('click', () => {
   navMenu.classList.remove('show')
});
closeLogin.addEventListener('click', () => {
   navMenu.classList.remove('show')
});



//Dashboard
const dashBoard = document.getElementById('nav-db')
const dbBlock = document.getElementById('db-block')
dashBoard.addEventListener('click', () => {
   dbBlock.classList.toggle('open')
});



// Arrow to scroll up
const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashOffset
const updateDashOffset = () => {
   const height = document.documentElement.scrollHeight - window.innerHeight;
   const dashoffset = pathLength - (getTop() * pathLength / height);
   scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//onScroll
window.addEventListener('scroll', () => {
   updateDashOffset();

   if (getTop() > offset) {
      scrollUp.classList.add('scroll-up--active')
   } else {
      scrollUp.classList.remove('scroll-up--active')
   }
});

//click
scrollUp.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});


//Filling Numbers
var number = document.querySelector('.number'),
   numberTop = number.getBoundingClientRect().top,
   start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
   if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function () {
         number.innerHTML = ++start;
         if (start == end) {
            clearInterval(interval);
         }
      }, 5);
   }
});


//First
var number1 = document.querySelector('.number1'),
   number1Top = number1.getBoundingClientRect().top,
   start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
   if (window.pageYOffset > number1Top - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      var interval1 = setInterval(function () {
         number1.innerHTML = ++start1;
         if (start1 == end1) {
            clearInterval(interval1);
         }
      }, 5);
   }
});



gsap.from('.home__img', { opacity: 0, duration: 1.2, delay: 1.6, y: 30 });
gsap.from('.nav__logo', { opacity: 0, duration: 1, delay: .3, y: 10 });
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: .6, y: 20, stagger: 0.2 });
gsap.from('.nav__btn', { opacity: 0, duration: 1, delay: 1.6, y: 20 });



//Display the Bitcoin rate
const cost = document.getElementById('cost');

axios
   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
   .then(res => {
      const way = res.data.bpi.USD.rate;

      cost.innerHTML = way;
   });

