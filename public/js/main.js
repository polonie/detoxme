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
	$('.more-button').click(function(e) {
		$(this).parent().children(':first-child').css('display', 'block');
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
			var submitbutton = $('#order-form-submit');
			submitbutton.off('click', sendOrder).removeClass('enabled').addClass('disabled').text('Полождите...');
			emailjs.send('test_email','test_email_template',{name: "James", phone: "Check that out!"})
			.then(function(response) {
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendOrder);
					$('#return-message').text('Сообщение отправлено').css('color','#45e45b').fadeIn().delay(800).fadeOut()
				}, function(err) {
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendOrder);
					$('#return-message').text('Произошла ошибка').css('color','red').fadeIn().delay(800).fadeOut()
					console.log("FAILED. error=", err);
				}
			);
		}else{
			$('#return-message').css('color', 'red').text('Пожалуйста, заполните все поля').fadeIn().delay(700).fadeOut();
		}
	};
	function sendMessage(e){
		var email = {};
		var isValid = 4;
		var contact_return_message = $('.contact-form-returned-message');
		$('.contact-form .form-input').each(function() {
			if(($.trim($(this).val())).length == 0){
				--isValid;
				return;
			};
			email[$(this).attr('name')] = $(this).val();
		});
		if (isValid < 4){
			contact_return_message.text('Пожалуйста, заполните все поля').css('color','red').fadeIn().delay(800).fadeOut();
			return;
		}else{
			console.log(email);
			var submitbutton = $('#contact-form-submit');
			submitbutton.off('click', sendMessage).removeClass('enabled').addClass('disabled').text('Полождите...');
			emailjs.send('test_email','test_email_template', email)
			.then(function(response) {
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendMessage);
					contact_return_message.text('Сообщение отправлено').css('color','#45e45b').fadeIn().delay(800).fadeOut()
				}, function(err) {
					submitbutton.removeClass('disabled').addClass('enabled').text('Отправить').on('click', sendMessage);
					contact_return_message.text('Произошла ошибка').css('color','red').fadeIn().delay(800).fadeOut()
					console.log("FAILED. error=", err);
				}
			);
		}
	};
	$('#order-form-submit').on('click', sendOrder);
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