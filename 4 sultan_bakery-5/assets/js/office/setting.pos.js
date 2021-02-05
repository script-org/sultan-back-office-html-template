$(document).ready(function () {

  footerControl();
  backControl();
  addItemControl();
  tableRowControl();

  $('tr').click(function () {
    $('.save').attr('title', 'Device updated successfully');
    $('#title').text('Edit Cashier 1');
  });

  $('.edit-page input').keydown(function() {
    $('.save').removeAttr('disabled');
  });

  $('.edit-page select').change(function() {
    $('.save').removeAttr('disabled');
  });

  $('.add').click(function () {
    $('footer').slideDown();
    $('.save').attr('disabled', true);
    $('.save').attr('title', 'New device added successfully');
    $('#title').text('Add POS device');
  })
});