$(document).ready(function () {
  $('#content-body tbody').on('click', 'tr', function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('#ghost .title-item-name').text($(this).children().eq(0).text());
      $('#ghost .edit-link')[0].click();
    }
  });
  
  $('#table').on('all.bs.table', function (e) {
    $(this).removeClass('table-bordered');
  })
});