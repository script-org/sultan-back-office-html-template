$(document).ready(function () {

  var isEdit = false;

  $('.alert').hide();
  $('.alert').removeClass('d-none');

  $('.category-edit').keyup(function () {
    $('.save').removeAttr('disabled');
    $('.cancel').removeAttr('disabled');
    $('.delete-btn').removeAttr('disabled');
  });

  function format() {
    $('input').val('');
    $('.save').attr('disabled', true);
    $('.cancel').attr('disabled', true);
    $('#category-edit-title').text('Create modifier');
    $('.delete-btn').addClass('d-none');
    isEdit = false;
  }
  $('.save').click(function () {
    if (isEdit) {
      notification('Modifier updated successfully');
    } else {
      notification('Modifier added successfully');
    }
  });

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

  $('.delete').click(function () {
    notification('Modifier has been deleted successfully');
  });

  $('.bootstrap-tables-with-sortable').on('bt-loaded', function () {
    $('#sortable-table-later').html5sortable();
  })

  $('.bootstrap-tables-with-sortable').on('click', '.edit', function () {
    isEdit = true;
    $('#category-edit-title').text('Edit modifier');
    $('#name').val($(this).closest('tr').find('td').eq(1).text().trim());
    $('.option-name').val('Extra Cheese');
    $('.option-value').val('1,000');
    $('.save').attr('disabled', true);
    $('.cancel').attr('disabled', true);
    $('.delete-btn').attr('disabled', true);
    $('.delete-btn').removeClass('d-none');
  });

  $('.leave').click(function () {
    format();
  })

  $('#inventory-card').on('keyup', '#composite-product-search', function (e) {
    if (e.keyCode == 13) {
      $('#composite-table table').append('<tr>\
      <td>\
        <b>New product Added by Search</b><br>\
        <span class="text-muted">SKU 20008 | 594098900 | VAT 31%</span>\
      </td>\
      <td class="text-right" width="100px">\
        <input type="number" class="number-format form-control text-right quantity"\
          aria-label="quantity" value="' + (product_add_sortby == 'each' ? '0' : '0.000') + '" aria-describedby="basic-addon2">\
      </td>\
      <td class="text-right cost">0</td>\
      <td class="text-right">\
        <a class="text-danger delete-composite i-con-h-a">\
          <i class="i-con i-con-trash"><i></i></i>\
        </a>\
      </td>\
    </tr>');
    }
  });
});