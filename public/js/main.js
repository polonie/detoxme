$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		arrows:false,
		autoplaySpeed: 2500,
		pauseOnFouc: false,
		pauseOnHover:false,
		accessibility: false,
		draggable:false
	});
	$('.insta-block-slider-content').slick({
		autoplay: true,
		arrows:false,
		autoplaySpeed: 2500,
		pauseOnFouc: false,
		pauseOnHover:false,
		accessibility: false,
		draggable:false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});
	$('.nav-link').click(function(e){
		e.preventDefault();
		var linkHref = $(this).attr('href');
		console.log(linkHref);
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 500);
	});
	$('.order-button').click(function(e) {
		$('.hover-block').css("display", "block")
			.animate({opacity: "1"}, 300);
			$('.popup-window').animate({top: "+=100px"}, 300);
	});
	$('.brief-form').submit(function(e) {
		e.preventDefault();
	});
	$('.popup-window-close-button').click(function(e) {
		$('.hover-block').css("display", "none")
			.animate({opacity: "0"});
			$('.popup-window').animate({top: "-=100px"})
	});
	var rightHeight = $('.about-us-block-body-right').css('height');
	$('.about-us-block-body-left').css('height', rightHeight).css('overflow', 'hidden');
});