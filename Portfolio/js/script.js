// scroll
$('.page-scroll').on('click', function(e) {

	
	var tujuan = $(this).attr('href');
	
	var elemenTujuan = $(tujuan);
	
	
	$('html , body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1300,'easeInOutExpo')
	e.preventDefault();
});


 $(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

// paralax2
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	// jumborton paralax
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/6+'%)'
	});
	$('.jumbotron h2').css({
		'transform' : 'translate(0px, '+wScroll/5+'%)'
	});
		$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/5+'%)'
	});

	// portfolio animasi
	if( wScroll > $('.project').offset().top - 750){
		

		$('.project .thumbnail').addClass('muncul');
	}

})