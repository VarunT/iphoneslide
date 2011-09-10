$(document).ready(function () {
	$(document).bind('touchmove', function (e) {
		e.preventDefault();
	}, false);
	
	// Update items to absolute positioning
	$(".islide li").each(function () {
		var $this = $(this);
		$this.css({
			'position': 'absolute',
			'top': 0,
			'left': parseInt($this.position().top) + "px"
		});
	});
	
	$(".islide").bind('touchmove', function (e) {
		//alert(e.originalEvent.touches[0].pageX);
		$('li', this).css('left', '-=3px');
	});
});