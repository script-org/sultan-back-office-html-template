$(document).ready(function () {
  $('footer').removeClass('d-none');
  $('footer .cancel').click(function () {
    if ($('footer .save').hasClass('d-none')) {
      location.href = './products.all.html';
    } else {
      $('#leave-modal').modal('show');
    }
  });

  $('#leave-modal .continue').click(function () {
    $('.profile-page textarea').val('');
    back();
  });
  $('#title').text($('#ghost .title-item-name').text());
  $('footer .save').click(function () {
    location.href = './products.all.html';
    notification($(this).attr('title'));
  });

  var varients_data = [{ variant: 'Size', options: ['small', 'medium', 'large'] },
  { variant: 'Color', options: ['red', 'white', 'blue'] },
  { variant: 'Flavor', options: ['apple', 'pineapple', 'strawberry'] }];

  function product_table_hide_show(targett, Show) {
    if (Show) {
      targett.eq(2).removeClass('text-secondary');
      targett.eq(2).addClass('text-dark');
      targett.eq(3).show();
      targett.eq(4).show();
      targett.eq(5).show();
      targett.eq(6).show();
    }
    else {
      targett.eq(2).removeClass('text-dark');
      targett.eq(2).addClass('text-secondary');
      targett.eq(3).hide();
      targett.eq(4).hide();
      targett.eq(5).hide();
      targett.eq(6).hide();
    }
  }

  function product_table_CSS_hide_show(targett, Show) {
    if (Show) {
      targett.eq(3).addClass('hide');
      targett.eq(4).removeClass('hide');
    }
    else {
      targett.eq(3).removeClass('hide');
      targett.eq(4).removeClass('hide');
    }
  }

  function varient_render(curLen, names) {
    if (curLen == varients_data.length) {
      let html = '<tr>' +
        '<td>' + names[0];
      for (let i in names) {
        if (i == 0) continue;
        html += ' / ' + names[i];
      }
      html = html + '</td>' +
        '<td><span class="text-muted">L£ 0</span></td>\
     <td><div class= "input-group"> \
        <div class="input-group-prepend"> \
                        <span class="input-group-text" id="basic-addon2">L£</span> \
                      </div> \
                      <input type="text" id="price" class="number-format form-control" aria-label="Recipient username" aria-describedby="basic-addon2" value="1500"> \
                    </div> \
      </td > \
      <th><input type="text" class="form-control" value="' + (10000 + parseInt(Math.random() * 90000)) + '"></th>\
      <th><input type="number" class="form-control"></th>\
      <th>\
        <a class="text-danger i-con-h-a variant-delete">\
          <i class="i-con i-con-trash"><i></i></i>\
        </a>\
      </th>\
    </tr>';
      $('#variant-table tbody').append(html);
      return;
    }
    for (let i in varients_data[curLen].options) {
      names[curLen] = varients_data[curLen].options[i];
      varient_render(curLen + 1, names);
    }
  }

  function product_availablity_make_render(curLen, names, location) {
    if (curLen == varients_data.length) {
      let html = '<div class="row d-flex py-2 align-items-center"> \
      <div style="width: 30px" class="text-right"></div > \
        <div class="col-md-2">  \
          <label class="ui-switch ui-switch-md product-availablity-chk">  \
            <input type="checkbox" checked> \
              <i></i> \
                                </label> \
                              </div> \
          <div class="col">' +
        location + '</div> \
        <div class="col-md-2 hide"> ' + names[0];
      for (let i in names) {
        if (i == 0) continue;
        html += ' / ' + names[i];
      }
      html += '</div> \
                              <div class="col-md-1"> \
        <span class="stock" > 0</span > \
                              </div> \
        <div class="col-md-2" > <input type="number" class="form-control low-stock" value="0" /></div> \
      <div class="col-md-2"><input type="number" class="form-control optimal-stock" value="0" /> \
                              </div>';
      $('#accordion').append(html);
      return;
    }
    for (let i in varients_data[curLen].options) {
      names[curLen] = varients_data[curLen].options[i];
      product_availablity_make_render(curLen + 1, names, location);
    }
  }

  function add_product_table() {
    let html = '<div class=" row d-flex py-2 align-items-center"> \
      <div style="width: 30px" class="text-right"></div> \
      <div class="col-md-2">  \
        <label class="ui-switch ui-switch-md product-availablity-chk"> \
          <input type="checkbox" checked> \
            <i></i> \
                                </label > \
                              </div> \
        <div class="col">West Side Location</div> \
        <div class="col-md-2 hide">small/blue/apple</div> \
          <div class="col-md-1"> \
            <span class="stock">0</span> \
          </div> \
          <div class="col-md-2"><input type="number" class="form-control low-stock" value="0" /></div> \
          <div class="col-md-2"><input type="number" class="form-control optimal-stock" value="0" /> \
          </div> \
        </div> \
        <div class="row d-flex py-2 align-items-center"> \
          <div style="width: 30px" class="text-right"> \
            <a class="text-secondary" data-toggle="collapse" data-target="#collapseOne" \
              aria-controls="collapseOne"> \
              <i class="la la-angle-down product-collapse"></i> \
            </a> \
          </div> \
          <div class="col-md-2"> \
            <label class="ui-switch ui-switch-md product-availablity-chk"> \
              <input type="checkbox" checked> \
                <i></i> \
                                </label> \
                              </div> \
            <div class="col">East Side Location</div> \
            <div class="col-md-2 hide">small/blue/apple</div> \
              <div class="col-md-1"> \
                <span class="stock">0</span> \
              </div> \
      <div class="col-md-2" > <input type="number" class="form-control low-stock" value="0" /></div > \
              <div class="col-md-2"><input type="number" class="form-control optimal-stock" value="0" /> \
              </div> \
            </div> \
          <div id="collapseOne" class="collapse" data-parent="#accordion" > \
          <div class="row children py-3"> \
                <div style="width: 30px" class="text-right"> \
                </div> \
                <div class="col-md-2"> \
                </div> \
                <div class="col">Storage room A</div> \
                <div class="col-md-2 hide">small/blue/apple</div> \
                  <div class="col-md-1"> \
                    <span class="stock">0</span> \
                  </div> \
                  <div class="col-md-2"><input type="number" class="form-control low-stock" value="0" /> \
                  </div> \
                  <div class="col-md-2"><input type="number" class="form-control optimal-stock" value="0" /> \
                  </div> \
                </div> \
    <div class="row children py-3"> \
                  <div style="width: 30px" class="text-right"> \
                  </div> \
                  <div class="col-md-2"> \
                  </div> \
                  <div class="col">Sales Floor</div> \
                  <div class="col-md-2 hide">small/blue/apple</div> \
                    <div class="col-md-1"> \
                      <span class="stock">0</span> \
                    </div> \
                    <div class="col-md-2"><input type="number" class="form-control low-stock" value="0" /> \
                    </div> \
                    <div class="col-md-2"><input type="number" class="form-control optimal-stock" value="0" /> \
                    </div> \
                  </div> \
                </div > \
    <div class="row d-flex py-2 align-items-center"> \
                  <div style="width: 30px" class="text-right"></div> \
                  <div class="col-md-2"> \
        <label class="ui-switch ui-switch-md product-availablity-chk"> \
                      <input type="checkbox" checked> \
                        <i></i> \
                                </label> \
                              </div> \
                    <div class="col south-side">South Side Location</div> \
                    <div class="col-md-2 hide">small/blue/apple</div> \
                      <div class="col-md-1"> \
                        <span class="stock">0</span> \
                      </div> \
                      <div class="col-md-2"><input type="number" class="form-control low-stock" value="0" /></div> \
                      <div class="col-md-2"><input type="number" class="form-control optimal-stock" value="0" /> \
                      </div> \
                    </div>';

    $('#accordion').append(html);
  }

  varient_render(0, []);
  $('.alert').hide();
  $('.alert').removeClass('d-none');

  $('#toolbar').hide();

  $('#index-page').on('click', '#table input:checkbox', function () {
    $('#selected-count').text($('tbody input:checked').length);
    if ($('tbody input:checked').length > 0) {
      $('#toolbar').show();
    } else {
      $('#toolbar').hide();
    }
  });

  $('#import-start').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-1').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-2').click(function () {
    $('.step-1').hide();
    $('.step-2').show();
    $('.step-3').hide();
  });

  $('.to-step-3').click(function () {
    $('.step-1').hide();
    $('.step-2').hide();
    $('.step-3').show();
    var percent = 0;
    setInterval(function () {
      percent < 100 ? percent++ : '';
      $('.progress-bar').css('width', percent + '%');
      $('.progress-bar-percent').text(percent + '% complete');
    }, 50);
  });

  $('.select2-multiple').select2({ tags: true, tokenSeparators: [','] });
  $('#supplier_name').select2().on('select2:open', function () {
    let select2 = $(this).data('select2');
    if (!$('.supplier-select2-link').length) {
      select2.$results.parents('.select2-results')
        .prepend('<button class="btn btn-raised supplier-select2-link w-100">Add new supplier</button>')
        .on('click', function (b) {
          $('#supplier-add-modal').modal('show');
          $('#supplier_name').select2('close');
        });
    }
  });
  $('#category_name').select2().on('select2:open', function () {
    let select2 = $(this).data('select2');
    if (!$('.category-select2-link').length) {
      select2.$results.parents('.select2-results')
        .prepend('<button class="btn btn-raised category-select2-link w-100">Add new Category</button>')
        .on('click', function (b) {
          $('#add-category-modal').modal('show');
          $('#category_name').select2('close');
        });
    }
  });
  $('#sub-category').select2();

  $('#composite-switch').change(function () {
    if ($(this).prop('checked')) {
      $('.composite-product').html('<b style="color: black;">Composite product</b>');
      $('#add-variant').hide();
      $('.text-varient').text('Composite products cannot have variants');
      $('#composite-table').removeClass('d-none');
      $('#div-default-purchase-cost').addClass('d-none');
      $('#supplier_name').select2().next().hide();
      $('#composite-supplier-name').removeClass('d-none');
      $('#txt-composite-cost').html('Calculated as the sum of cost of components');
      $('#chk-product-for-sale').prop('checked', true);
      $('#txt-product-for-sale').text('Product for sale');
      $('#variant-table').hide();
    }
    else {
      $('#add-variant').show();
      $('.text-varient').text('Use variants if an item has different sizes, colors or other options');
      $('#composite-table').addClass('d-none');
      $('#div-default-purchase-cost').removeClass('d-none');
      $('#supplier_name').select2().next().show();
      $('#composite-supplier-name').addClass('d-none');
      $('#txt-composite-cost').html('Value updates automatically when you receive inventory');
      $('#chk-product-for-sale').prop('checked', false);
      $('#txt-product-for-sale').text('Product not for sale');
      $('#variant-table').show();
      $('#production-switch').prop('checked', false);
      product_table_hide_show($('.product-availablity-table .border-bottom').children(), 1);
      $('#accordion div.align-items-center').each(function () {
        product_table_hide_show($(this).children(), 1);
      });
    }
    if ($(this).prop('checked') && !$('#production-switch').prop('checked')) {
      product_table_hide_show($('.product-availablity-table .border-bottom').children(), 0);
      $('#accordion div.align-items-center').each(function () {
        product_table_hide_show($(this).children(), 0);
      });
    }
    else if (!$(this).prop('checked') && $('#production-switch').prop('checked')) {
      product_table_hide_show($('.product-availablity-table .border-bottom').children(), 1);
      $('#accordion div.align-items-center').each(function () {
        product_table_hide_show($(this).children(), 1);
      });
    }
  });

  $('#production-switch').change(function () {
    if (!$('#composite-switch').prop('checked')) {
      $('#production-switch').prop('checked', false);
    }
    if ($('#composite-switch').prop('checked') && $(this).prop('checked')) {
      $('#txt-composite-cost').text('Value updates automatically when you produce or receive this product');
      product_table_hide_show($('.product-availablity-table .border-bottom').children(), 1);
      $('#accordion div.align-items-center').each(function () {
        product_table_hide_show($(this).children(), 1);
      });
    }
    else if ($('#composite-switch').prop('checked') && !$(this).prop('checked')) {
      $('#txt-composite-cost').text('Calculated as the sum of cost of components');
      product_table_hide_show($('.product-availablity-table .border-bottom').children(), 0);
      $('#accordion div.align-items-center').each(function () {
        product_table_hide_show($(this).children(), 0);
      });
    }
    else {
      $('#txt-composite-cost').text('Value updates automatically when you receive inventory');
    }
    if ($(this).prop('checked')) {
      $('.use-production').html('<b style="color: black;">Use production</b>');
      $('#composite-table').removeClass('d-none');
    }
    else {
      $('#composite-table').addClass('d-none');
    }

  });

  // $('#add-variant').click(function() {
  //   if($('#variant-table').hasClass('d-none')) {
  //     $('#variant-table').removeClass('d-none');
  //   } else {
  //     $('#variant-table').addClass('d-none');
  //   }
  // });
  $('.product-availablity-table').on('change', ':checkbox', function () {
    if ($(this).prop('checked')) {
      if (!$('#composite-switch').prop('checked'))
        product_table_hide_show($(this).closest('div.align-items-center').children(), 1);
      if ((product_add_sortby == 'each' && $(this).closest('div.align-items-center').children().eq(2).text() == 'East Side Location') ||
        (product_add_sortby == 'weight' && $(this).closest('div.align-items-center').children().eq(2).text() == 'West Side Location '))
        $('.product-collapse').show();
      $(this).attr('checked', 'checked');
    }
    else {
      product_table_hide_show($(this).closest('div.align-items-center').children(), 0);
      if ((product_add_sortby == 'each' && $(this).closest('div.align-items-center').children().eq(2).text() == 'East Side Location') ||
        (product_add_sortby == 'weight' && $(this).closest('div.align-items-center').children().eq(2).text() == 'West Side Location ')) {
        $('.product-collapse').hide();
        $('#collapseOne').collapse('hide');
      }
      $(this).removeAttr('checked');
    }
    var len = $('.product-availablity-table :checkbox[checked=checked]').length;
    if (product_add_sortby == 'weight')
      len -= 3;
    if (len >= 2)
      $('#sales').text(len + ' sales outlouts');
    else
      $('#sales').text(len + ' sale outlout');
  });

  $('.edit').click(function () {
    location.href = './products.edit.html';
  });

  $('.create-order').click(function () {
    location.href = './inventory.purchase.html';
  });

  $('.stock-adjust').click(function () {
    location.href = './inventory.stock.html';
  });

  $('.duplicate-product').click(function () {
    location.href = './products.new.html';
  });

  $('footer .delete1').click(function () {
    $('#delete-modal').modal('show');
  });

  $('#btn-delete').click(function () {
    $('#delete-modal').modal('hide');
    $('#toolbar').hide();
    $('input[type="checkbox"]:checked').each(function () {
      if (this.value != 'all' && this.value != 'name') {
        $(this).parent().parent().parent().remove();
      }
    });
    $('table input[type="checkbox"]').prop('checked', false);
    notification('Dairy Khoury Labneh 400g deleted successfully');
  });

  $('#btn-multi-delete').click(function () {
    $('#multi-delete-modal').modal('show');
    var selected_count = parseInt($('#selected-count').text());
    $('#selected-cnt').val(selected_count);
    if (selected_count == 1) {
      $('#modal-multi-title').html('Delete ' + selected_count + ' product');
      $('#body-title').html('Are you sure you about this product? This can’t be undone.');
    } else {
      $('#modal-multi-title').html('Delete ' + selected_count + ' products');
      $('#body-title').html('Are you sure you about these products? These can’t be undone.');
    }
  });

  $('#btn-delete-confirm').click(function () {
    $('#multi-delete-modal').modal('hide');
    $('#toolbar').hide();
    $('input[type="checkbox"]:checked').each(function () {
      if (this.value != 'all' && this.value != 'name') {
        $(this).parent().parent().parent().remove();
      }
    });
    $('table input[type="checkbox"]').prop('checked', false);
    var selected_cnt = parseInt($('#selected-cnt').val());
    if (selected_cnt == 1) {
      notification('1 product deleted successfully');
    } else {
      notification(selected_cnt + ' products deleted successfully');
    }

  });

  $('#table tbody tr').click(function (ev) {
    if (ev.target.nodeName !== 'I' && ev.target.nodeName !== 'INPUT' && ev.target.nodeName !== 'A') {
      location.href = './products.edit.html';
    }
  });

  $('#product-category').change(function () {
    if ($(this).val() === 'new') {
      $('#add-category-modal').modal('show');
    }
  });

  $('#product-supplier').change(function () {
    if ($(this).val() === 'new') {
      $('#add-supplier-modal').modal('show');
    }
  });

  $('.edit-category').click(function () {
    $('delete-btn').removeClass('d-none');
    $('#category-edit-title').html('Edit category');
  });

  $('.delete-action').click(function () {
    $('delete-btn').addClass('d-none');
    $('#category-edit-title').html('Add category');
    $('#delete-modal').modal('hide');
  });

  $('.back').click(function () {
    location.href = 'products.all.html';
  });

  var product_add_sortby = 'each';

  $('input[name=point-round]').change(function () {
    if ($(this).val() == 's_each') {
      $('#sales').text('all sales outlouts');
      $('#accordion').removeClass('scroll-container');
      product_table_CSS_hide_show($('.product-availablity-table .border-bottom').children(), 1);
      $('#accordion').html('');
      add_product_table();
      $('#accordion div.align-items-center').each(function () {
        product_table_CSS_hide_show($(this).children(), 1);
      });
      $('#collapseOne .children').each(function () {
        product_table_CSS_hide_show($(this).children(), 1);
      });
      $('.stock').text('0');
      $('.low-stock').val('0');
      $('.optimal-stock').val('0');
      $('#composite-table .quantity').val('0');
      $('#composite-table .quantity').keyup();
      product_add_sortby = 'each';

    } else if ($(this).val() == 's_weight') {
      $('#sales').text('all sales outlouts');
      $('#accordion').addClass('scroll-container');
      product_table_CSS_hide_show($('.product-availablity-table .border-bottom').children(), 0);
      $('#accordion').html('');
      add_product_table();
      $('#accordion').children().eq(0).hide();
      $('#accordion').children().eq(1).children().eq(2).text('West Side Location ');
      $('#accordion').children().eq(2).remove();
      product_availablity_make_render(0, [], 'West Side Location');
      product_availablity_make_render(0, [], 'East Side Location');
      product_availablity_make_render(0, [], 'South Side Location');
      $('#accordion div.align-items-center').each(function () {
        product_table_CSS_hide_show($(this).children(), 0);
      });
      $('#collapseOne .children').each(function () {
        product_table_CSS_hide_show($(this).children(), 0);
      });
      $('.stock').text('0.000');
      $('.low-stock').val('0.000');
      $('.optimal-stock').val('0.000');
      $('#composite-table .quantity').val('0.000');
      $('#composite-table .quantity').keyup();
      product_add_sortby = 'weight';

    }
  });

  $('#composite-table').on('keyup', '.quantity', function () {
    $(this).parent().next().text(1500 * $(this).val());
    updateInventoryTotalCost();
  });

  $('.barcode-add').click(function () {
    if ($('.added-barcode-div').length < 2) {
      var htmlStr = `
        <div class="col-6 form-group added-barcode-div">
        <label class="d-flex justify-content-between">
          <span>Barcode</span>
          <a class="text-dark barcode-remove">
            <i class="i-con i-con-close">
            </i>
          </a>
        </label>
        <div class="input-group">
          <input type="number" class="form-control px-0">
            <div class="input-group-append">
              <span class="input-group-text p-0 no-bg border-right-0" id="basic-addon2">
                <button class="btn btn-primary">Generate</button>
              </span>
            </div>
          </div>
        </div>
        `;

      $(htmlStr).insertBefore('#div-sku');
    }
    if ($('.added-barcode-div').length == 2) {
      $('.barcode-add').removeClass('text-primary');
      $('.barcode-add').addClass('text-secondary');
    }
  });
  $(document).on('click', '.i-con-close', function () {
    $('.barcode-add').removeClass('text-secondary');
    $('.barcode-add').addClass('text-primary');
  });

  $(document).on("click", ".barcode-remove", function () {
    $(this).closest('.form-group').remove();
  });

  $(document).on("change", "#ckb-tax1", function () {
    if (this.checked) {
      $('#ckb-tax2').prop('checked', false);
      $('#ckb-tax1').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').addClass('text-muted');
    } else {
      $('#ckb-tax2').prop('checked', true);
      $('#ckb-tax2').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("click", "#ckb-tax2", function () {
    if (this.checked) {
      $('#ckb-tax1').prop('checked', false);
      $('#ckb-tax2').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').addClass('text-muted');
    } else {
      $('#ckb-tax1').prop('checked', true);
      $('#ckb-tax1').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("click", "#chk-product-for-sale", function () {
    if (this.checked) {
      $('#txt-product-for-sale').html('Product for sale');
      $('#text-but-not-for-sale').hide();
    } else {
      $('#txt-product-for-sale').html('Product not for sale');
      $('#text-but-not-for-sale').show();
    }
  });

  $(document).on("change", "#ckb-loyalty50", function () {
    if (this.checked) {
      $('#ckb-loyalty10').prop('checked', false);
      $('#ckb-loyalty1').prop('checked', false);
      $('#ckb-loyalty50').closest('.d-flex').addClass('text-dark');
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-muted');
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-dark');
    } else {
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty50').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-loyalty10", function () {
    if (this.checked) {
      $('#ckb-loyalty1').prop('checked', false);
      $('#ckb-loyalty50').prop('checked', false);
      $('#ckb-loyalty10').closest('.d-flex').addClass('text-dark');
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-muted');
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-dark');
    } else {
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty10').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-loyalty1", function () {
    if (this.checked) {
      $('#ckb-loyalty10').prop('checked', false);
      $('#ckb-loyalty50').prop('checked', false);
      $('#ckb-loyalty1').closest('.d-flex').addClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-muted');
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-dark');
    } else {
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-modifier1", function () {
    if (this.checked) {
      $('#ckb-modifier1').closest('.d-flex').addClass('text-dark');
      $('#ckb-modifier1').closest('.d-flex').removeClass('text-muted');
    } else {
      $('#ckb-modifier1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-modifier1').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-modifier2", function () {
    if (this.checked) {
      $('#ckb-modifier2').closest('.d-flex').addClass('text-dark');
      $('#ckb-modifier2').closest('.d-flex').removeClass('text-muted');
    } else {
      $('#ckb-modifier2').closest('.d-flex').removeClass('text-dark');
      $('#ckb-modifier2').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-modifier3", function () {
    if (this.checked) {
      $('#ckb-modifier3').closest('.d-flex').addClass('text-dark');
      $('#ckb-modifier3').closest('.d-flex').removeClass('text-muted');
    } else {
      $('#ckb-modifier3').closest('.d-flex').removeClass('text-dark');
      $('#ckb-modifier3').closest('.d-flex').addClass('text-muted');
    }
  });

  $('#contents input').change(function () {
    $('footer').removeClass('d-none');
    $('footer').slideDown();
    $('footer delete1').hide();
    $('footer delete').show();
    $('footer .unsaved,.save').removeClass('d-none');
  });

  $('#contents input').keydown(function () {
    $('footer').removeClass('d-none');
    $('footer').slideDown();
    $('footer delete1').hide();
    $('footer delete').show();
    $('.save').removeAttr('disabled');
    $('footer .unsaved,.save').removeClass('d-none');
  });

  $('#btn-add-variant').click(function () {
    if ($('#sortable-handle').children(':not(.hide)').length == 1) {
      $('#sortable-handle [data-id=2]').removeClass('hide');
    } else {
      $('#sortable-handle').children('.hide').removeClass('hide');
      $(this).attr('disabled', true);
      $('#btn-add-variant').addClass('text-secondary');
      $('#btn-add-variant').removeClass('text-primary');
    }
  })

  $('.add-variant-delete').click(function () {
    let parent = $(this).parent().parent();
    if ($(this).hasClass('first-variant')) {
      $(parent).find('input[name=variant-name]').val('');
      $(parent).find('select[name=variant-option]').val('');
      $(parent).find('.select2-selection__choice__remove').click();
    } else {
      $(parent).find('input[name=variant-name]').val('');
      $(parent).find('input[name=variant-option]').val('');
      $(parent).addClass('hide');
    }
    $('#btn-add-variant').removeAttr('disabled');
    $('#btn-add-variant').removeClass('text-secondary');
    $('#btn-add-variant').addClass('text-primary');
  });

  $('#existed-product .btn-secondary').click(function () {
    location.href = "";
  });

  $('#add-variant-modal .add').click(function () {
    varients_data.push({ variant: 'From(new)', options: ['Europe', 'America', 'Asia'] });
    $('#variant-table tbody').html('');
    varient_render(0, []);
  })

  $('#category').change(function () {
    if ($(this).val() == 'new') {
      $('#add-category-modal').modal('show');
      $(this).val('');
    }
  });

  function updateInventoryTotalCost() {
    let total = 0;
    $('#composite-table td.cost').each(function () {
      total += Number($(this).text());
    });
    $('#composite-product-total-cost').text(total);
    $('#cost').val(total);
  }

  $('#composite-table').on('click', '.delete-composite', function () {
    $(this).closest('tr').remove();
    updateInventoryTotalCost();
  });

  $('#inventory-card').on('keyup', '#composite-product-search', function (e) {
    if (e.keyCode == 13) {
      $('#composite-table table tbody').append('<tr>\
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

  $('.variant-delete').click(function () {
    $(this).parent().parent().hide();
  });

  $('#add-variant-modal').on('hidden.bs.modal', function () {
    $('.add-variant-delete').click();
    $('#sortable-handle div[data-id=2]').removeClass('hide');
  })


  $('#is-sub-category').click(function () {
    if ($(this).prop('checked')) {
      $('#category-name-container').removeClass('d-none');
    } else {
      $('#category-name-container').addClass('d-none');
    }
  });

  $('#supplier-add-modal [name=currency]').change(function () {
    if ($(this).val() == 'usd') {
      $('#supplier-add-modal .excharge-rate').removeClass('d-none');
    } else {
      $('#supplier-add-modal .excharge-rate').addClass('d-none');
    }
  });

  $('#supplier-add-modal [name=isVat]').change(function () {
    if ($(this).val() == 'yes') {
      $('#supplier-add-modal .vat-id').removeClass('d-none');
    } else {
      $('#supplier-add-modal .vat-id').addClass('d-none');
    }
  });

  $('#leave-modal .continue').click(function () {
    $('#ghost .all-link')[0].click();
  });
});
