$(document).ready(function () {

  setInterval(intervalfunc, 100);


  $('#toolbar').hide();
  $('#all-table').bootstrapTable({
    buttonsClass: 'white',
    formatSearch: function () { return 'Search Products, SKU, Barcode…'; }
  })
  $('#all-table').bootstrapTable('uncheckAll');
  if ($('#ghost .success-title-message').text() != '') {
    notification($('#ghost .success-title-message').text());
  }

  $('#index-page').on('change', 'input:checkbox', function () {
    let len = $('#all-table').bootstrapTable('getSelections').length;
    $('#selected-count').text(len);
    if (len > 0) {
      $('#toolbar').slideDown();
    } else {
      $('#toolbar').slideUp();
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

  $('.edit').click(function () {
    $('#ghost .title-item-name').text($(this).closest('tr').children().eq(2).text());
    $('#ghost .edit-link')[0].click();
  });

  $('.create-order').click(function () {
    $('#ghost .purchase-link')[0].click();
  });

  $('.stock-adjust').click(function () {
    $('#ghost .stock-link')[0].click();
  });

  $('.duplicate-product').click(function () {
    $('#ghost .new-link')[0].click();
  });

  $('.delete').click(function () {
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

  function intervalfunc() {
    $('.collapseOne').find('td').eq(1).removeClass('bs-checkbox ');
    $('.collapseOne').find('td').eq(1).html('');
    $('.collapseOne').find('td').eq(10).removeClass('bs-checkbox ');
    $('.collapseOne').find('td').eq(10).html('');
    $('#all-table thead').find('th').css('vertical-align', 'middle');
    $('#all-table thead').find('th').eq(1).css('vertical-align', 'bottom');
    $('#all-table tbody').find('input:checkbox').css('vertical-align', 'bottom');
    $('#all-table').find('input:checkbox').css('zoom', '1.3');
  }
  $('#table tbody tr').click(function (ev) {
    if (ev.target.nodeName !== 'I' && ev.target.nodeName !== 'INPUT' && ev.target.nodeName !== 'A') {
      location.href = './products.edit.html';
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

});
