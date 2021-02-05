$(document).ready(function () {
  $('body').on('click', '.add-modifier-delete', function () {
    $(this).parent().parent().addClass('d-none');
  });
  $('body').on('click', '.add-modifier-delete1', function () {
    $(this).parent().parent().find('input').val('');
  });
  $('.add-row').click(function () {
    var temp = 1;
    while (!$('#sortable-handle').find('.list-item').eq(temp).hasClass('d-none')) {
      if (temp >= 10)
        break;
      temp++;
    }
    $('#sortable-handle').find('.list-item').eq(temp).removeClass('d-none');
    index = temp;
  });

  $('#add-modifier-modal').keyup(function () {
    $('.save').removeAttr('disabled');
  });
  $('.save').click(function () {
    location.href = "./products.modifier.html";
  });
});