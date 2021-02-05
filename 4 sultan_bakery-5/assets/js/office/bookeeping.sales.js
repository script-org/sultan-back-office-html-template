$(document).ready(function () {

  var alarm;
  $('footer').hide();
  $('.footer-bar').hide();
  $('.detail-bar').hide();
  $('.to-detail-page').click(function() {
    $('.create-footer').hide();
    $('.footer-bar').hide();
    $('.sub-page').hide();
    $('.page').hide();
    $('.detail-footer').show();
    $('.detail-page').show();
    if($(this).hasClass('paid')) {
      $('.status').text('paid');
      $('.status').removeClass('bg-warning-lt');
      $('.status').addClass('bg-success-lt');
      $('.paid-bar').show();
      $('.paid-sub-page').show();
    } else if($(this).hasClass('pending')) {
      $('.status').text('pending');
      $('.status').addClass('bg-warning-lt');
      $('.pending-sub-page').show();
      $('.pending-bar').show();
    } else if($(this).hasClass('refund')) {
      $('.status').text('Refunded');
      $('.refund-sub-page').show();
      $('.refund-bar').show();
    } else if($(this).hasClass('partial-refund')) {
      $('.status').text('Partial Refund');
      $('.status').addClass('bg-danger-lt');
      $('.partial-refund-sub-page').show();
      $('.status').removeClass('bg-success-lt');
      $('.partial-refund-bar').show();
    }
  });

  $('.edit').click(function() {
    $('.page').hide();
    $('.view-page').show();
  })

  $('#create-sale').click(function() {
    $('.page').hide();
    $('.create-page').show();
  });

  $('.detail-page .alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('.customer-info').hide();
  $('.page').hide();
  $('.index-page').show();  

  $('#create-bill').click(function () {
    $('.page').hide();
    $('.create-page').show();
  });

  $('.back').click(function () {
    window.location.href = './bookeeping.sales.html';
  });

  $('.create-page').change(function () {
    $('footer').slideDown();
    $('.detail-footer').hide();
    $('.create-footer').show();
  });

  $('.create-page .ui-switch input').change(function () {
    $(this).closest('div').find('.font-weight-bold').toggleClass('text-dark');
  });

  $('textarea').keydown(function (ev) {
    $(this).parent().find('.length').text($(this).val().length);
  });

  $('#customer-select').change(function () {
    if ($(this).val() !== 'new') {
      $('.customer-list').hide();
      $('.customer-info').show();
    } else {
      $('#customer-add-modal').modal('show');
      $(this).val('');
    }
  });

  $('.customer .close').click(function () {
    $('.customer-list').show();
    $('.customer-info').hide();
    $('#customer-select').val('');
  });

  $('.payment-close').click(function () {
    $(this).closest('.row').hide();
  });

  $('.send').click(function () {
    $(this).closest('.modal').modal('hide');
    $('.detail-page .alert').removeClass('d-none');
    alarm = setTimeout(function () {
      $('.detail-page .alert').addClass('d-none');
    }, 5000);
  });

  $('.detail-page .alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('input[name="account-type"]').change(function() {
    if($(this).val() === 'b') {
      $('.business-item').removeClass('d-none');
    } else {
      $('.business-item').addClass('d-none');
    }
  })
});