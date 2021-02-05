$(document).ready(function () {
  unsavedManager(true, ['#content-body input', '#content-body select'], '');

  var width = window.innerWidth;
  var program_name = "Gold Coins";
  $('footer .save').off('click');
  $('footer .save').click(function () {
    notification(program_name + ' added successfully.');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });
  $('#program-name').keyup(function () {
    program_name = $('#program-name').val();
  })
  $('.bootstrap-tables').on('all.bs.table', function (e) {
    $(this).removeClass('table-bordered');
  })
  $('#info-card').css('max-width', (width - 470) / 12 * 5);
  $('.start-date').fdatepicker({
    initialDate: '12-12-2020',
    format: 'M dd, yyyy',
    // keyboardNavigation: false,
    disableDblClickSelection: true,
    leftArrow: '<<',
    rightArrow: '>>',
    //closeIcon: 'X',
    //closeButton: true
    // autoShow: false
  });
  function setTime() {
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', ' Oct', 'Nov', 'Dec'];
    $('.start-date').val(month[today[0] - 1] + ' ' + today[1] + ', ' + today[2]);
    $('#start-time').val(hour + ':30');
    if (time[0] * 1 > 12) {
      $('#flag').val('PM');
    } else {
      $('#flag').val('AM');
    }
  }
  var today = new Date().toLocaleDateString().split('/');
  var time = new Date().toLocaleTimeString().split(':');
  var hour;
  if (time[0] * 1 > 12) {
    hour = time[0] * 1 - 12;
    $('#flag').val('AM');
  } else {
    hour = time[0] * 1;
  }
  setTime();


  $('#spend').keyup(function () {
    if ($('#earn').val() == '') return;
    if ($('#spend').val() == '') {
      $('.earn-spend-clone').html('');
      $('.earn-spend-clone1').html('');
      return;
    }
    var flag = '';
    if ($('#earn').val() * 1 > 1) {
      flag = 'points';
    } else {
      flag = 'point';
    }
    $('.earn-spend-clone').html('Customer earns <b>' + $('#earn').val() + '</b> ' + flag + ' for every L£ <b>' + $('#spend').val() + '</b> spent');
    $('.earn-spend-clone1').html('&#9679;' + ' Customer earns <b>' + $('#earn').val() + '</b> ' + flag + ' for every L£ <b>' + $('#spend').val() + '</b> spent');

  });

  $('#earn').keyup(function () {
    if ($('#spend').val() == '') return;
    if ($('#earn').val() == '') {
      $('.earn-spend-clone').html('');
      $('.earn-spend-clone1').html('');
      return;
    }
    var flag = '';
    if ($('#earn').val() * 1 > 1) {
      flag = 'points';
    } else {
      flag = 'point';
    }
    $('.earn-spend-clone').html('Customer earns <b>' + $('#earn').val() + '</b> ' + flag + ' for every L£ <b>' + $('#spend').val() + '</b> spent');
    $('.earn-spend-clone1').html('&#9679;' + ' Customer earns ' + $('#earn').val() + ' ' + flag + ' for every L£ ' + $('#spend').val() + ' spent');
  });

  $('#point').keyup(function () {
    if ($(this).val() == '') {
      $('.point-clone').html('');
      return;
    }
    $('.point-clone').html('<b>1</b> point is worth <b>L£ ' + $(this).val() + '</b>');
    $('#info-card .point-clone').html('&#9679;' + ' 1 point is worth L£ ' + $(this).val() + '');
  });

  $('#program-name').keyup(function () {
    $('.program-name-clone').html($(this).val());
    if ($(this).val() === '') {
      $('#save').attr('disabled', true);
    } else {
      $('#save').removeAttr('disabled');
    }
  });

  $('input[name="point-round"]').click(function () {
    if ($(this).val() === 'none') {
      $('.point-round-clone-text').text('250.5 points = 250.5 points');
      $('.point-round-clone').html('');
      return;
    } else if ($(this).val() === 'up') {
      $('.point-round-clone-text').text('250.5 points = 251 points');
    } else if ($(this).val() === 'down') {
      $('.point-round-clone-text').text('250.5 points = 250 points');
    }
    // $('.point-round-clone').html('&#9679; ' + ' Point always <b>' + $(this).parent().text().trim() + '</b>');
    $('.point-round-clone').html('&#9679; ' + ' Point always round ' + $(this).val());
  });

  $('#mini-amount-input').keyup(function () {
    $('.mini-clone').html('&#9679; ' + ' Minimum purchase of L£ ' + $(this).val());
  });

  $('#mini-quantity-input').keyup(function () {
    $('.mini-clone').html('&#9679; ' + ' Minimum quantity of ' + $(this).val() + ' products');
  });

  $('.start-date').change(function () {
    $('.start-date-clone').html('&#9679; Active from ' + $(this).val().slice(0, 6));
  });

  $('#start-time').change(function () {
    $('.start-time-clone').text(' at ' + $(this).val() + ' ' + $('#flag').val());
  });

  $('#set-roll').click(function () {
    if ($(this).prop('checked')) {
      $('.period-clone').html('Rolling expiration: 3 months');
    } else {
      $('.period-clone').text('');
    }
  });


  $('input[name="roll-period"]').click(function () {
    $('.period-clone').html('Rolling expiration: ' + $(this).parent().text().trim());
  });

  $('input[name="minimum-requirement"]').click(function () {
    if ($('#mini-none').prop('checked')) {
      $('#mini-amount').closest('label').next().addClass('d-none');
      $('#mini-quantity').closest('label').next().addClass('d-none');
      $('.mini-clone').text('');
    } else if ($('#mini-quantity').prop('checked')) {
      $('#mini-amount').closest('label').next().addClass('d-none');
      $('#mini-quantity').closest('label').next().removeClass('d-none');
      $('.mini-clone').html('&#9679; ' + 'Minimum quantity of 0 products');
    } else {
      $('#mini-amount').closest('label').next().removeClass('d-none');
      $('#mini-quantity').closest('label').next().addClass('d-none');
      $('.mini-clone').html('&#9679; ' + 'Minimum purchase of L£ 0');
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

  $(".number-format").on('change', function () {
    $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  });
});