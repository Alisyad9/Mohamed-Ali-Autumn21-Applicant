const hamburgerBar = document.querySelector(
  '.header .navbar-class .nav-list .hamburger-bar'
);
const mobileBar = document.querySelector('.header .navbar-class .nav-list ul');

const header = document.querySelector('.header .container');

hamburgerBar.addEventListener('click', () => {
  hamburgerBar.classList.toggle('active');
  mobileBar.classList.toggle('active');
});

// carousel

let carouselIndex = 0;
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const carouselArray = [
  {imageSource: './images/flower.jpg', carouselText: 'flower'},
  {imageSource: './images/Lemon.jpg', carouselText: 'lemon'},
  {imageSource: './images/pear.jpg', carouselText: 'pear'},
];

// this function calls next slide
const next = () => {
  if (carouselIndex === carouselArray.length - 1) {
    // setting index to -1 so that next time when we click next we are incrementing carousalIndex to 0 and this will show the first element of the carouselArray.
    carouselIndex = -1;
  }
  carouselIndex++;
  const nextImageSource = carouselArray[carouselIndex].imageSource;

  const getCarouselText = carouselArray[carouselIndex].carouselText;

  document.querySelector('.mycarousel .carouselText').innerHTML =
    getCarouselText;

  document.querySelector('.mycarousel img').src = nextImageSource;
  console.log('next ', carouselIndex);
  setTimeout(next, 5000); // Change image every 2 seconds

  // console.log(carouselArray.length);

  // carouselArray[carouselIndex];
};

nextButton.addEventListener('click', next);

// this function calls back on the privous slide

const back = () => {
  if (carouselIndex === 0) {
    carouselIndex = carouselArray.length;
  }

  carouselIndex--;
  const nextImageSource = carouselArray[carouselIndex].imageSource;

  const getCarouselText = carouselArray[carouselIndex].carouselText;

  document.querySelector('.mycarousel .carouselText').innerHTML =
    getCarouselText;

  document.querySelector('.mycarousel img').src = nextImageSource;
  console.log('back ', carouselIndex);
};
previousButton.addEventListener('click', back);

// const showCarousel = () => {
//   let slides = document.getElementsByClassName('mycarousel');

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   carouselIndex++;
//   if (carouselIndex > slides.length) {
//     carouselIndex = 1;
//   }

//   slides[carouselIndex - 1].style.display = 'block';

//   // setTimeout(showCarousel, 2000); // Change image every 2 seconds
// };
// showCarousel();
// End carousel

/////////////prompting user input

function myPrompt() {
  let person = prompt('enter name', 'for example Jimmy');
  if (person != null) {
    document.getElementById('personID').innerHTML =
      'How are you doing ' + person + '!';
  }
}
const greetingIteration = document.querySelector('#personID');

document.getElementById('personID').style.color = 'blue';
