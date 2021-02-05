$(document).ready(function () {
  $('.fixed-table-toolbar').ready(function () {
    setTimeout(function () {
      $('.fixed-table-toolbar').addClass('d-flex justify-content-between')
      $('div.search input').attr('placeholder', 'Search suppliers, purchase orders, phone number, etc…');
      $('div.search').addClass('input-group col-md-auto col-12');
      $('div.search').css('width', '350px');
      $('div.search').prepend(`
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="la la-search"></i>
          </span>
        </div>
      `);
    }, 100)
  });

  $('footer').hide();
  $('footer').removeClass('d-none');
  $('footer .delete').hide();
  $('footer .cancel').click(function () {
    if ($(this).hasClass('confirm')) {
      $('#leave-modal').modal('show');
    } else {
      back();
    }
  });

  $('footer .save').click(function () {
    back();
    notification($(this).attr('title'));
  });

  function back() {
    $('.profile-page').hide();
    $('.edit-page').hide();
    $('.index-page').show();
    $('footer').slideUp();
    formatInfo();
  }


  $('.delete').click(function () {
    $('#delete-modal').modal('show');
  });

  $('.modal-delete-button').click(function () {
    notification($(this).attr('title'));
    $('.back').click();
  });

  $('.notification').click(function () {
    notification($(this).attr('notification-title'));
  });


  function formatInfo() {
    $('.edit-page input[type="text"]').val('');
    $('.edit-page input[type="number"]').val('');
    $('.edit-page input[type="checkbox"]').prop('checked', false);
    $('.edit-page select').val('0');
    $('.edit-page textarea').val('');
  }

  $('.alert').hide();
  $('.alert').removeClass('d-none');
  function notification(htmlStr, time = 3000) {
    $('.alert').html(htmlStr);
    $('.alert').fadeIn(1000);
    setTimeout(function () {
      $('.alert').fadeOut();
    }, time);
  }

  $('body').on('click', '.edit', function () {
    $('footer').slideDown();
    $('.delete').show();
    $('.save').attr('disabled', true);
    $('#title').text($(this).closest('tr').children().eq(0).text());
    $('.profile-page').hide();
    $('.index-page').hide();
    $('.edit-page').show();
    $('.save').attr('title', 'Supplier updated successfully');
  });

  $('.step-2').hide();
  $('.step-3').hide();
  $('.profile-page').hide();
  $('.edit-page').hide();

  $('.add').click(function () {
    $('.delete').hide();
    $('.profile-page').hide();
    $('.index-page').hide();
    $('.edit-page').show();
    $('.save').attr('title', 'New supplier added successfully');
  });

  $('textarea').keydown(function (ev) {
    if ($(this).val().length > 499) {
      ev.preventDefault();
    }
    $(this).parent().find('.length').text($(this).val().length);
  });

  $('.back').click(function () {
    $('.index-page').show();
    $('.profile-page').hide();
    $('.edit-page').hide();
    $('footer').slideUp();
    $('#title').text('Add suppliers');
  });


  $('body').on('click', 'tbody tr', function (ev) {
    if (ev.target.nodeName !== 'I' && ev.target.nodeName !== 'A') {
      $('.delete').hide();
      $('#title').text($(this).children().eq(0).text());
      $('.profile-page').show();
      $('.index-page').hide();
      $('.edit-page').hide();
      $('.save').attr('title', 'Saved successfully');
    }
  });

  $('#import-start').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-1').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-2').click(function () {
    $('.step-1').hide();
    $('.step-2').show();
    $('.step-3').hide();
  });

  $('.to-step-3').click(function () {
    $('.step-1').hide();
    $('.step-2').hide();
    $('.step-3').show();
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

  $('.edit-page input').change(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('.edit-page textarea').change(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('.edit-page textarea').keydown(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('.edit-page input').keydown(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('.profile-page input').change(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('input[name=point-round]').change(function () {
    if ($(this).val() === 'lbp') {
      $('#excharge-rate').hide();
      $('.currency-type').text('L£');
      $('.currency-value').val('0');
    } else {
      $('#excharge-rate').show();
      $('.currency-type').text('$');
      $('.currency-value').val('0.00');
    }
  });

  $('input[name=registered-vat]').change(function () {
    if ($(this).val() === 'no') {
      $('#vat-id-number').parent().hide();
    } else {
      $('#vat-id-number').parent().show();
    }
  });

  $('.profile-page textarea').change(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('.profile-page textarea').keydown(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('.profile-page input').keydown(function () {
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  var alarm;
  $('#save').click(function () {
    $('footer').slideUp();
    $('.index-page').show();
    $('.edit-page').hide();
    $('.profile-page').hide();
    $('.alert').removeClass('d-none');
    var alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

  $('.alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('#delete-supplier').click(function () {
    $('#delete-modal').modal('hide');
    $('.back').click();
  });

  $('#edit-profile').click(function () {
    $('.index-page').hide();
    $('.edit-page').show();
    $('.profile-page').hide();
  });
  $('#vat-id-number').autoNumeric('init', { mDec: 0, vMax: '9999999999999999999' });

  $('#switch').click(function () {
    $('.overwrite').toggleClass('font-weight-bold');
    if ($(this).prop('checked')) {
      $('.overwrite').text('overwrite any existing suppliers')
    } else {
      $('.overwrite').text('not overwrite any existing suppliers')
    }
  });

});