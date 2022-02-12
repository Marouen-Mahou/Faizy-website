$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 100) {
		$(".fixed-top").addClass("bg-header");
	} else {
		$(".fixed-top").removeClass("bg-header");
	}
});

AOS.init();

// $('#designs').owlCarousel({
// 	loop: true,
// 	margin: 30,
// 	nav: true,
// 	responsive: {
// 		0: {
// 			items: 2
// 		},
// 		575: {
// 			items: 3
// 		}
// 	}
// })

// $('#websites').owlCarousel({
// 	loop: true,
// 	margin: 30,
// 	nav: true,
// 	responsive: {
// 		0: {
// 			items: 2
// 		},
// 		575: {
// 			items: 3
// 		}
// 	}
// })

// $('#video').owlCarousel({
// 	loop: true,
// 	margin: 30,
// 	nav: true,
// 	responsive: {
// 		0: {
// 			items: 2
// 		},
// 		575: {
// 			items: 3
// 		}
// 	}
// })

$('.js-anchor-link').click(function (e) {
	e.preventDefault();
	var target = $($(this).attr('href'));
	if (target.length) {
		var scrollTo = target.offset().top - 100;
		$('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
	}
});
$(document).ready(function () {
	$('.skill-heading a').click(function () {
		$('a').removeClass("active");
		$(this).addClass("active");
	});
});

$('.skills .skills-list a').click(function () {
	var target = $(this.hash);
	$('html,body').stop().animate({
		scrollTop: target.offset().top - 100
	}, 'linear');
});
if (location.hash) {
	var id = $(location.hash);
}
$(window).load(function () {
	if (location.hash) {
		$('html,body').animate({ scrollTop: id.offset().top - 100 }, 'linear')
	};
});