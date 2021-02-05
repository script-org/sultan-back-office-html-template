$(document).ready(function () {

  $('footer').hide();
  $('footer').removeClass('d-none');
  $('.reset-page').hide();
  $('.reset-page').removeClass('d-none');
  $('.restore-page').hide();
  $('.restore-page').removeClass('d-none');
  footerControl();

  $('.back').click(function () {
    $('.index-page').show();
    $('.reset-page').hide();
    $('.restore-page').hide();
    $('#save').text('Save');
    $('footer').slideUp();
    $('#restore-online-time').val('');
    $('#store').val('');
  });

  $('.delete').click(function () {
    var name = $('#program-name').val();
    $('#delete-program-name').text(name);
  });

  $('#save').click(function () {
    $('#restore-modal .modal-title').text('Restore system');
    var body = `Are you sure you want to restore your system to backup from <b>May 12, 2020</b>?`
    $('#restore-modal .modal-body').html(body);
    $('#modal-restore').removeClass('d-none');
  });

  var resetProcess;
  var restoreProcess;

  $('#modal-reset').click(function () {
    $(this).hide();
    $('#modal-reset-cancel').text('Close');
    $('.step-1').addClass('d-none');
    $('.step-2').removeClass('d-none');
    var percent = 0;
    resetProcess = setInterval(function () {
      if (percent < 100) {
        percent++
        $('#reset-modal .progress-bar').css('width', percent + '%');
        $('#reset-modal .progress-percent').text(percent + '%');
      }
    }, 100);
  });

  $("#reset-modal").on('hide.bs.modal', function () {
    $(this).find('.step-1').removeClass('d-none');
    $(this).find('.step-2').addClass('d-none');
    $('#reset-modal .progress-bar').css('width', '0%');
    $('#reset-modal .progress-percent').text('0%');
    $('#modal-reset-cancel').text('Cancel');
    $('#modal-reset').show();
    clearInterval(resetProcess);
  });

  $("#restore-modal").on('hide.bs.modal', function () {
    $(this).find('.step-1').removeClass('d-none');
    $(this).find('.step-2').addClass('d-none');
    $('#restore-modal .progress-bar').css('width', '0%');
    $('#restore-modal .progress-percent').text('0%');
    $('#modal-restore-cancel').text('Cancel');
    $('#modal-restore').show();
    clearInterval(restoreProcess);
  });

  $('#modal-restore').click(function () {
    $(this).hide();
    $('.step-1').addClass('d-none');
    $('.step-2').removeClass('d-none');
    var percent = 0;
    restoreProcess = setInterval(function () {
      if (percent < 100) {
        percent++
        $('#restore-modal .progress-bar').css('width', percent + '%');
        $('#restore-modal .progress-percent').text(percent + '%');
      }
    }, 100);
  });

  $('.index-page').change(function () {
    $('footer').slideDown();
  })

  $('#reset').click(function () {
    $('.index-page').hide();
    $('.restore-page').hide();
    $('.reset-page').show();
    $('footer').slideDown();
  });

  $('#restore').click(function () {
    $('.index-page').hide();
    $('.reset-page').hide();
    $('.restore-page').show();
    $('footer').slideDown();
  });

  $('#store').change(function () {
    $('footer').slideDown();
  });

  $('#restore-online-time').change(function () {
    $('footer').slideDown();
  });

  $('input[name="frequency"]').click(function () {
    $('footer').slideDown();
    var flag = $(this).parent().text().trim();
    var result = '';
    if (flag === 'Never') {
      result = '';
      $('.back-time-parent').addClass('d-none');
      $('.first-backup-parent').addClass('d-none');
      $('.second-backup-parent').addClass('d-none');
    } else if (flag === 'One a day') {
      result = '<br>one a day at ' + ($('#back-time').val() + ' ' + $('#back-time').next().find('select').val());
      $('.back-time-parent').removeClass('d-none');
      $('.first-backup-parent').addClass('d-none');
      $('.second-backup-parent').addClass('d-none');
    } else {
      result = '<br>twice a day at ' + (
        $('#first-backup').val() + ' ' +
        $('#first-backup').next().find('select').val() + ' and ' +
        $('#second-backup').val() + ' ' +
        $('#second-backup').next().find('select').val()
      );
      $('.back-time-parent').addClass('d-none');
      $('.first-backup-parent').removeClass('d-none');
      $('.second-backup-parent').removeClass('d-none');
    }
    $('.backup-clone').html(result);
  });

  $('#back-time').next().find('select').change(function() {
    result = '<br>one a day at ' + $('#back-time').val() + ' ' + $('#back-time').next().find('select').val();
    $('.backup-clone').html(result);
  })

  $('#back-time').keyup(function () {
    result = '<br>one a day at ' + $('#back-time').val() + ' ' + $('#back-time').next().find('select').val();
    $('.backup-clone').html(result);
  });

  $('#first-backup').next().find('select').change(function() {
    result = '<br>twice a day at ' + (
      $('#first-backup').val() + ' ' +
      $('#first-backup').next().find('select').val() + ' and ' +
      $('#second-backup').val() + ' ' +
      $('#second-backup').next().find('select').val()
    );
    $('.backup-clone').html(result);
  });

  $('#second-backup').next().find('select').change(function() {
    result = '<br>twice a day at ' + (
      $('#first-backup').val() + ' ' +
      $('#first-backup').next().find('select').val() + ' and ' +
      $('#second-backup').val() + ' ' +
      $('#second-backup').next().find('select').val()
    );
    $('.backup-clone').html(result);
  });

  $('#first-backup').keyup(function () {
    result = '<br>twice a day at ' + (
      $('#first-backup').val() + ' ' +
      $('#first-backup').next().find('select').val() + ' and ' +
      $('#second-backup').val() + ' ' +
      $('#second-backup').next().find('select').val()
    );
    $('.backup-clone').html(result);
  });

  $('#second-backup').keyup(function () {
    result = '<br>twice a day at ' + (
      $('#first-backup').val() + ' ' +
      $('#first-backup').next().find('select').val() + ' and ' +
      $('#second-backup').val() + ' ' +
      $('#second-backup').next().find('select').val()
    );
    $('.backup-clone').html(result);
  });

  $('.time-format').mask('99:99');
});