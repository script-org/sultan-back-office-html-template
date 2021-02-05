$(document).ready(function () {
  footerControl();
  backControl();
  var tr_html = '<tr> \
                  <td > \
                          <span>Taanayel Laban 500g</span><br> \
                          <span class="text-muted"><small>SKU 1000-110</small></span> \
                        </td> \
                        <td>528203849211</td> \
                        <td class="text-right"> \
                          <input type="number" class="form-control text-right w-80 float-right" value="99"> \
                        </td> \
                        <td class="text-right"> \
                          <a class="text-danger i-con-h-a product-delete"> \
                            <i class="mr-2 i-con i-con-trash" style="margin-right: -10px !important;"><i></i></i> \
                          </a> \
                        </td> \
                      </tr>';

  $('.back').click(function () {
    location.href = "./products.all.html";
  });
  $('#content-body').change(function () {
    $('footer').slideDown();
  });
  $('footer').show();
  $('footer .cancel').click(function () {
    $('input[type="text"]').val('99');
    $('.input-search').val('');
    $('#content').find(':checkbox').eq(0).prop('checked', true);
    $('#content').find(':checkbox').eq(1).prop('checked', false);
    back();
  });
  $('footer .save').click(function () {
    back();
    notification($(this).attr('title'));
  });

  $('#content-body').on('click', '.product-delete', function () {
    $(this).closest('tr').remove();
  });

  $('.add-product').click(function () {
    $('.product-table tbody').append(tr_html);
  });
  $('#switch-print-name').change(function () {
    if ($(this).prop('checked')) {
      $('.label-name').text('Taanayel Laban 500g');
      $('.label-print-name').removeClass('text-secondary');
      $('.label-print-name').addClass('text-dark');
    }
    else {
      $('.label-name').text('');
      $('.label-print-name').removeClass('text-dark');
      $('.label-print-name').addClass('text-secondary');
    }
  });

  $('#switch-print-price').change(function () {
    if ($(this).prop('checked')) {
      $('.label-price').text('L£ 25,000');
      $('.label-print-price').removeClass('text-secondary');
      $('.label-print-price').addClass('text-dark');
    }
    else {
      $('.label-price').text('');
      $('.label-print-price').removeClass('text-dark');
      $('.label-print-price').addClass('text-secondary');
    }
  });
  $('.Barcode-Sku').change(function () {
    if ($(this).val() == 3) {
      $('footer .save').attr('disabled', true);
      $('.label-barcode').hide();
      $('.label-sku').hide();
    }
    else if ($(this).val() == 2) {
      $('footer .save').attr('disabled', false);
      $('.label-barcode').hide();
      $('.label-sku').show();
    }
    else if ($(this).val() == 1) {
      $('footer .save').attr('disabled', false);
      $('.label-barcode').show();
      $('.label-sku').hide();
    }
    else if ($(this).val() == 0) {
      $('footer .save').attr('disabled', false);
      $('.label-barcode').show();
      $('.label-sku').show();
    }
  });

  $('#content-body').on('keyup', '.input-search', function (e) {
    if (e.keyCode == 13) {
      $('.product-table table tbody').append(tr_html);
    }
  });
});