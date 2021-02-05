$(document).ready(function() {
  backControl();

  $('.cancel').click(function() {
    $('textarea').val('');
    $('input').val('');
  });

  $('.notification-table tr').click(function() {
    $('#title').text('Edit recipient');
    $('.index-page').hide();
    $('.edit-page').show();
    $('.scroll-container').scrollTop(0)
  });

  $('.stuff-table tr').click(function() {
    $('#add-recipient-modal').modal('show');
  });

  $('#preview').click(function() {
    $('#preview-modal .modal-body b').text($('#subject').val());
    $('#preview-modal .modal-body span').text($('#message').val());
  });
  
  $('footer').hide();
  $('footer').removeClass('d-none');
  $('footer .delete').hide();

  $('footer .save').click(function () {
    back();
    notification($(this).attr('title'));
  });


  $('.edit-page input').keydown(function() {
    $('#save').attr('disabled', false);
  });

  $('.edit-page textarea').keydown(function() {
    $('#save').attr('disabled', false);
  });

  

  $('#delete-receipt').click(function() {

  });
});