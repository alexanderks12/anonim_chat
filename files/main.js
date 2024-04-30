$(document).ready(function(){
	$('#image-zoom').click(function(){
		$(this).removeClass('active');
	});
	$('#body .img').click(function(){
//		$('#image-zoom').css('background-image', 'url(' + $('img', this).attr('src') + ')').addClass('active');
		$('#image-zoom img').attr('src', $('img', this).attr('src'));
		$('#image-zoom').addClass('active');
	});
});