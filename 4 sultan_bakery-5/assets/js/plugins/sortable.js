(function ($) {
  "use strict";

  var init = function(){
    $('#sortable').html5sortable(
      {
        forcePlaceholderSize: true,
        placeholderClass: 'list-item',
      }
    ).on('sortupdate', function(e) {
      //console.log(e.detail.item);
      //console.log(sortable($(this), 'serialize' ));
    });

    // with handle
    $('#sortable-handle').html5sortable(
      {
        forcePlaceholderSize: true,
        placeholderClass: 'list-item',
        handle: '.js-handle'
      }
    );

    // sortable table
    $('#sortable-table').html5sortable();
  }

  // for ajax to init again
  $.fn.html5sortable.init = init;

})(jQuery);
