$(document).ready(function(){
	$('.wrapper').slick({
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		speed: 1000
	});
});

new Swiper(".kamin", {
	// Стрелки
	navigation: {
		nextEl: ".s-button-next",
		prevEl: ".s-button-prev",
	},

	slidesPerView: 3,
	spaceBetween: 120,
	loop: true,
	touchRatio: 1
});