$(document).ready(function () {
	$(document).bind('touchmove', function (e) {
		e.preventDefault();
	}, false);
	
	var slidelast = 0;
	
	$(".islide").bind('touchstart', function (e) {
		slidelast = e.originalEvent.touches[0].pageX;
	});
	
	$(".islide").bind('touchmove', function (e) {
		//alert(e.originalEvent.touches[0].pageX);
		movement = (parseInt(e.originalEvent.touches[0].pageX) - parseInt(slidelast));
		if (movement < 0) {
			movement = "-=" + String(Math.abs(movement));
		} else {
			movement = "+=" + String(Math.abs(movement));
		}
		$('ul', this).css('left', movement);
		
		slidelast = e.originalEvent.touches[0].pageX;
	});
});