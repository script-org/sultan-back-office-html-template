$(document).ready(function () {
    var title = $('#ghost .title-item-name').text();
    if (title)
        $('#title').text(title);
    $('.start-date').fdatepicker({
        initialDate: '12-12-2020',
        format: 'M dd, yyyy',
        disableDblClickSelection: true,
        leftArrow: '<<',
        rightArrow: '>>',
    });
    var today = new Date().toLocaleDateString().split('/');
    function setTime() {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', ' Oct', 'Nov', 'Dec'];
        $('.start-date').val(month[today[0] - 1] + ' ' + today[1] + ', ' + today[2]);
    }
    setTime();
    $('.select2-multiple').select2({ tags: true, tokenSeparators: [','] });

    $('footer').removeClass('d-none');

    $('footer .cancel').click(function () {
        if ($('footer .save').attr('disabled') == 'disabled') {
            back();
        } else {
            $('#leave-modal').modal('show');
        }
    });

    $('.delete').click(function () {
        $('#delete-modal').modal('show');
    });

    $('#delete-modal .delete-confirm').click(function () {
        $('#ghost .success-title-message').text('Supplier deleted successfully.');
        $('footer .save').attr('disabled', true);
        $('#pjax-back-link')[0].click();
    });

    $('#leave-modal .continue').click(function () {
        $('footer .save').attr('disabled', true);
        $('#pjax-back-link')[0].click();
    })

    $('textarea').keydown(function (ev) {
        if ($(this).val().length > 499) {
            ev.preventDefault();
        }
        $(this).parent().find('.length').text($(this).val().length);
    });

    $('footer .save').click(function () {
        $(this).attr('disabled', true);
        $('#ghost .success-title-message').text('New supplier added successfully');
        $('#ghost .all-link')[0].click();
    })

    var is_lbp;
    $('input[name=point-round]').change(function () {
        if ($(this).val() === 'lbp') {
            is_lbp = 1;
            $('#excharge-rate').hide();
            $('.currency-type').text('L£');
            $('.currency-value1').val('0');
            $('.currency-value2').val('0');
        } else {
            is_lbp = 0;
            $('#excharge-rate').show();
            $('.currency-type').text('$');
            $('.currency-value1').val('0.00');
            $('.currency-value2').val('0.00');
        }
    });

    $('input[name=registered-vat]').change(function () {
        if ($(this).val() === 'no') {
            $('#vat-id-number').parent().hide();
            $('.vat-percentage').parent().hide();
            $('.vat-type').parent().hide();
        } else {
            $('#vat-id-number').parent().show();
            $('.vat-percentage').parent().show();
            $('.vat-type').parent().show();
        }
    });

    $('#vat-id-number').mask('999999-999');
    $('.mobile').mask('99 999 999');
    $(".number-format").on('change', function () {
        $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });
    $('.currency-value1').on('keyup', function () {
        $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });
    $('.currency-value1').focusout(function () {
        if (!is_lbp && !$('.currency-value1').val().includes('.')) {
            var num = $('.currency-value1').val() + '.00';
            $('.currency-value1').val(num);
        }
    });
    $('.currency-value2').on('keyup', function () {
        $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });
    $('.currency-value2').focusout(function () {
        if (!is_lbp && !$('.currency-value2').val().includes('.')) {
            var num = $('.currency-value2').val() + '.00';
            $('.currency-value2').val(num);
        }
    });
    $('#content input,select').change(function () {
        $('footer .save').removeAttr('disabled');
    });
    $('#content input,select').keyup(function () {
        $('footer .save').removeAttr('disabled');
    });
});