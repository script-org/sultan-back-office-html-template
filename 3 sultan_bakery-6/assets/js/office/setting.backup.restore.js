$(document).ready(function () {
  $('.bootstrap-tables').on('all.bs.table', function(e) {
    $(this).removeClass('table-bordered');
  });
  $('footer').hide();
  $('footer').removeClass('d-none');
  $('.restore-page').removeClass('d-none');
  footerControl();

  $('.back').click(function () {
    $('.index-page').show();
    $('.restore-page').hide();
    $('#save').text('Save');
    $('footer').slideUp();
    $('#restore-online-time').val('');
    $('#store').val('');
  });

  // $('.delete').click(function () {
  //   var name = $('#program-name').val();
  //   $('#delete-program-name').text(name);
  // });

  // $('#save').click(function () {
  //   $('#restore-modal .modal-title').text('Restore system');
  //   var body = `Are you sure you want to restore your system to backup from <b>May 12, 2020</b>?`
  //   $('#restore-modal .modal-body').html(body);
  //   $('#modal-restore').removeClass('d-none');
  // });

  var resetProcess;
  var restoreProcess;

  // $('#modal-reset').click(function () {
  //   $(this).hide();
  //   $('#modal-reset-cancel').text('Close');
  //   $('.step-1').addClass('d-none');
  //   $('.step-2').removeClass('d-none');
  //   var percent = 0;
  //   resetProcess = setInterval(function () {
  //     if (percent < 100) {
  //       percent++
  //       $('#reset-modal .progress-bar').css('width', percent + '%');
  //       $('#reset-modal .progress-percent').text(percent + '%');
  //     }
  //   }, 100);
  // });

  // $("#reset-modal").on('hide.bs.modal', function () {
  //   $(this).find('.step-1').removeClass('d-none');
  //   $(this).find('.step-2').addClass('d-none');
  //   $('#reset-modal .progress-bar').css('width', '0%');
  //   $('#reset-modal .progress-percent').text('0%');
  //   $('#modal-reset-cancel').text('Cancel');
  //   $('#modal-reset').show();
  //   clearInterval(resetProcess);
  // });

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
    $(this).hide();
  });

  $('.index-page').change(function () {
    $('footer').slideDown();
  })

  $('.dz-message').click(function () {
    $('footer').slideDown();
  })

  // $('#reset').click(function () {
  //   $('.index-page').hide();
  //   $('.restore-page').hide();
  //   $('.reset-page').show();
  // });

  $('#restore').click(function () {
    $('.index-page').hide();
    // $('.reset-page').hide();
    $('.restore-page').show();
  });


  $('#store').click(function () {
    $('footer').slideDown();
  });

  $('#restore-online-time').change(function () {
    $('footer').slideDown();
  });

  $('#restore-online-time').click(function () {
    $('footer').slideDown();
  });

  $('input[name="frequency"]').click(function () {
    $('footer').slideDown();
    var flag = $(this).parent().text().trim();
    var result = '';
    if (flag === 'Never') {
      result = 'is disabled';
      $('.back-time-parent').addClass('d-none');
      $('.first-backup-parent').addClass('d-none');
      $('.second-backup-parent').addClass('d-none');
    } else if (flag === 'Once a day') {
      result = 'once a day at ' + ($('#back-time').val() + ' ' + $('#back-time').next().find('select').val());
      $('.back-time-parent').removeClass('d-none');
      $('.first-backup-parent').addClass('d-none');
      $('.second-backup-parent').addClass('d-none');
    } else {
      result = 'twice a day at ' + (
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

  $('#back-time').next().find('select').change(function () {
    result = '<br>one a day at ' + $('#back-time').val() + ' ' + $('#back-time').next().find('select').val();
    $('.backup-clone').html(result);
  })

  $('#back-time').keyup(function () {
    result = '<br>one a day at ' + $('#back-time').val() + ' ' + $('#back-time').next().find('select').val();
    $('.backup-clone').html(result);
  });

  $('#first-backup').next().find('select').change(function () {
    result = '<br>twice a day at ' + (
      $('#first-backup').val() + ' ' +
      $('#first-backup').next().find('select').val() + ' and ' +
      $('#second-backup').val() + ' ' +
      $('#second-backup').next().find('select').val()
    );
    $('.backup-clone').html(result);
  });

  $('#second-backup').next().find('select').change(function () {
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

  $('#leave-modal .continue').click(function () {
    $($('input[name=frequency]')[0]).click();
    $('footer').slideUp();
  });

  $('.time-format').mask('99:99');
});