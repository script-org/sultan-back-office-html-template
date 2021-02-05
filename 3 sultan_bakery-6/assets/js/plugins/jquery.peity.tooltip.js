(function ($) {
	"use strict";

  var title
      ,value
      ;
  $(document).on('mouseover', '.peity [data-value]', function(){
    var that = $(this).closest('svg.peity').prev();
    if( $(this).data('bs.tooltip') || !that.data('tooltip') ) return;

    title = that.data('title');
    value = $(this).data('value');

    $(this).tooltip({
      title: title+": "+value,
      html: true,
      delay: { "show": 50, "hide": 50 }
    }).tooltip('show');

  });
  
})(jQuery, );
