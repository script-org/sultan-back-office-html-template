$(document).ready(function () {
  unsavedManager(true, ['#content-body input', '#content-body select'], 'New device added successfully');
  $('#pos-featuredPage').change(function () {
    if($(this).val() == 0)
    {
      $('.button-card').addClass('d-none');
    }
    else{
      $('.button-card').removeClass('d-none');
    }
  })
});