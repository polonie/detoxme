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
	var mouse_in = function(e) {
		$(this).parent().children('.plan-block-body-item-hover').fadeIn(200);
	};
	var mouse_out = function(e) {
		$(this).fadeOut(200);
	}
	$('.more-button').mouseover(mouse_in);
	$('.plan-block-body-item-hover').mouseout(mouse_out);



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

	function sendMessage(e){
		var self = $(this);
		console.log(self);
		if (e.target.matches('.submit-button') ){
			var submitbutton = self.find('.submit-button');
			var email = {};
			var inputs = self.find('.form-input');
			var isValid = inputs.length;
			console.log(isValid);
			var filled = isValid;
			var message = self.children('.form-message');
			inputs.each(function() {
				if(($.trim($(this).val())).length == 0){
					--filled;
					return;
				};
				email[$(this).attr('name')] = $(this).val();
			});
			if (filled < isValid){
				message.text('Пожалуйста, заполните все поля').css('color','red').fadeIn().delay(800).fadeOut();
				return;
			}else{
				console.log(email);
				self.off('click', sendMessage)
				submitbutton.removeClass('enabled').addClass('disabled').text('Полождите...');
				emailjs.send('test_email','test_email_template', email)
				.then(function(response) {
						console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
						submitbutton.removeClass('disabled').addClass('enabled').text('Отправить')
						message.text('Сообщение отправлено').css('color','#45e45b').fadeIn().delay(800).fadeOut()
						self.on('click', sendMessage);
					}, function(err) {
						submitbutton.removeClass('disabled').addClass('enabled').text('Отправить')
						self.on('click', sendMessage);
						message.text('Произошла ошибка').css('color','red').fadeIn().delay(800).fadeOut()
						console.log("FAILED. error=", err);
					}
				);
			}
		}
	};
	$('.form').on('click', sendMessage);
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