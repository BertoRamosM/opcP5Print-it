const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag-line");

let currentIndex = 0;

/*ARROW FUNCTIONALITY*/
 const rightArrow = document.querySelector(".arrow_right");
 const leftArrow = document.querySelector(".arrow_left");

 rightArrow.addEventListener('click', function(){
		changeSlideRight();
 });

 leftArrow.addEventListener("click", function(){
	changeSlideLeft();
 })

 function changeSlideRight() {
	if (currentIndex < slides.length - 1) {
	  currentIndex++;
	} else {
	  currentIndex = 0;
	}
	bannerImg.src = slides[currentIndex].image;
	tagLine.innerHTML = slides[currentIndex].tagLine;
	toggleBullet();
  }
  

  function changeSlideLeft() {
	if (currentIndex > 0) {
	  currentIndex--;
	} else {
	  currentIndex = slides.length -1 ;
	}
	bannerImg.src = slides[currentIndex].image;
	tagLine.innerHTML = slides[currentIndex].tagLine;
	toggleBullet();
  }


 /*BULLET POINTS*/
 	const dotsList = document.querySelector(".dots");
	const dotElements = dotsList.getElementsByTagName("li");


function toggleBullet(){	
	for (let i = 0; i < dotElements.length; i++) {
	  dotElements[i].classList.remove("dot_selected");
	}
  
	const currentDot = document.getElementById("dot" + (currentIndex + 1));
	currentDot.classList.add("dot_selected");
}