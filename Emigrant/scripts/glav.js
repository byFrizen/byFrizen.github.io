var next = $('.next');
var prev = $('.prev');
var indexImage;
var activeImage;
var nextImage;
var Images = $('.carousel-item');
next.click(function(){
	nextSl();
});

prev.click(function(){
	prevSl();
});

$(document).ready(function(){
	var timerId = setInterval(function(){
		nextSl()}, 15000);
	var i = 0;
	$('#menu').mouseover(function() {
	
		if(i < 1){
			$('.count').each(function(){//пройдет по всем элементам класса count
				$(this).prop('Counter', 0).animate({ //Изминяет число от 0 до его значения
					Counter: $(this).text()
				},{
				duration: 4000,
				easing: 'swing',
				step:function(now) {
					$(this).text(Math.ceil(now));
				}
				});
			});
			i++;
		}
	});
});


$(document).keydown(function(event) {
	if(event.which == 39)
		nextSl();
	if(event.which == 37)
		prevSl();
	if(event.which == 27)
		closeWindow();

});
$(window).scroll(function(){
		$('.modal-window').css({'top': $(window).scrollTop()+100});
	}).scroll();


$('.z-btn').click(function() {
	$('.modal-window').fadeIn();
	$('.modal-window').addClass('active');
	$('.modal-bg').fadeIn();
	$('.modal-bg').addClass('active');

});

$('.modal-bg').click(function() {
	closeWindow();
});
function closeWindow(){
	$('.modal-window').fadeOut();
	$('.modal-window').removeClass('active');
	$('.modal-bg').fadeOut();
	$('.modal-bg').removeClass('active');

}
function nextSl(){
	activeImage = $('div.carousel-item.active');
	indexImage = activeImage.index();
	if(indexImage == Images.length){
		nextImage = Images.eq(0);
	}
	else{
		nextImage = Images.eq(indexImage);
	}
	activeImage.removeClass('active');
	activeImage.fadeOut();
	nextImage.addClass('active');
	nextImage.fadeIn();
}
function prevSl(){
	activeImage = $('div.carousel-item.active');
	indexImage = activeImage.index()-1;
	if(indexImage < 0){
		nextImage = Images.eq(Images.length);
	}
	else{
		nextImage = Images.eq(indexImage-1);
	}
	activeImage.removeClass('active');
	activeImage.fadeOut();
	nextImage.addClass('active');
	nextImage.fadeIn();
}