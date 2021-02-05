$(document).ready(function () {
  $('footer').removeClass('d-none');
  $('footer').hide();
  $('.alert').hide();
  $('.alert').removeClass('d-none');
  $('#content input').keydown(function () {
    $('footer').slideDown();
  });

  $('#content select').change(function () {
    $('footer').slideDown();
  });
  $('#content input').change(function () {
    $('footer').slideDown();
  });

  $('#prefix').keyup(function () {
    $('.prefix-clone').text($(this).val());
  });

  $('#suffix').keyup(function () {
    $('.suffix-clone').text($(this).val());
  });

  $('footer .cancel').click(function () {
    $('input[type="text"]').val('');
    $('input[type="checkbox"]').prop('checked', true);
    $('select').val('0');
    $('#prefix').val('#');
    if ($('footer .save').attr('disabled') == 'disabled') {
      back();
    } else {
      $('#leave-modal').modal('show');
    }
    $('footer').slideUp();
  });

  var alarm;

  $('footer .save').click(function () {
    $('footer').slideUp();
    notie.alert({ type: 'success', text: 'Changes saved successfully.' });
  });

  $('.ui-switch input').change(function () {
    $(this).closest('div').find('.font-weight-bold').toggleClass('text-dark');
    $(this).closest('div').find('.description').toggleClass('text-dark');
  });

  $(".number-format").on('change', function () {
    $(this).val($(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  });
})