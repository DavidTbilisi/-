var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth; // SLIDER WIDTH
var sliderHeight = slider.offsetHeight; // SLIDER HEIGHT
var slides = document.querySelectorAll('#slider li');
var allSlidesWidth = sliderWidth * slides.length; // ALL SLIDES SIZE
var ul = document.querySelector('#slider ul');
ul.style.width = allSlidesWidth;
var count = 0;
var one = 0;

// BULLETS WRAP
var bulletsWrap = document.createElement('div');
bulletsWrap.classList.add('bullets-wrap');
slider.appendChild(bulletsWrap);
bulletsWrap.style.position = 'absolute';
bulletsWrap.style.bottom = '20px';
bulletsWrap.style.left = '50%';
bulletsWrap.style.transform = 'translate(-50%, 0)';

for (var i = 0; i < slides.length; i++) {
	slides[i].style.width = sliderWidth + 'px';
	slides[i].style.height = sliderHeight + 'px';
	
	// BULLETS
	var bullets = document.createElement('div');
	bulletsWrap.appendChild(bullets)
	bullets.style.width = '15px';
	bullets.style.height = '15px';
	bullets.style.backgroundColor = '#fff';
	bullets.style.zIndex = '3';
	bullets.style.display = 'inline-block';
	bullets.style.cursor = 'pointer';
	bullets.style.borderRadius = "100%";
	bullets.style.margin = "0 2.5px 0 2.5px";
	bullets.style.opacity = ".6";
	
	bullets.id = one++;
	bullets.addEventListener('click', dotFunc);
}

var dots = document.querySelectorAll('.bullets-wrap div');
dots[0].style.opacity = '.9';

// FUNCTION FOR DOTS / BULLETS
function someFunc(some) {
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.opacity = ".5";
	}
	dots[some].style.opacity = '.85';
}

// TEXT VARIABLES
var text = document.querySelectorAll('#slider p');
text[0].classList.add('displayed');

// TEXT FUNCTION
function textFunc(textDisplay) {	
	for (var i = 0; i < text.length; i++) {
		text[i].classList.remove('displayed');
		text[textDisplay].classList.add('displayed');
	}
}

// CLICK FUNCTION FOR BULLETS
function dotFunc(some) {
	some = this.id;
	ul.style.left = '-' + some * sliderWidth + 'px'; 
	count = some;
	someFunc(some);
	textFunc(some)
}

// CREATE ARROWS
var arrowWrap = document.createElement('div');
arrowWrap.classList.add('arrow-wrap');
slider.appendChild(arrowWrap);

var left = document.createElement('div');
left.classList.add('left-arrow');
arrowWrap.appendChild(left);

var right = document.createElement('div');
right.classList.add('right-arrow');
arrowWrap.appendChild(right);

// ARROWS FUNCTIONS
left.addEventListener('click', leftFunc); // LEFT ARR
right.addEventListener('click', function() { // RIGHT ARR
	rightFunc();
});

function leftFunc() {
	count--;
	if (count === -1) {
		count = slides.length - 1;
	}
	ul.style.left = '-' + sliderWidth * count + 'px';
	someFunc(count);
	textFunc(count); // FUNCTION FOR DISPLAY THE TEXT
}
function rightFunc() {
	count++;
	if (count === slides.length) {
		count = 0;
	}
	ul.style.left = '-' + sliderWidth * count + 'px';
	someFunc(count); // FUNCTION FOR BULLETS / dots
	textFunc(count); // FUNCTION FOR DISPLAY THE TEXT
}























