
$(document).ready(function () {
  $('.import-start').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-1').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-2').click(function () {
    $('.step-1').hide();
    $('.step-2').show();
    $('.step-3').hide();
  });

  $('.to-step-3').click(function () {
    $('.step-1').hide();
    $('.step-2').hide();
    $('.step-3').show();
    var percent = 0;
    setInterval(function () {
      percent < 100 ? percent++ : '';
      $('.progress-bar').css('width', percent + '%');
      $('.progress-bar-percent').text(percent + '% complete');
    }, 50);
  });
});
