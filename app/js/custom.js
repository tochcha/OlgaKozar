$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});

// Zoom gallery
$('.zoom-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function (item) {
			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function (element) {
			return element.find('img');
		}
	}

});

$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
}); //fade-zoom

$('.popup-with-move-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
}); //fade-slide

$('.test-popup-link').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	zoom: {
		enabled: false, // By default it's false, so don't forget to enable it

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		// The "opener" function should return the element from which popup will be zoomed in
		// and to which popup will be scaled down
		// By defailt it looks for an image tag:
		opener: function (openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */





var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
		$('.header').hide();
	}

}



// слайдер отзывов
if ($('.reviews__slider').length) {
	$('.reviews__slider').slick({
		dots: false,
		infinite: false,
		arrows: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		responsive: [
			{
				breakpoint: 1524,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 300,
				settings: "unslick"
			}
		]
	});
};

// слайдер видеоотзывов (настройки тут http://kenwheeler.github.io/slick/)
if ($('.videoreviews_slider').length) {
	$('.videoreviews_slider').slick({
		dots: false,
		infinite: false,
		arrows: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		responsive: [
			{
				breakpoint: 1524,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 300,
				settings: "unslick"
			}
		]
	});
};




// плавная прокрутка вниз к якорю
/*$(".header nav ul li a").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
});*/

// меняем стрелку на гамбургер при клике на область контента
    $(".hamburger").click(function() {
		$(this).toggleClass('is-active');
		$('.header__top nav, .uni-overlay').toggleClass('active');
	});
    $(".uni-overlay").click(function() {
		$('.header__top nav, .uni-overlay').removeClass('active');
		$('.hamburger').removeClass('is-active');
	});


// тень от меню при прокрутке страницы больше чем 355px (можно делать липкий хедер)
$(window).scroll(function () {
	if ($(this).scrollTop() > 355) {
		$('.header__top').addClass('white_bg');
	} else {
		$('.header__top').removeClass('white_bg');
	}
});

// подмена картинок для Retina дисплеев
/*if ('devicePixelRatio' in window && window.devicePixelRatio == 2) {
	var img_to_replace = jQuery('img.replace-2x').get();
	for (var i = 0, l = img_to_replace.length; i < l; i++) {
		var src = img_to_replace[i].src;
		src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.png.$1');
		img_to_replace[i].src = src;
	};
}*/

// открывающаяся навигация по клику
$(function () {
	$('#indikat ul').hide();
	$('#indikat li.current ul').show();
	$('#indikat li').has('ul').bind('click', function () {
		$('#indikat li').not(this).children('ul').slideUp(200); // если не надо скрывать подменю по клику на другое, то эту строку можно закомментировать
		$(this).children('ul').slideToggle(200);
		return false;
	});
});

// Если нужно свернуть/развернуть блок с заменой текста в кнопке
$(".js-toggle").toggle(function () {
	$(this).parents('.help').find('.hidden-block').slideDown();
	$(this).text("Свернуть");
}, function () {
	$(this).parents('.help').find('.hidden-block').slideUp();
	$(this).text("Развернуть");
});

/* tabs*/
$('.tabs li a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
	return false;
});
/* tabs*/

// Если нужно при адаптации вырезать блок и вставит в другое место 
if ($(window).width() < 768) {
	$('.crop-block').detach().insertAfter($('.after-block'));
}

$('.video-popup').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:true,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});

/*$('.article p:empty').addClass('empty');*/

/*var myTag = $('.teacherslist__desc p').text();
if (myTag.length > 212) {
  var truncated = myTag.trim().substring(0, 219) + "…";
  $('.teacherslist__desc p').text(truncated);
}*/

$(".teacherslist__more span b").click(function () {
	$(this).parents('.teacherslist, .teacherslist ul li').addClass('active');
});
$(".teacherslist__more span em").click(function () {
	$(this).parents('.teacherslist, .teacherslist ul li').removeClass('active');
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".teacherslist li.active"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active'); // скрываем его
			$('.teacherslist').removeClass('active'); // скрываем его
		}
	});
});


/* анимация */
new WOW().init();
/* анимацияend */

$(window).bind('load', handler);
$(window).bind('resize', handler);
