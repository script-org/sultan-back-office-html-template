$(document).ready(function () {
  $('.table-card').on('click', '#table-taxes tr', function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('#ghost .title-item-name').text($(this).children().eq(0).text());
      $('#ghost .edit-link')[0].click();
    }
  });
  $('#taxes-delete-modal .continue').click(function () {
    notification("<b>VAT 11%</b> deleted successfully");
  })

  $('#table-taxes').on('all.bs.table', function (e) {
    $(this).removeClass('table-bordered');
  })
});
