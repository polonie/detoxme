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
	function sendEmail(e){
		console.log('done');
		$(this).off('click', sendEmail);
		$(this).removeClass('enabled').addClass('disabled').text('Полождите...');
		emailjs.send('test_email','test_email_template',{name: "James", phone: "Check that out!"})
		.then(function(response) {
				var submitbutton = $('#brief-form-submit');
				console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
				submitbutton.removeClass('disabled').addClass('enabled').text('Отправить');
				$('#return-message').css('color','#45e45b').fadeIn().delay(700).fadeOut()
				submitbutton.on('click', sendEmail);
			}, function(err) {
				console.log("FAILED. error=", err);
			}
		);
	};
	$('#brief-form-submit').on('click', sendEmail);
	$('.popup-window-close-button').click(function(e) {
		$('.hover-block').css("display", "none").css('opacity', '0');
			$('.popup-window').animate({top: "-=100px"})
	});
	var targetPosition = $('#nav-menu').offset().top;
	$(window).scroll(function(e) {
		var scrollPosition = $(this).scrollTop();
		if(scrollPosition > targetPosition){
			$('#nav-menu').addClass('fixed-nav');
		}
		if(scrollPosition < targetPosition){
			$('#nav-menu').removeClass('fixed-nav');
		}
	});
});