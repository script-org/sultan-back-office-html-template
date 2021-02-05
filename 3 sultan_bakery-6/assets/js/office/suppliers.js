$(document).ready(function() {
    if ($('#ghost .success-title-message').text() != '') {
        notification($('#ghost .success-title-message').text());
    }
    $('#table').on('all.bs.table', function(e) {
        $(this).removeClass('table-bordered');
    })
    $('.transaction-table').on('all.bs.table', function(e) {
        $(this).removeClass('table-bordered');
        $(this).removeClass('table-borderless');
    })

    $('#content').off('click', '.edit');
    $('#content').on('click', '.edit', function() {
        $('#ghost .title-item-name').text($(this).closest('tr').children().eq(0).text());
        $('#ghost .edit-link')[0].click();
    });

    $('.step-2').hide();
    $('.step-3').hide();

    $('#content').off('click', 'tbody tr');
    $('#content').on('click', 'tbody tr', function(ev) {
        if (ev.target.nodeName !== 'I' && ev.target.nodeName !== 'A') {
            $('#ghost .title-item-name').text($(this).closest('tr').children().eq(0).text());
            $('#ghost .profile-link')[0].click();
        }
    });

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
    $('.ui-switch input').click(function() {
        $(this).closest('div').find('p').toggleClass('text-muted');
    });


    $('#switch').click(function() {
        if ($(this).prop('checked')) {
            $('.overwrite').text('overwrite any existing suppliers')
        } else {
            $('.overwrite').text(' not overwrite any existing suppliers')
        }
    });
});