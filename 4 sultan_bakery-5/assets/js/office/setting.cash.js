$(document).ready(function () {
  footerControl();

  $('#round-rule').change(function () {
    $('.round-rule').addClass('d-none');
    $('.' + $(this).val()).removeClass('d-none');
  });

  $('footer .cancel').click(function() {
    $('select').val('0');
    $('.round-rule-1').addClass('d-none');
    $('.round-rule-2').addClass('d-none');
  });
});