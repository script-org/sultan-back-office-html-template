$(document).ready(function () {

  var alarm;
  $('footer').hide();

  $('#save').click(function () {
    $('.page').hide();
    $('.detail-page').show();
    $('.create-footer').hide();
    $('.detail-footer').show();
  });

  $('.detail-page .alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('.supplier-info').hide();
  $('.page').hide();
  $('.create-page').show();

  $('#create-bill').click(function () {
    $('.page').hide();
    $('.create-page').show();
  });

  $('.back').click(function () {
    window.location.href = './bookeeping.expense.html';
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

  $('#supplier-select').change(function () {
    if ($(this).val() !== 'new') {
      $('.supplier-list').hide();
      $('.supplier-info').show();
    } else {
      $('#supplier-add-modal').modal('show');
      $(this).val('');
    }
  });

  $('.supplier .close').click(function () {
    $('.supplier-list').show();
    $('.supplier-info').hide();
    $('#supplier-select').val('');
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

  $('#edit').click(function() {
    $('.detail-page').hide();
    $('.create-page').show();
    $('footer').hide();
    $('.create-page #title').text('Edit #EX1001');
  });
});