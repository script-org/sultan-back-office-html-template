(function ($) {
	"use strict";

  var init = function(){
    $('#datatable').dataTable({
    });
  }

  // for ajax to init again
  $.fn.dataTable.init = init;

})(jQuery);
