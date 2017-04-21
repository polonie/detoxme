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
	function sendOrder(e){
		var val1 = $.trim($('#order-form-input-name').val()).length;
		var val2 = $.trim($('#order-form-input-phone').val()).length;
		if (val1 > 0 && val2 > 0){
			var submitbutton = $('#brief-form-submit');
			submitbutton.off('click', senOrder).removeClass('enabled').addClass('disabled').text('Полождите...');
			emailjs.send('test_email','test_email_template',{name: "James", phone: "Check that out!"})
			.then(function(response) {
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendOrder);
					$('#return-message').text('Сообщение отправлено').css('color','#45e45b').fadeIn().delay(700).fadeOut()
				}, function(err) {
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendOrder);
					$('#return-message').text('Произошла ошибка').css('color','red').fadeIn().delay(700).fadeOut()
					console.log("FAILED. error=", err);
				}
			);
		}else{
			$('#return-message').css('color', 'red').text('Пожалуйста, заполните все поля').fadeIn().delay(700).fadeOut();
		}
	};
	function sendOrder(e){
		var val1 = $.trim($('#order-form-input-name').val()).length;
		var val2 = $.trim($('#order-form-input-phone').val()).length;
		var val2 = $.trim($('#order-form-input-phone').val()).length;
		var val2 = $.trim($('#order-form-input-phone').val()).length;
		if (val1 > 0 && val2 > 0){
			var submitbutton = $('#brief-form-submit');
			submitbutton.off('click', senOrder).removeClass('enabled').addClass('disabled').text('Полождите...');
			emailjs.send('test_email','test_email_template',{name: "James", phone: "Check that out!"})
			.then(function(response) {
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendOrder);
					$('#return-message').text('Сообщение отправлено').css('color','#45e45b').fadeIn().delay(700).fadeOut()
				}, function(err) {
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendOrder);
					$('#return-message').text('Произошла ошибка').css('color','red').fadeIn().delay(700).fadeOut()
					console.log("FAILED. error=", err);
				}
			);
		}else{
			$('#return-message').css('color', 'red').text('Пожалуйста, заполните все поля').fadeIn().delay(700).fadeOut();
		}
	};
	$('#brief-form-submit').on('click', sendOrder);
	$('#contact-form-submit').on('click', sendMessage);
	$('.popup-window-close-button').click(function(e) {
		$('.hover-block').css("display", "none").css('opacity', '0');
			$('.popup-window').animate({top: "-=100px"})
	});
	var targetPosition = $('#nav-menu').offset().top;
	function navmenu(e) {
		var scrollPosition = $(this).scrollTop();
		if(scrollPosition > targetPosition){
			$('#nav-menu').addClass('fixed-nav');
		}
		if(scrollPosition < targetPosition){
			$('#nav-menu').removeClass('fixed-nav');
		}
	};
	$(window).on('scroll', navmenu);
	$(window).resize(function(e) {
		var scrollPosition = $(this).scrollTop();
		if (($(this).width()) < 768){
			$(this).off('scroll', navmenu);
			$('#nav-menu').removeClass('fixed-nav');
		}else{
			$(this).on('scroll', navmenu);
			if(scrollPosition > targetPosition){
				$('#nav-menu').addClass('fixed-nav');
			}
		}
	});
});