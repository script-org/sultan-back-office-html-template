$(document).ready(function() {
  footerControl();
  $('footer').hide();
  $('footer').removeClass('d-none');
  $('input').change(function() {
    $('footer').slideDown();
  });

  $('input').keydown(function() {
    $('footer').slideDown();
  });

  $('textarea').keydown(function() {
    $('footer').slideDown();
  });

  $('#cancel').click(function() {
    $('footer').slideUp();
  });
});