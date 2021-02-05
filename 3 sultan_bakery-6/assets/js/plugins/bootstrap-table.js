(function ($) {
    "use strict";

    var init = function () {
        var $table = $('#table'),
            $tables = $('.bootstrap-tables'),
            $remove = $('#trash');

        $table.bootstrapTable({
            buttonsClass: 'white'
        });
        $tables.bootstrapTable({
            buttonsClass: 'white'
        });

        $('.bootstrap-tables-with-sortable').bootstrapTable({
        })
        setTimeout(function () {
            $('.bootstrap-tables-with-sortable').trigger('bt-loaded');
        }, 1000);

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
