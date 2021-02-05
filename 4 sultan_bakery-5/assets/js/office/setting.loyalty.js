$(document).ready(function () {
  var width = window.innerWidth;
  $('#info-card').css('max-width', (width - 470) / 12 * 5);

  function setTime() {
    $('#start-date').val(today[1] + '/' + today[0] + '/' + today[2]);
    $('#start-time').val(hour + ':30');
    if (time[0] * 1 > 12) {
      $('#flag').val('pm');
    } else {
      $('#flag').val('am');
    }
  }
  var today = new Date().toLocaleDateString().split('/');
  var time = new Date().toLocaleTimeString().split(':');
  var hour;
  if (time[0] * 1 > 12) {
    hour = time[0] * 1 - 12;
    $('#flag').val('am');
  } else {
    hour = time[0] * 1;
  }
  footerControl();
  addItemControl();
  backControl();
  $('tbody tr').click(function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('footer').slideDown();
      setTime();
      var rate = $(this).closest('tr').children().eq(4).text().slice(0, -1);
      $('.perfermance-content').html('<p class="my-1">&#9679; 10 used</p><p>View the <a href="./reports.sale.payment.html" class="text-primary">Sales by payment type</p>');
      $('.index-page').hide();
      $('.edit-page').show();
      $('#title').text('Edit Gold Points');
      $('#program-name').val('GOLD POINTS');
      $('.program-name-clone').html('&#9679; GOLD POINTS');
      $('#tax-rate').val(rate);
      $('.delete').show();
      $('.active-status').removeClass('d-none');
      $('.save').attr('title', 'Loyalty program updated successfully');
    }
  });

  // $('.back').click(function () {
  //   $('.index-page').removeClass('d-none');
  //   $('.edit-page').addClass('d-none');
  //   $('#program-name').val('');
  //   $('#spend').val('');
  //   $('.delete').addClass('d-none');
  //   $('footer').addClass('d-none');
  //   $('#earn').val('');
  // });

  $('.delete').click(function () {
    var name = $('#program-name').val();
    $('#delete-program-name').text(name);
  });

  $('.add').click(function () {
    //   $('.index-page').addClass('d-none');
    //   $('.edit-page').removeClass('d-none');
    setTime();
    $('.perfermance-content').html('<p>Program is not active yet.</p>');
    $('#title').text('Create loyalty program');
    $('.program-name-clone').text('');
    $('.active-status').addClass('d-none');
    $('.save').attr('title', 'Loyalty program created successfully');
    //   $('#tax-name').val('');
    //   $('#tax-rate').val('');
    //   $('footer').removeClass('d-none');
  });

  $('#spend').keyup(function () {
    var flag = '';
    if ($('#earn').val() * 1 > 1) {
      flag = 'points';
    } else {
      flag = 'point';
    }
    $('.earn-spend-clone').html('Customer earns <b>' + $('#earn').val() + '</b> ' + flag + ' for every L£ <b>' + $('#spend').val() + '</b> spent');
  });

  $('#earn').keyup(function () {
    var flag = '';
    if ($('#earn').val() * 1 > 1) {
      flag = 'points';
    } else {
      flag = 'point';
    }
    $('.earn-spend-clone').html('Customer earns <b>' + $('#earn').val() + '</b> ' + flag + ' for every L£ <b>' + $('#spend').val() + '</b> spent');
  });

  $('#point').keyup(function () {
    $('.point-clone').html('<b>1</b> point is worth <b>' + $(this).val() + '</b>');
    $('.point-clone-under').html('<b>' + $(this).val() + '</b>');
  });

  $('#program-name').keyup(function () {
    $('.program-name-clone').html('&#9679; ' + $(this).val());
    if ($(this).val() === '') {
      $('#save').attr('disabled', true);
    } else {
      $('#save').removeAttr('disabled');
    }
  });

  var alarm;

  $('#save').click(function () {
    $('.alert').removeClass('d-none');
    alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

  $('input[name="point-round"]').click(function () {
    $('.point-round-clone').html('Point rounding: <b>' + $(this).parent().text().trim() + '</b>');
    if ($(this).val() === 'none') {
      $('.point-round-clone-text').text('250.5 points = 250.5 points');
    } else if ($(this).val() === 'up') {
      $('.point-round-clone-text').text('250.5 points = 251 points');
    } else if ($(this).val() === 'down') {
      $('.point-round-clone-text').text('250.5 points = 250 points');
    }
  });

  $('#mini-amount-input').keyup(function () {
    $('.mini-clone').text('Minimum purchase of L£ ' + $(this).val());
  });

  $('#mini-quantity-input').keyup(function () {
    $('.mini-clone').text('Minimum quantity of ' + $(this).val() + ' products');
  });

  $('#start-date').change(function () {
    $('.start-date-clone').text($(this).val());
  });

  $('#start-time').change(function () {
    $('.start-time-clone').text($(this).val());
  });

  $('#set-roll').click(function () {
    if ($(this).prop('checked')) {
      $('.period-clone').text('Rolling expiration: 3 months');
    } else {
      $('.period-clone').text('');
    }
  });


  $('input[name="roll-period"]').click(function () {
    $('.period-clone').text('Rolling expiration: ' + $(this).parent().text().trim());
  });

  $('input[name="minimum-requirement"]').click(function () {
    if ($('#mini-none').prop('checked')) {
      $('#mini-amount').closest('label').next().addClass('d-none');
      $('#mini-quantity').closest('label').next().addClass('d-none');
      $('.mini-clone').text('None');
    } else if ($('#mini-quantity').prop('checked')) {
      $('#mini-amount').closest('label').next().addClass('d-none');
      $('#mini-quantity').closest('label').next().removeClass('d-none');
      $('.mini-clone').text('Minimum quantity of 0 products');
    } else {
      $('#mini-amount').closest('label').next().removeClass('d-none');
      $('#mini-quantity').closest('label').next().addClass('d-none');
      $('.mini-clone').text('Minimum purchase of L£ 0');
    }
  });

  $('#set-roll').click(function () {
    if ($(this).prop('checked')) {
      $('#period-bar').removeClass('d-none');
    } else {
      $('#period-bar').addClass('d-none');
    }
  });

  $('input').keyup(function () {
    $('#save').removeAttr('disabled');
  });

  $('select').change(function () {
    $('#save').removeAttr('disabled');
  });

  $('.alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('#delete-loyalty').click(function () {
    $('#delete-program-modal').modal('hide');
    $('.alert').removeClass('d-none');
    alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

});