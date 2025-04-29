const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlide = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener("click", function () {
  changeSlide("up");
});
btnDown.addEventListener("click", function () {
  changeSlide("down");
});
function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlide++;
    if (activeSlide > slidesLength - 1) {
      activeSlide = 0;
    }
  } else if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
}
