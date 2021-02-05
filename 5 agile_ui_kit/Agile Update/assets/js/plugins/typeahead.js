(function ($) {
	"use strict";

  var init = function(){
    var engine = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: '../assets/api/menu.json'
    });
    $('.typeahead').removeAttr('data-plugin').typeahead('destroy').typeahead({
        classNames: {
          menu: 'dropdown-menu mt-3'
        }
      }, {
        display: 'name',
        source: engine,
        templates: {
          suggestion: function(data) {
              return '<a class="dropdown-item" href="'+data.link+'"><span class="d-block font-weight-500">' + data.name + '</span><small class="text-muted">'+data.desc+'</small></a>';
          }
        }
      }
    ).on('typeahead:rendered', function(obj, datum) {
        // for ajax
        $(document).trigger('refresh');
    });
  }
  // for ajax to init again
  $.fn.typeahead.init = init;

})(jQuery);
