// Slider
var swiper = new Swiper('.product-slider', {
	spaceBetween: 30,
	effect: 'fade',
	// initialSlide: 2,
	loop: false,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev'
	},

	autoHeight: true,

	// mousewheel: {
	//     // invert: false
	// },
	on: {
		init: function () {
			var index = this.activeIndex;

			var target = $('.product-slider__item').eq(index).data('target');

			console.log(target);

			$('.product-img__item').removeClass('active');
			$('.product-img__item#' + target).addClass('active');
		}
	}

});

swiper.on('slideChange', function () {
	var index = this.activeIndex;

	var target = $('.product-slider__item').eq(index).data('target');

	console.log(target);

	$('.product-img__item').removeClass('active');
	$('.product-img__item#' + target).addClass('active');

	if (swiper.isEnd) {
		$('.prev').removeClass('disabled');
		$('.next').addClass('disabled');
	} else {
		$('.next').removeClass('disabled');
	}

	if (swiper.isBeginning) {
		$('.prev').addClass('disabled');
	} else {
		$('.prev').removeClass('disabled');
	}
});

// GET REQUEST FOR ALL LIKES
axios.get('https://faizywebsite.herokuapp.com/post')
		.then(({data}) => {
            data.forEach(post => {
				let htmlPost  = $("span#"+ post.postId +".likes")
				htmlPost.text(post.likes)
			});
		});

$(".js-fav").on("click", function () {

	//GET THE ID POST
	let id = $(this).find('.likes').attr('id')
    
	//CHECK IF POST IS LIKED OR NOT
	if($(this).find('.heart').is('.is-active')) {
         //ADD LIKE TO A POST
			axios.put('https://faizywebsite.herokuapp.com/post/subtractlike', { postId: id})
			.then(({data}) => {
				$(this).find('.likes').text(data.likes)
				$(this).find('.heart').toggleClass("is-active");
				$(this).find('.likeit').toggle()
			});
	} else {
		//SUBTRACT LIKE FROM A POST
			axios.put('https://faizywebsite.herokuapp.com/post/addlike', { postId: id})
			.then(({data}) => {
				$(this).find('.likes').text(data.likes)
				$(this).find('.heart').toggleClass("is-active");
				$(this).find('.likeit').toggle()
			});
	}
	
});