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
});