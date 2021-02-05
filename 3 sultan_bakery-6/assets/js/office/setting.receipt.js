$(document).ready(function () {

  footerControl();
  $('.bootstrap-tables').on('all.bs.table', function (e) {
    $(this).removeClass('table-bordered');
  });

  $('#logo').change(function (ev) {
    $('#preview-logo img').attr('src', URL.createObjectURL(ev.target.files[0]));
    $('#preview-logo img').css('width', '100%');
    $('.top-part img').attr('src', URL.createObjectURL(ev.target.files[0]));
  });

  $('.logo-cancel').click(function () {
    $('#preview-modal').show();
  });

  $('.logo-delete').click(function () {
    $('#store-image').addClass('d-none');
    $('.logo-text').removeClass('d-none');
    $('.logo-close').addClass('d-none');
    notification($(this).attr('title'));
  })

  $('textarea').keydown(function (ev) {
    $('footer').slideDown();
    if ($(this).val().length > 499) {
      ev.preventDefault();
    }
    $(this).parent().find('.length').text($(this).val().length);
  });

  $('input').change(function () {
    $('footer').slideDown();
  });

  $('input').keydown(function () {
    $('footer').slideDown();
  });

  $("#preview-modal").on('hide.bs.modal', function () {
    $('.top-part p').addClass('d-none');
    $('.top-part img').addClass('d-none');
    $('.barcode-part').addClass('d-none');
  });

  $('#preview').click(function () {
    if ($('.header-text').val() == '') {
      $('.header-part').html('');
    } else {
      $('.header-part').html('<div class="w-100 p-2 text-center" style="border-top: 1px dashed #ddd;overflow-wrap: break-word;">' + $('.header textarea').val() + '</div>');
    }
    if ($('#logo').val() === '') {
      $('.top-part p').text($('#store-name').val());
      $('.top-part p').removeClass('d-none');
    } else {
      $('.top-part img').removeClass('d-none');
    }

    $('.footer-part').text($('.footer textarea').val());

    if ($('#barcode-status').prop('checked')) {
      $('.barcode-part').removeClass('d-none');
    }
  });

  $('#cancel').click(function () {
    $('#leave-modal').modal('show');
  });

  $('#leave-modal .continue').click(function () {
    $('#80').prop('checked', true);
    $('input[type="checkbox"]').prop('checked', true);
    $('textarea').val('');
    $('footer').slideUp();
  });

  var alarm;
  $('#save').click(function () {
    $('footer').slideUp();
    $('.alert').removeClass('d-none');
    var alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

  $('.alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('.ui-switch input').change(function () {
    $(this).closest('div').find('.font-weight-bold').toggleClass('text-dark');
    $(this).closest('div').find('.description').toggleClass('text-dark');
  });

  $('footer .cancel').click(function () {
    $('textarea').val('');
    $('input[type="checkbox"]').prop('checked', true);
    $('#80').prop('checked', true);
    $('input:file').val('');
    $('#store-image').css('width', '50%');
    $('#store-image').attr('src', '../assets/img/logo/System-logo.svg');
  });

  // $('.logo-close').click(function () {
  //   $('#delete-logo-modal').show();
  // });
});