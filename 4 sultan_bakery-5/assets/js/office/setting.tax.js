$(document).ready(function () {

  footerControl();
  backControl();
  addItemControl();
  tableRowControl();

  $('tr').click(function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('#title').text('Edit VAT 11%');
      $('.save').attr('title', '<b>VAT 11%</b> updated successfully.');
    }
  });

  $('.add').click(function () {
    $('#title').text('Add tax');
    $('.save').attr('title', 'New tax has been added successfully.');
  });

  $('tbody tr').click(function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('footer').slideDown();
    }
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

});