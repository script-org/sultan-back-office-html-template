$(document).ready(function () {
  $('.table-body').on('click', 'tr', function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('#ghost .title-item-name').text($(this).children().eq(0).find('b').text());
      $('#ghost .edit-link')[0].click();
    }
  });
  $('.bootstrap-tables').on('all.bs.table', function (e) {
    $(this).removeClass('table-bordered');
  })

});