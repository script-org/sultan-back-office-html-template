$(document).ready(function () {
    footerControl();
    footerShowCondition();
    $('footer').hide();
    $('footer').removeClass('d-none');
    $('input').change(function () {
        $('footer').slideDown();
    });

    $('input').keydown(function () {
        $('footer').slideDown();
    });

    $('textarea').keydown(function () {
        $('footer').slideDown();
    });
    $('.custom-select').children(function () {
        $('footer').slideDown();
    });
    $('.continue').click(function () {
        $('footer').slideUp();
        $('input[type="text"]').val('');
        $('input[type="number"]').val('');
        $('input[type="checkbox"]').prop('checked', false);
        $('select').val('0');
        $('textarea').val('');
    });
});