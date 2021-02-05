$(document).ready(function() {
  $('footer').hide();
  $('.alert').hide();
  $('.alert').removeClass('d-none');
  $('#content input').keydown(function() {
    $('footer').slideDown();
  });

  $('.index-page').change(function() {
    $('footer').slideDown();
  });

  $('#content select').change(function() {
    $('footer').slideDown();
  });

  $('#content input:checkbox').change(function() {
    $('footer').slideDown();
  });

  $('#cancel').click(function() {
    $('footer').slideUp();
    $('input[type="text"]').val('');
    $('input[type="checkbox"]').prop('checked', true);
    $('select').val('0');
    $('#prefix').val('#');
  });

  $('#prefix').keyup(function() {
    $('.prefix-clone').text($(this).val());
  });

  $('#suffix').keyup(function() {
    $('.suffix-clone').text($(this).val());
  });

  var alarm;

  $('#save').click(function () {
    $('footer').slideUp();
    $('.alert').fadeIn();
    var alarm = setTimeout(function () {
      $('.alert').fadeOut();
    }, 5000);
  }); 

  $('.ui-switch input').change(function() {
      $(this).closest('div').find('.font-weight-bold').toggleClass('text-dark');
      $(this).closest('div').find('.description').toggleClass('text-dark');
  });
})