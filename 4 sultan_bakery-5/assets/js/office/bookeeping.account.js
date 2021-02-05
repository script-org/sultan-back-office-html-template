$(document).ready(function() {
  var alarm;

  $('.list-item').click(function() {
    $('.title').text($(this).find('.h5').text() + ' account');
    $('.list-item').removeClass('active');
    $('.list-item .h5').removeClass('text-primary');
    $(this).addClass('active');
    $(this).find('.h5').addClass('text-primary');
  });

  $('#reconcile').click(function() {
    $('#reconcile-modal').modal('hide');
    $('.alert').removeClass('d-none');
    var alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

  $('.alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });
});