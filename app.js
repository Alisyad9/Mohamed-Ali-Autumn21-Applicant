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
const myInterval = setInterval(next, 1000); // Change image every 1 seconds

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
    ).innerHTML = `How are you doing ${personName}`;
    personName.style.color = 'red';
  }
};
