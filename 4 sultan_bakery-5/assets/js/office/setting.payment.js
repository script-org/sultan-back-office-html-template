$(document).ready(function () {
  footerControl();
  tableRowControl();
  backControl();
  addItemControl();

  var isCash;
  var isEdit;
  $('table tbody tr').click(function (ev) {
    if (ev.target.nodeName !== 'I') {
      isEdit = true;
      var paymentName = $(this).children().eq(0).text();
      $('.edit-page .title').text('Edit ' + paymentName)
      $('.edit-page select').attr('disabled', true);
      if (paymentName.search('Cash') < 0) {
        isCash = false;
      } else {
        isCash = true;
      }
    }
  });

  $('.add').click(function () {
    $('.edit-page .title').text('Add Payment Type');
    isEdit = false;
  })

  $('.edit-page').change(function () {
    if (isCash && isEdit) {
      $('footer .delete').hide();
    }
  });

  $('tr').click(function () {
    $('.modal-delete-button').attr('title', '<b>' + $(this).children().eq(0).text() + '</b> deleted successfully');
    $('footer').slideDown();
  });

  $('.edit-page input').keydown(function () {
    console.log(isCash, isEdit);
    if (isCash && isEdit) {
      $('footer .delete').hide();
    }
  });

  $('.back').click(function () {
    $('.edit-page select').attr('disabled', false);
  });
});