(function ($) {
	$(document).ready(function () {
	    $("input[type=tel]").mask("+7 (999) 999-9999");
		if(window.anim) window.anim = 0;
		activateGradientText(true);
		activatePopup(true);
		//$(window).on('scroll', activateAnimate);
		new WOW().init();
		activateForms();
		activateScroll();
		actInstafeed()

		$('#logotype').on('click', function () {
			document.location.href = '/';
		});
	/*	if( window.innerWidth >= 769 ) {
			var s = skrollr.init();
		} */
		
	});
	
	function actInstafeed() {
// 	  var feed = new Instafeed({
//           get: 'user',
//           userId: '4314011740',
//           accessToken: '4314011740.1677ed0.f7e13291aba54608be66f13e344f22a7', 
//           template: '<div class="instimg"><img  style="max-width:400px" src="{{image}}" /></div>',
//     	resolution:'standard_resolution',
//     	after: afterLoad
//       });
//       feed.run();
        // function afterLoad() {
        	$('#instafeed').slick({
        	  dots: false,
            arrows: false,
            infinite: true,
            speed: 4500,
            cssEase: 'ease-out',
            autoplay: true,
            swipe: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: true,
            /*centerMode: true,*/
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 2
                    }
                }
            ]
        	});
        // }
	}

	function activateForms() {
		$('form').on('submit', function (e) {
			e.preventDefault();
			
			if( $(this).find('[type="tel"]').val() == '' ) {
              alert('Вы не ввели Ваш телефон');
              return false;
            }
            $(this).find('[type=submit]').attr('disabled','');
            $.ajax({
				data:$(this).serialize(),
				url:'mail.php',
				type:'post',
				success: function(res) {
					if( res == 'true' ) {
					    yaCounter46240014.reachGoal('order');
						$.magnificPopup.close();
						$.magnificPopup.open({
						  items: {
						    src: '#sp'
						  },
						  type: 'inline'

						  // You may add options here, they're exactly the same as for $.fn.magnificPopup call
						  // Note that some settings that rely on click event (like disableOn or midClick) will not work here
						}, 0);
						$(this)[0].reset();
						$(this).find('[type=submit]').removeAttr('disabled','');
					}

					if( res == 'false' ) {
						alert('Произошла ошибка, свяжитесь с менеджером');
					}
					
				},
				error: function () {
					$.magnificPopup.close();

					alert('Произошла ошибка, свяжитесь с менеджером');
				}
			})
		})
	}

	function activateAnimate2() {
		if(!document.getElementById('udivlenie')) return false;
		if( window.innerWidth <= 769 ) return false;
		var bLine = document.documentElement.scrollTop + window.innerHeight,
			topBlock = document.getElementById('udivlenie').offsetTop,
			botBlock = document.getElementById('udivlenie').offsetTop + document.getElementById('udivlenie').clientHeight,
			maxHeight = document.getElementById('udivlenie').clientHeight-300;
		if( bLine >= topBlock ) {
			if( (bLine-botBlock) < 0 ) {
				var percent = (bLine - topBlock) / maxHeight;
				console.log(percent)
				animations2(percent);
			}
			
			
		} else {
			return false;
		}
	}

	function animations2(aarg) {
		if(aarg >= 1 ) aarg = 1;
		var dataEnd = [
			'0',   //0
			'50',  //1
			'105', //2
			'101', //3
			'146', //4
			'128', //5
			'146', //6
			'227', //7
			'240', //8
			'265', //9
			'386'  //10
		];
		var dataStart = 1000;
		$('.udivlenie__anim--img').each(function (i) {
			var q1 = i / 10;
			if(aarg >= 1 ) {
				q2 = 1;
			} else {
				q2 = aarg-q1;
			}
			$(this).css({
				opacity: 1 * aarg,
				bottom: 1000 - ((dataStart - dataEnd[i] ) * (aarg) )
			})
		});


	}

	function activateAnimate() {
		if(!document.getElementById('udivlenie')) return false;
		if( window.innerWidth <= 769 ) return false;
		var hmonitor = window.innerHeight;
		if( (document.documentElement.scrollTop+hmonitor) >=  (document.getElementById('udivlenie').offsetTop + document.getElementById('udivlenie').clientHeight -500) ) {
			animations();
		}
	}

	function animations() {

		var dataEnd = [
			'0',
			'50',
			'105',
			'101',
			'146',
			'128',
			'146',
			'227',
			'240',
			'265',
			'386'
		]

		$('.udivlenie__anim--img').each(function (i) {
			$(this).delay((i++) * 500).animate({
				opacity: 1,
				bottom: dataEnd[i-1]+'px'
			},{
				duration: 900,
				easing: "easeInCubic"
			});
		});
		$(window).off('scroll', activateAnimate);

	}

	function activatePopup(knock) {
		if(!knock) return false;
		$('.dohodnost--btn').magnificPopup();
		var ButtonText = [
			{
				title: 'Заказать звонок',
				descr: 'Закажите звонок и получите бесплатную консультацию по франшизе',
				button: 'Заказать звонок',
				form: "Заказ звонка"
			},
			{
				title: 'Получите презентацию Фарншизы Wonderbeat!',
				descr: 'Оставьте контактные данные<br>и мы вышлем Вам на почту презентацию франшизы!',
				button: 'получить презентацию',
				form: 'Получение презентации',
				email: 1
			},
			{
				title: 'Получить требования к помещению',
				descr: 'Заполните поля контактов<br>и мы отправим Вам по почте требования к помещению',
				button: 'Узнать требования',
				form: 'Получить требования к помещению',
				email: 2
			},
			{
				title: 'Провести аудит',
				descr: 'Оставьте свои контакты<br>и мы свяжемся с Вами для проведения аудита Вашего ресторана',
				button: 'Хочу аудит!',
				form: 'Провести аудит'
			},
			{
				title: 'Расчет рентабельности',
				descr: 'Закажите расчет рентабельности открытия франшизы!',
				button: 'Получить расчет!',
				form: 'Расчет рентабельности',
				email: 3
			},
			{
				title: 'Хотите стать партнером франшизы Wonderbeat? ',
				descr: 'Заполните поля контактов<br>и мы свяжемся с Вами в ближайшее время!',
				button: 'стать партнером',
				form: 'Хотите стать партнером франшизы Wonderbeat?'
			},
			{
				title: 'Посмотреть все проекты',
				descr: 'Оставьте свои контакты<br>и мы вышлем Вам реализованные проекты!',
				button: 'Посмотреть проекты',
				form: 'Посмотреть все проекты',
				email: 4
			},
			{
				title: 'Мы проведем аудит Вашего ресторана',
				descr: 'Оставьте свои контакты<br>и мы свяжемся с Вами в ближайшее время!',
				button: 'Провести аудит',
				form: 'аудит Вашего ресторана',
				email: 5
			},
			{
				title: 'Пора узнать правду',
				descr: 'Оставьте свои контакты<br>и мы свяжемся с Вами в ближайшее время!',
				button: 'Оценить эффективность',
				form: 'Посмотреть все проекты',
				email: 6
			},
			
		];
		$('.bttn').magnificPopup({
			callbacks: {
				elementParse: function(item) {
					$(item.src).find('[type=submit]').removeAttr('disabled','');
					$(item.src).find('form')[0].reset();
					var index = item.el.data('text');
					if( index ) {
						$('#modal_form').val(ButtonText[index].form);
						$('#modal_title').html(ButtonText[index].title);
						$('#modal_descr').html(ButtonText[index].descr);
						$('#modal_button').html(ButtonText[index].button);
						if( ButtonText[index].email ) {
							$('#modal_send').val(ButtonText[index].email);
							$('#modal_name').after($('<input type="email" id=modal_email name=email class="modal_content__body--input all-input" placeholder="Email...">'));
						} else {
							$('#modal_send').val('0');
							if( $('#modal_email') ) {
								$('#modal_email').remove();
							}
						}

					} else {
						$('#modal_form').val(ButtonText[index].form);
						$('#modal_title').html(ButtonText[index].title);
						$('#modal_descr').html(ButtonText[index].descr);
						$('#modal_button').html(ButtonText[index].button);
					}
				},
				close: function() {
				    $('#modal_send').val('0');
					if( $('#modal_email') ) {
						$('#modal_email').remove();
					}
				}
			}
		})
	}

	function activateGradientText(knock) {
		if(!knock) return false;
		$('.udivlenie--top, .udivlenie--bot').gradientText({
			colors: ['#09e7bd', '#00ffff']
		})
	}

	function activateScroll() {
		jQuery("a.scrollto").click(function () {
			elementClick = jQuery(this).attr("href")
			destination = $(elementClick).offset().top -0;
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
			return false;
		});
	}
})(jQuery)