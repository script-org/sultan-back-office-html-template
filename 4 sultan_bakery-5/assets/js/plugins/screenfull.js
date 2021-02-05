(function ($, screenfull) {
	"use strict";

	$(document).on('click', '[data-toggle="fullscreen"]', function (e) {
	    e.preventDefault();
	    if (screenfull.enabled) {
	    	screenfull.toggle($('body')[0]);
	    }
	});

  	function fullscreenchange() {
		var elem = screenfull.element;
		if (screenfull.isFullscreen) {
			$('body').addClass('is-fullscreen');
			$('[data-toggle="fullscreen"]').addClass('active');
		}else{
			$('body').removeClass('is-fullscreen');
			$('[data-toggle="fullscreen"]').removeClass('active');
		}
	}

	screenfull.on('change', fullscreenchange);

})(jQuery, screenfull);
