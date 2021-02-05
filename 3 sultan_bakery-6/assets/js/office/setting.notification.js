$(document).ready(function () {

  $('.bootstrap-tables').on('all.bs.table', function (e) {
    $(this).removeClass('table-bordered');
  })

  $('#content-body').off('click', '.notification-table tr');
  $('#content-body').on('click', '.notification-table tr', function (ev) {
    $('#ghost .title-item-name').text($(this).find('a').text());
    $('#ghost .edit-link')[0].click();
  });

  $('#content-body').on('click', '.subscribers-table tr', function (ev) {
    if (ev.target.nodeName == 'TD') {
      $('#edit-recipient-modal').modal('show');
    }
  });

  $('#content-body').on('click', '.subscribers-table .send', function () {
    notie.alert({ type: 'success', text: 'Test notification sent successfully' });
  })
});