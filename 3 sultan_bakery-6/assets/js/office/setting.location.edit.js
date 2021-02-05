$(document).ready(function () {
  var infoArr = {
    'location-name': {
      'empty': '',
      'fill': 'West Side Location'
    },
    'business-name': {
      'empty': '',
      'fill': 'Bakery'
    },
    'tva-id-number': {
      'empty': '',
      'fill': '120345111'
    },
    'phone-number': {
      'empty': '',
      'fill': ''
    },
    'street': {
      'empty': '',
      'fill': ''
    },
    'etc': {
      'empty': '',
      'fill': ''
    },
    'city': {
      'empty': '0',
      'fill': '0'
    },
    'timezone': {
      'empty': '0',
      'fill': '0'
    },
    'rate': {
      'empty': '',
      'fill': '1,500'
    },
    'lang': {
      'empty': '0',
      'fill': '0'
    },
    'prefix': {
      'empty': '#',
      'fill': '#'
    },
    'suffix': {
      'empty': '',
      'fill': ''
    },
    'store-currency': {
      'empty': '0',
      'fill': '0'
    }
  }
  var location_name = $('#ghost .title-item-name').text() == '' ? 'West Side Location' : $('#ghost .title-item-name').text();
  $('#title').text('Edit ' + location_name);
  // $('.top-title').text(location_name);
  function enterInfo(flag) {
    Object.keys(infoArr).forEach(function (item) {
      $('#' + item).val(infoArr[item][flag]);
    })
  }

  $('footer').removeClass('d-none');
  $('footer').hide();
  $('footer').slideDown();

  $('#content-body input').keydown(function () {
    $('footer .save').removeAttr('disabled');
    $('footer').slideDown();
  });

  $('#prefix').keyup(function () {
    $('.prefix-clone').text($(this).val());
  });

  $('#suffix').keyup(function () {
    $('.suffix-clone').text($(this).val());
  });

  $('footer .cancel').click(function () {
    $('#leave-modal').modal('show');
  });

  $('#leave-modal .continue').click(function () {
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });

  $('footer .save').click(function () {
    $('#ghost .success-title-message').text('Location added successfully');
    $(this).attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });

  $('#sub-location-group .delete').click(function () {
    $('#delete-sub-location-modal').modal('show');
  });

  $('#delete-sub-location-modal .continue').click(function () {
    notification('<b>Store Room A</b> deleted successfully');
  })

  $('footer .delete').click(function () {
    var ldata = location_name.split(' ');
    var rdata = ldata[0] + ' ' + ldata[1] + ' Store ' + ldata[2];
    $('.delete-location-name').text(rdata);
    $('#delete-location-modal').modal('show');
  });

  $('#delete-location-modal .continue').click(function () {
    $('#ghost .success-title-message').text('<b>North Side Location</b> deleted successfully');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  })

  $('.main-location-name').click(function () {
    $('footer').slideDown();
  });
  $(".number-format").on('change', function () {
    $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  });
});