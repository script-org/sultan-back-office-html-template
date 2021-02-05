$(document).ready(function () {
  $('footer').hide();
  $('footer').removeClass('d-none');
  $('footer .save').click(function () {
    notification($(this).attr('title'));
    $('footer').slideUp();
  });

  // $('.round-rule-div').hide();
  // $('.round-rule').addClass('d-none');
  // $('.round-rule-0').removeClass('d-none');
  $('.round-interval').change(function () {
    if ($(this).val() == 1) {
      $('.round-rule-div').addClass('d-none');
    } else {
      $('.round-rule-div').removeClass('d-none');
      $('.round-rule-0').removeClass('d-none');
    }
    $('footer').slideDown();
  });

  $('.round-rule').change(function () {
    //   $('.round-rule').addClass('d-none');
    $('.round-rule-0').addClass('d-none');
    $('.round-rule-1').addClass('d-none');
    $('.round-rule-2').addClass('d-none');
    $('.round-rule-3').addClass('d-none');
    $('.' + $(this).val()).removeClass('d-none');
    $('footer').slideDown();
  });

  $('.continue').click(function () {
    $('.round-interval').val('1');
    $('.round-rule-div').addClass('d-none');
    // $('.round-rule-0').addClass('d-none');
    // $('.round-rule-1').addClass('d-none');
    // $('.round-rule-2').addClass('d-none');
    // $('.round-rule-3').addClass('d-none');
  });

  $('footer .cancel').click(function () {
    if ($('footer .save').hasClass('d-none')) {
      location.href = './products.all.html';
    } else {
      $('#leave-modal').modal('show');
    }
  });

});