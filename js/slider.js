$(document).ready(function($) {
	var imageBox = $('.slider-block ul');
	var imageWidth = $('.slider-block ul li').first().width();
	var imageQuantity = $('.slider-block ul').children('li').length;
	var clickedButton = 1;
	var timerSlide;

	var navButtonFirst = $('<div data-nav="data-nav" data-count="'+1+'" class="slider-btn slider-choosed"></div>');
	$('.nav').append(navButtonFirst);
	var prevSlide = navButtonFirst;

	for(i=2; i<=imageQuantity; i++) {
		var navButton = '<div data-nav="data-nav" data-count="'+i+'" class="slider-btn slider-notchoosed"></div>';
		$('.nav').append(navButton);
	}

	function moveSlider(slideToMove) {
		clickedButton = $(slideToMove).data('count');
		$(prevSlide).removeClass('slider-choosed');
		$(prevSlide).addClass('slider-notchoosed');
		$(slideToMove).removeClass('slider-notchoosed');
		$(slideToMove).addClass('slider-choosed');
		prevSlide = slideToMove;
		var animateValue = -(clickedButton-1)*(imageWidth+100);
		imageBox.animate({
			'left' : animateValue
		})
	}

	function slideLoop() {
		if(clickedButton<3) {
			clickedButton++;
		} else {
			clickedButton = 1;
		}
		moveSlider($('.slider-btn[data-count="'+clickedButton+'"]'));
	}
	timerSlide = setInterval(slideLoop, 10000);

	$('.nav div').on('click', function() {
		moveSlider(this);
		clearTimeout(timerSlide);
		timerSlide = setInterval(slideLoop, 10000);
	});


});