$(document).ready(function () {
  $('#table').on('all.bs.table', function(e) {
    $(this).removeClass('table-bordered');
});

  $('#content').off('click', 'tbody tr');
  $('#content').on('click', 'tbody tr', function(ev) {
      if (ev.target.nodeName !== 'I') {
    $('#ghost .title-item-name').text($(this).children().eq(0).text());
        $('#ghost .edit-link')[0].click();
        console.log($('#ghost .edit-link'))

      }
  });

   $('#content').off('click', 'tbody tr a.delete');
  $('#content').on('click', 'tbody tr a.delete', function(ev) {
    let text = $(this).parent().parent().children().eq(0).text();
    $('#delete-modal b').text(text);
    $('#delete-modal .continue').attr('title', '<b>' + text + '</b> payment type deleted successfully');
  });

  // $('table tbody tr').click(function (ev) {
  //   if (ev.target.nodeName !== 'I') {
  //     $('#ghost .title-item-name').text($(this).children().eq(0).text());
  //     $('#ghost .edit-link')[0].click();
  //   }
  // });

  // $('tr a.delete').click(function () {
  //   let text = $(this).parent().parent().children().eq(0).text();
  //   $('#delete-modal b').text(text);
  //   $('#delete-modal .continue').attr('title', '<b>' + text + '</b> payment type deleted successfully');
  // });
  
  $('#delete-modal .continue').click(function() {
    notification($(this).attr('title'));
  })
});