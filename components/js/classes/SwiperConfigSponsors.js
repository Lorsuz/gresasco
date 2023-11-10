const SwiperConfigSponsors = {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	mousewheel: {
		forceToAxis: true,
	},
	breakpoints: {
		740: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
};

export default SwiperConfigSponsors;