const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		if (_this.btnToggleMenuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {

					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});
					_this.menuMobile.classList.toggle("active");
					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},

	closeMenu() {
		let _this = this;
		if (_this.menuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");

			});
			_this.menuMobile.classList.remove("active");
			_this.body.classList.remove("fixed");
		}

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;
		if (_this.menuMobileLink) {

			_this.toggleMenu();
			_this.menuMobileLink.forEach(function (element) {
				element.addEventListener('click', function (e) {
					console.log(element);
					_this.closeMenu();

				});
			})
			document.addEventListener('mouseup', function (event) {
				let container = event.target.closest(".menu-mobile--js.active"); // (1)
				if (!container) {
					_this.closeMenu();

				}
			});
		}
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	// objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	// svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	// JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил

	}
	if (window.matchMedia("(min-width: 992px)").matches) {
		$(".main-categories-wrap:first-child, .main-nav__nav ul:first-child li:first-child").addClass('active')

	}
	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		lazy: {
			loadPrevNext: true,
		},


	}
	const swiper4 = new Swiper('.color-slider', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true,
		watchOverflow: true,
		slidesPerGroup: 3,

		// centeredSlides: true,
		loop: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	const swiper1 = new Swiper('.sSlider-action--js', {
		...defaultSl,
		slidesPerView: 1,
		// slidesPerGroup: 1,
		loop: true,
		spaceBetween: 5,
		
		breakpoints: {
			768: {
				spaceBetween: 50,
			},
			1200: {
				spaceBetween: 93,
			}
		},

	});

	const swiper5 = new Swiper('.seasonsSlider-js', {
		...defaultSl,
		// slidesPerGroup: 1,
		loop: false,
		spaceBetween: 30,
		slidesPerView: 1,


		breakpoints: {
			768: {
				spaceBetween: 47,
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		},

	});
	// modal window


	//timer
	function tikTak(parentQselector) {
		//html elements
		let parents = document.querySelectorAll(parentQselector);
		if (parents.length === 0) return
		for (let parent of parents){

			let days = parent.querySelector('.days');
			let hours = parent.querySelector('.hours');
			let minutes = parent.querySelector('.minutes');
			let seconds = parent.querySelector('.seconds');

			//date elements
			let now = new Date();

			// d === days.innerHtml + now.getDate... others the same way
			let d = getTime(days, now.getDate());
			let h = getTime(hours, now.getHours());
			let m = getTime(minutes, now.getMinutes());
			let s = getTime(seconds, now.getSeconds());

			let targetDate = new Date(now.getFullYear(), now.getMonth(), d, h, m, s);

			//interval
			tikTakReadOut(parent, targetDate, ThisReadOutID, days, hours, minutes, seconds);
			let ThisReadOutID = window.setInterval(tikTakReadOut.bind(null, parent, targetDate, ThisReadOutID, days, hours, minutes, seconds), 1000);
		}
	}
	tikTak('.timer-box-js');
	//additional funcs to tikTak

	function tikTakReadOut(parent, targetDate, ReadOutID, days, hours, minutes, seconds) {
		let now = new Date();
		let timeLeft = (targetDate - now) / 1000;

		if (timeLeft < 1) {
			window.clearInterval(ReadOutID);
			//to do something after timer ends
			$(parent).fadeOut();
		}

		days.innerHTML = Math.floor(timeLeft / 60 / 60 / 24);
		timeLeft = ((timeLeft / 60 / 60 / 24) - Math.floor(timeLeft / 60 / 60 / 24)) * 60 * 60 * 24;

		hours.innerHTML = Math.floor(timeLeft / 60 / 60);
		timeLeft = ((timeLeft / 60 / 60) - Math.floor(timeLeft / 60 / 60)) * 60 * 60;

		minutes.innerHTML = Math.floor((timeLeft / 60));
		timeLeft = ((timeLeft / 60) - Math.floor((timeLeft / 60))) * 60;

		seconds.innerHTML = Math.floor(timeLeft);
	}

	function getTime(htmlEl, currentTimeItem) {
		let timeItem = Number(htmlEl.innerHTML);
		if (timeItem) {
			timeItem += currentTimeItem;
		}
		else {
			timeItem = currentTimeItem;
		}
		return timeItem
	}


	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 20,
		slidesPerView: 'auto',
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var galleryTop = new Swiper('.gallery-top', {
		...defaultSl,
		spaceBetween: 20,
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	$(".catalogItem").hover(function () {
		// $(this).toggleClass('active');
		$(this).find(".catalogItem__hiddenBlock").fadeToggle();
		// $(this).find(".catalogItem__hiddenBlock").slideToggle();
	});

	var galleryTop2 = new Swiper('.sLogos__slider--js', {
		...defaultSl,
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {

			1200: {
				freeMode: false,
				spaceBetween: 34,
				watchSlidesVisibility: false,
				watchSlidesProgress: false,
				slidesPerView: 6,
				// slidesOffsetBefore: -80,
				// slidesOffsetAfter: -80,
			}
		}

	});

	$('.sWeAreDifferent-btn-js').click(function(){
		$('.sWeAreDifferent-hiddenBlock-js').slideToggle();
	})

	$('.footer-input-js').click(function(){
		$('.form-wrap__enter').addClass('d-block');
	})

 

	$(".main-nav [data-tab] a").hover(function () {
		var dataTab = $(this).parent().data('tab');

		$('[data-tab]').removeClass('active');
		$(this).parent().addClass('active').siblings().removeClass('active');
		$(dataTab).addClass('active').siblings().removeClass('active');
		return false;
	})

	$(".main-nav [data-tab]").click(function () {
		var dataTab = $(this).data('tab');

		$('[data-tab]').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$(dataTab).addClass('active').siblings().removeClass('active');
		return false;
	})

	$(".toggle-main-menu--js:not(.on) ").click(function () {
			$('.toggle-main-menu--js').addClass('on');
			$(".main-nav").show();
			$("body").addClass('fixed')
	})

	$(" .toggle-menu-mobile--js").click(function () {
		$('.toggle-main-menu--js').toggleClass('on');
		$(".main-nav").toggle();
		$("body").toggleClass('fixed')
	})



	$(".toggle-menu-mobile--inner-js").click(function () {
		$(this).parents(".main-categories-wrap").removeClass('active');
		// $(".main-nav").toggle();
	})


	$(document).mouseup(function (e) {
		var container = $(".main-nav");
		if (container.has(e.target).length === 0 || $(".top-nav").has(e.target).length === 0) {
			container.hide();
			$("body, html").removeClass("fixed");
			$(".toggle-main-menu--js").removeClass("on");
		}
	});
	//luckyone JS

	//02 prod card

	//breadcrumbs
	let breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		//spaceBetween: 28,
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true,
	});

	//prodSlider
	let prodCardThumb = new Swiper('.prod-card-thumb-js', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		//loop: true,
	});

	let prodCard = new Swiper('.prod-card-slider-js', {
		//thumbs
		slidesPerView: 'auto',
		thumbs: {
			swiper: prodCardThumb
		},
		lazy: {
			loadPrevNext: true,
		},
		loop: true,
	});
	//tabs slider

	let ProdPageTabs = new Swiper('.prod-card-tabs-js', {
		slidesPerView: 'auto',
		breakpoints: {
			1200: {
				spaceBetween: 51,
			},
			996: {
				spaceBetween: 28,
			},
			768: {
				spaceBetween: 28,
			},
			320: {
				spaceBetween: 32,
			},
		},

		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true,
	});

	//timer
	//tikTak('.prod-timer-box-js');

	//02 select
	$('.custom-select2').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "drop-down-full-blue",
	});
	$('.custom-select2-margined').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "drop-down-margined",
	});

	//02 toggle pills
	$('.prod-nav-header-js').click(function () {
		$(this).toggleClass('active');
		$(this.parentElement).find('.prod-nav-content-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	});

	//02 +- btns
	//
	let ProdAmountInp = document.querySelector('.prod-amount-inp-js');
	$('.form-wrap__add-control-btn').click(function (){
		if (!ProdAmountInp) return

		if (this.classList.contains('minus-btn')){
			if (Number(ProdAmountInp.value) <= 1) return;
			ProdAmountInp.value = Number(ProdAmountInp.value) - 1;
		}
		else{
			if (Number(ProdAmountInp.value) >= 999) return;
			ProdAmountInp.value = Number(ProdAmountInp.value) + 1;
		}
	});


	//blue strip
	let ProdAmountInpFixed = document.querySelector('.prod-amount-inp-js-fixed');
	$('.form-wrap__add-control-btn-fixed').click(function (){
		if (!ProdAmountInpFixed) return

		if (this.classList.contains('minus-btn')){
			if (Number(ProdAmountInpFixed.value) <= 1) return;
			ProdAmountInpFixed.value = Number(ProdAmountInpFixed.value) - 1;
		}
		else{
			if (Number(ProdAmountInpFixed.value) >= 999) return;
			ProdAmountInpFixed.value = Number(ProdAmountInpFixed.value) + 1;
		}
	});

	//to use
	//1 add mixin to page
	//2 add class '.red-hook-js' to element,  scroll over/above of which will show/hide red str

	function redBottomStip(){
		let fixedStrip = document.querySelector('.bottom-fixed-strip');
		if(!fixedStrip) return

		let fixedHook = document.querySelector('.fixed-hook-js');
		if(!fixedHook) return

		window.addEventListener("scroll", toggleFixedStrip.bind(undefined, fixedHook, fixedStrip), {passive:  true});
	}
	redBottomStip();

	function toggleFixedStrip(fixedHook, fixedStrip){
		let hookTop = $(fixedHook)[0].getBoundingClientRect().top + $(window)['scrollTop']();
		let hookHeight = fixedHook.offsetHeight;
		let hookBot = hookTop + hookHeight;

		let footerTop = $('.footer')[0].getBoundingClientRect().top + $(window)['scrollTop']();
		let windowHeight = calcVh(100);

		if (hookBot > window.scrollY || (footerTop - windowHeight) < window.scrollY){
			$(fixedStrip).removeClass('active');
		}
		else {
			$(fixedStrip).addClass('active');
		}
	}

	function calcVh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (v * h) / 100;
	}

	//sticky
	let sticky = new Sticky('.sticky-js');
	console.log(sticky);

	//related sliders
	$('.sRelatedProducts__slider').each(function () {
		let relatedSlider = new Swiper($(this).find('.related-slider-js'), {
			slidesPerView: 'auto',
			spaceBetween: 24,
			loop: true,
			//
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 3,
			},
			//
			breakpoints: {
				768: {
					spaceBetween: 24,
				},
			},

			navigation: {
				nextEl: $(this).find('.next-related-js'),
				prevEl: $(this).find('.prev-related-js'),
			},
		});
	});

	//end luckyone JS
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
