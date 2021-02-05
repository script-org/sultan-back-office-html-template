$(document).ready(function() {
    var title = $('#ghost .title-item-name').text();
    if (title != '') {
        $('#title').text(title);
        $('#profile_supplier_name2').text(title);
        if (title == 'I have all.') {
            var add = 'mail@mail.com, ...'.split(',');
            $('#Account_type').text('USD - 1,520');
            $('#supplier_VAT').text('VAT #197323-987');
            $('#contact_numbers').text('03 444 888');
            $('#supplier_mobile').text('01 777 555');
            $('#supplier_emails').text(add);
        } else if (title == 'I have nothing.') {
            $('#Account_type').text('LBP');
            $('#supplier_VAT').text('No VAT ID');
            $('#contact_numbers').text('N/A');
            $('#supplier_mobile').text('N/A');
            $('#supplier_emails').text('mail@mail.com');
        } else {
            $('#supplier_emails').text('mail@mail.com');
            $('#Account_type').text('USD - 1,520');
            $('#supplier_VAT').text('VAT #197323-987');
            $('#contact_numbers').text('03 444 888');
            $('#supplier_mobile').text('01 777 555');
            $('#supplier_emails').text('mail@mail.com');
        }
    }

    $('#table').on('all.bs.table', function(e) {
        $(this).removeClass('table-bordered');
    })
    $('.transaction-table').on('all.bs.table', function(e) {
        $(this).removeClass('table-bordered');
        $(this).removeClass('table-borderless');
        $(this).removeClass('table-hover');
    })
    $('footer').hide();
    $('footer').removeClass('d-none');
    $('footer .delete').hide();
    $('footer .cancel').click(function() {
        $('#leave-modal').modal('show');
    });

    $('#leave-modal .continue').click(function() {
        $('#content textarea').val('');
        $('footer').slideUp();
    });

    $('footer .save').click(function() {
        notification('Notes saved successfully');
        $('footer').slideUp();
    });

    $('textarea').keydown(function(ev) {
        if ($(this).val().length > 499) {
            ev.preventDefault();
        }
        $(this).parent().find('.length').text($(this).val().length);
    });

    $('#content textarea').keyup(function() {
        $('footer').slideDown();
        $('.save').removeAttr('disabled');
    });
});