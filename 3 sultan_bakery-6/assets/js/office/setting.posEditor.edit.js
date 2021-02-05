$(document).ready(function () {
  $('.bootstrap-tables').on('all.bs.table', function(e) {
    $(this).removeClass('table-bordered');
  }); 
  var featureName = $('#ghost .title-item-name').text() == '' ? 'Holiday' : $('#ghost .title-item-name').text();
  $('#title').text(featureName);
  $('#featured_name').val(featureName);

  unsavedManager(true, ['#content-body input'], '', true, '');
  $('#featured_name').keyup(function() {
    featureName = $(this).val();
  })
  $('footer .save').off('click');
  $('footer .save').click(function() {
    notification('b'+ featureName + 'b' + ' featured list updated successfully');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });

  $('#delete-modal .continue').off('click');
  $('#delete-modal .continue').click(function() {
    notification('b'+ featureName + 'b' + ' featured list deleted successfully');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });

  $('.my-container').dad();
});