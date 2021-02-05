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
  var isSubLocation;
  function enterInfo(flag) {
    Object.keys(infoArr).forEach(function (item) {
      $('#' + item).val(infoArr[item][flag]);
    })
  }

  $('footer').removeClass('d-none');
  $('footer').hide();
  enterInfo('empty');

  $('#content-body input').keydown(function () {
    $('footer .save').removeAttr('disabled');
    $('footer').slideDown();
  });

  $('#is-sub-location').change(function () {
    if ($(this).prop('checked')) {
      $('#content-body .card').hide();
      $('.is-sub-location').show();
      isSubLocation = 1;
      $('.sub-location-form').removeClass('d-none');
    } else {
      isSubLocation = 0;
      $('#content-body .card').show();
      $('.sub-location-form').addClass('d-none');
    }
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

  var location_name = 'West Side Location';
  $('footer .save').click(function () {
    if (isSubLocation)
      $('#ghost .success-title-message').text('Sub location added successfully');
    else
      $('#ghost .success-title-message').text('Location added successfully');
    $(this).attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });


  $('.main-location-name').click(function () {
    $('footer').slideDown();
  });
  $(".number-format").on('change', function () {
    $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  });
});