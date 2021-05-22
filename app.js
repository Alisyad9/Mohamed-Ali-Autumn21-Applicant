const hamburgerBar = document.querySelector(
  '.header .navbar-class .nav-list .hamburger-bar'
);
const mobileBar = document.querySelector('.header .navbar-class .nav-list ul');

const header = document.querySelector('.header .container');

hamburgerBar.addEventListener('click', () => {
  hamburgerBar.classList.toggle('active');
  mobileBar.classList.toggle('active');
});

// function divideName(array) {
//   let result = array.split(' ');
//   // console.log(result);
//   // result.forEach((element) => {
//   //   result.push(element);
//   //   console.log(element);
//   // });
//   let count = 0;
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);

//     if (result[i].length > count) {
//       count = result[i].length;
//     }
//     return count;
//   }
//   console.log(count);
//   return count;
// }
// let name = [2, 'hello', 3];

// console.log('slice, splice and split');

// console.log(divideName('how are u doing'));
// console.log('asa');

// var carouselIndex = 0;
// carouselSlides();

// function carouselSlides() {
//   var carousel = document.getElementsByClassName('imageScrol');
//   for (var i = 0; i < carousel.length; i++) {
//     carousel[i].style.display = 'none';
//   }
//   carouselIndex++;
//   if (carouselIndex > carousel.length) {
//     carouselIndex = 1;
//   }
//   carousel[carouselIndex - 1].style.display = 'block';
//   setTimeout(carouselSlides, 3000);
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/////////////prompting user input

function myPrompt() {
  var person = prompt('enter name', 'for example Jimmy');
  if (person != null) {
    document.getElementById('personID').innerHTML =
      'How are you doing ' + person + '!';
  }
}
