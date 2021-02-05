$(document).ready(function () {
  unsavedManager(true, ['#content-body input', '#content-body textarea'], 'Notification template updated successfully');
  var title = $('#ghost .title-item-name').text() == '' ? 'Email receipt' : $('#ghost .title-item-name').text();
  $('#title').text('Edit ' + title);
  if (title.includes('WhatsApp')) {
    $('#preview1').hide();
    $('#preview2').show();
    $('#email-subject').hide();
    $('#email-body').text('Message');
    $('.notification').text('Send test WhatsApp');
  }
  else {
    $('#preview1').show();
    $('#preview2').hide();
    $('#email-subject').show();
    $('#email-body').text('Email body(HTML)');
    $('.notification').text('Send test email');
  }

  $('#preview').click(function () {
    $('#preview-modal .modal-body b').text($('#subject').val());
    $('#preview-modal .modal-body span').text($('#message').val());
  });
});