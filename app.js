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
const pauseButton = document.querySelector('.pause');

// const playbutton = document.querySelector('.play');

const carouselArray = [
  {imageSource: './images/spring.jpg', carouselText: 'Spring'},
  {imageSource: './images/swans.jpg', carouselText: 'Swans'},
  {imageSource: './images/palace.jpg', carouselText: 'Palace'},
  {imageSource: './images/dessert1080.jpg', carouselText: 'Dessert'},
  {imageSource: './images/Sunset.jpg', carouselText: 'Sunset'},
  {imageSource: './images/night.jpg', carouselText: 'Night-park'},
  {imageSource: './images/mimi.jpg', carouselText: 'Mimi'},
  {imageSource: './images/lightshow.jpg', carouselText: 'Light-show'},
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
  //assigning to the class of my carousel
  document.querySelector('.mycarousel img').src = nextImageSource;
  console.log('next ', carouselIndex);

  document.querySelector('.mycarousel .carouselText').innerHTML =
    getCarouselText;

  // console.log(carouselArray.length);

  // carouselArray[carouselIndex];
};

nextButton.addEventListener('click', next);
//interval const variable

const myInterval = setInterval(next, 3000); // Change image every 3 seconds
// const startMyInterval = () => {
//   setInterval(next, 3000);

//   console.log('function: start interval');
// };
// playbutton.addEventListener('click', startMyInterval);

//Stop my interval method

const stopMyInterval = () => {
  clearInterval(myInterval);

  console.log('function: stop interval');
};
pauseButton.addEventListener('click', stopMyInterval);

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
  // setTimeout(back, 5000); // Change image every 5 seconds
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
const myPrompt = () => {
  let personName = prompt('Enter Name', 'for example Jimmy');

  if (personName != null) {
    document.getElementById(
      'personID'
    ).innerHTML = `Thank you ${personName}! for reading through my website`;
  }
};
