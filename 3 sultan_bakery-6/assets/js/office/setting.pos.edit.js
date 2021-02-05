$(document).ready(function () {
  unsavedManager(true, ['#content-body input', '#content-body select'], 'POS device updated successfully', true, 'Device deleted successfully');
  var program_name = $('#ghost .title-item-name').text() == '' ? 'Cashier' : $('#ghost .title-item-name').text();
  $('#title').text('Edit ' + program_name);  
  $('#pos-featuredPage').change(function () {
    if($(this).val() == 0)
    {
      $('.button-card').addClass('d-none');
    }
    else{
      $('.button-card').removeClass('d-none');
    }
  });
});