(function ($) {
	"use strict";

    var init = function(){
        var $table = $('#table'),
        $remove = $('#trash');

        $table.bootstrapTable({
            buttonsClass: 'white'
        });

        $remove.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                return row.id;
            });
            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
        });

  }

  // for ajax to init again
  $.fn.bootstrapTable.init = init;

})(jQuery);
