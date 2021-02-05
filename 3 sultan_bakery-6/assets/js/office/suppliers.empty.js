$(document).ready(function () {
    $('.carousel').carousel({
        interval: false
    });

    $('#import-start').click(function () {
        $('.carousel-item').removeClass('active').eq(0).addClass('active');
    });
    $('#import-supplier-start').click(function () {
        var percent = 0;
        setInterval(function () {
            percent < 100 ? percent++ : '';
            $('.progress-bar').css('width', percent + '%');
            $('.progress-bar-percent').text(percent + '% complete');
        }, 50);
    });

    $('.ui-switch input').click(function () {
        $(this).closest('div').find('p').toggleClass('text-muted');
    });


    $('#switch').click(function () {
        if ($(this).prop('checked')) {
            $('.overwrite').text('overwrite any existing suppliers')
        } else {
            $('.overwrite').text(' not overwrite any existing suppliers')
        }
    });

});