$(document).ready(function () {
  $('.page').hide();
  $('.index-page').show();
  $('footer').hide();
  $('.create-footer').hide();
  $('.detail-footer').hide();
  $('.add').click(function () {
    $('.page').hide();
    $('.create-page').show();
  });

  $('.create-page').change(function () {
    $('.create-footer').show();
    $('.detail-footer').hide();
    $('footer').slideDown();
  });

  $('.back').click(function() {
    $('.page').hide();
    $('footer').slideUp();
    $('.index-page').show();
  });

  $('textarea').keydown(function (ev) {
    $(this).parent().find('.length').text($(this).val().length);
  });

  var alarm;
  $('#save').click(function () {
    $('.back').click();
    $('.alert').removeClass('d-none');
    var alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

  $('.alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('tbody tr').click(function() {
    $('.page').hide();
    $('.detail-page').show();
    $('.create-footer').hide();
    $('.detail-footer').show();
    $('footer').slideDown();
  });
})