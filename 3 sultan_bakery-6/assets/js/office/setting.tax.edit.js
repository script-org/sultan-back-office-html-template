$(document).ready(function () {
  var taxName = $('#ghost .title-item-name').text() == '' ? 'VAT 11%' : $('#ghost .title-item-name').text();
  $('#title').text('Edit ' + taxName);
  $('#tax-name1').val(taxName);
  $('#tax-name1').keyup(function() {
    taxName = $(this).val();
  })

  unsavedManager(true, ['#content-body input', '#content-body select'], '', true, '')
  $('footer .save').off('click');
  $('footer .save').click(function () {
    notification(taxName + ' updated successfully.');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });
  $('#delete-modal .continue').off('click');
  $('#delete-modal .continue').click(function() {
    notification(taxName + ' deleted successfully.');
    $('footer .save').attr('disabled', true);
    $('#ghost .all-link')[0].click();
  });

  $('.checkbox-item').click(function () {
    if ($('.checkbox-item').length === $('.checkbox-item:checked').length) {
      $('#all-check').prop('checked', true);
    } else {
      $('#all-check').prop('checked', false);
    }
  });

  $('#all-check').click(function () {
    $('input[type="checkbox"]').prop('checked', $(this).prop('checked'));
  });

  $('.tax-calculation').change(function () {
    if ($(this).val() == 0) {
      $('.tax-text').text('All product prices will include the tax rate you have set');
    }
    else {
      $('.tax-text').text('All product prices will not include the tax rate you have set, the tax rate will be added at checkout.');
    }
  });
});