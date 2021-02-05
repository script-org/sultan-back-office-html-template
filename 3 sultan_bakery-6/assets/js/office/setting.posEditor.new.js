$(document).ready(function () {
  $('.bootstrap-tables').on('all.bs.table', function(e) {
    $(this).removeClass('table-bordered');
  });

  unsavedManager(true, ['#content-body input'], '');

  var featureName = '';
  $('#info-container input').keyup(function() {
    featureName = $(this).val();
  });

  $('footer .save').off('click');
  $('footer .save').click(function() {
    notification('b'+ featureName + 'b' + ' featured list added successfully');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });

  $('.my-container').dad();
});
