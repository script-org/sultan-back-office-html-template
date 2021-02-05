$(document).ready(function () {
  var isSubLocation = false;

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

  function enterInfo(flag) {
    Object.keys(infoArr).forEach(function (item) {
      $('#' + item).val(infoArr[item][flag]);
    })
  }

  $('.delete').hide();
  $('footer').hide();
  $('.alert').hide();
  $('.alert').removeClass('d-none');
  $('#sub-location-group').hide();

  $('#add-location').click(function () {
    $('.alert').text('New location added successfully');
    $('#is-sub-location').closest('.form-group').show();
    $('#index-page').addClass('d-none');
    $('#title').text('Add location');
    $('#edit-page').removeClass('d-none');
    $('#edit-page .card').show();
    $('#sub-location-group').hide();
    enterInfo('empty');
  });

  $('.back').click(function () {
    $('footer').slideUp();
    $('#index-page').removeClass('d-none');
    $('#edit-page').addClass('d-none');
    $('#delete-location-modal').modal('hide');
    $('#sub-location-group').hide();
    $('input[type="checkbox"]').prop('checked', false);
  });

  $('#edit-page').change(function () {
    $('#save').removeAttr('disabled');
    $('footer').slideDown();
  });

  $('#edit-page input').keydown(function () {
    $('#save').removeAttr('disabled');
    $('footer').slideDown();
  });

  $('#is-sub-location').change(function () {
    if ($(this).prop('checked')) {
      $('#edit-page .card').hide();
      $('.is-sub-location').show();
      $('.sub-location-form').removeClass('d-none');
    } else {
      $('#edit-page .card').show();
      $('.sub-location-form').addClass('d-none');
    }
  });

  $('#prefix').keyup(function () {
    $('.prefix-clone').text($(this).val());
  });

  $('#suffix').keyup(function () {
    $('.suffix-clone').text($(this).val());
  });

  $('a[data-toggle="collapse"]').click(function () {
    var obj = $(this).find('i');
    if (obj.hasClass('la-angle-up')) {
      obj.removeClass('la-angle-up');
      obj.addClass('la-angle-down');
    } else {
      obj.addClass('la-angle-up');
      obj.removeClass('la-angle-down');
    }
  });

  $('#cancel').click(function () {
    $('footer').slideUp();
    $('input[type="text"]').val('');
    $('input[type="checkbox"]').prop('checked', false);
    $('select').val('0');
    $('#prefix').val('#');
    $('.back').click();
    $('#edit-page .card').show();
  });

  var alarm;

  $('#default-location-save').click(function () {
    $('.alert').text('Updated default location');
    $('#change-default-modal').modal('hide');
    $('.alert').fadeIn(1000);
    var alarm = setTimeout(function () {
      $('.alert').fadeOut();
    }, 3000);
  });

  $('#save').click(function () {
    $('.back').click();
    $('.alert').fadeIn(1000);
    var alarm = setTimeout(function () {
      $('.alert').fadeOut();
    }, 3000);
  });

  $('#index-page #accordion .row').click(function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('#is-sub-location').closest('.form-group').hide();
      $('footer').slideDown();
      $('.alert').text('Location updated successfully');
      $('#save').attr('disabled', true);
      $('#edit-page .card').show();
      $('.delete').show();
      if ($(this).hasClass('children')) {
        isSubLocation = true;
        $('#edit-page .card').hide();
        $('.is-sub-location').show();
      } else {
        $('#sub-location-group').show();
        isSubLocation = false;
      }
      $('#index-page').addClass('d-none');
      $('#edit-page').removeClass('d-none');
      $('#title').text('Edit West Side Location');
      enterInfo('fill');
    }
  });

  $('.delete').click(function () {
    if (isSubLocation) {
      $('#delete-sub-location-modal').modal('show');
      $('.alert').html('<b>Store Room A</b> deleted successfully')
    } else {
      $('#delete-location-modal').modal('show');
    }
  });

  $('.notification').click(function () {
    $('.alert').html($(this).attr('title'));
    $('.alert').fadeIn(1000);
    setTimeout(function () {
      $('.alert').fadeOut();
    }, 3000);
  })
});