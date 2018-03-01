$(document).ready(function($) {
	var imageBox = $('.slider-block ul');
	var imageWidth = $('.slider-block ul li').first().width();
	var imageQuantity = $('.slider-block ul').children('li').length;

	var navButtonFirst = $('<div data-nav="data-nav" data-count="'+1+'" class="slider-btn slider-choosed"></div>');
	$('.nav').append(navButtonFirst);
	var prevSlide = navButtonFirst;

	for(i=2; i<=imageQuantity; i++) {
		var navButton = '<div data-nav="data-nav" data-count="'+i+'" class="slider-btn slider-notchoosed"></div>';
		$('.nav').append(navButton);
	}

	$('.nav div').on('click', function() {
		var clickedButton = $(this).data('count');

		$(prevSlide).removeClass('slider-choosed');
		$(prevSlide).addClass('slider-notchoosed');
		$(this).removeClass('slider-notchoosed');
		$(this).addClass('slider-choosed');
		prevSlide = this;

		var animateValue = -(clickedButton-1)*(imageWidth+100);
		imageBox.animate({
			'left' : animateValue
		})
	});
});