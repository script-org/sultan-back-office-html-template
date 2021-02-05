$(document).ready(function () {

  if ($('#ghost .success-title-message').text() != '') {
    notification($('#ghost .success-title-message').text());
  }    

  $('#all-table').on('all.bs.table', function(e) {
    $(this).removeClass('table-bordered');
    $('#all-table tr .collapse').removeClass('table-hover');
  });

  $('a[data-toggle="collapse"]').click(function () {
    var obj = $(this).find('i');
    if (obj.hasClass('la-angle-up')) {
      obj.removeClass('la-angle-up');
      obj.addClass('la-angle-down');
    } else {
      obj.addClass('la-angle-up');
      obj.removeClass('la-angle-down');
    }
  });

  $('#default-location-save').click(function () {
    $('#change-default-modal').modal('hide');
    notie.alert({ type: 'success', text: 'Updated default location' })
  });

  $('#accordion .row.d-flex').click(function (ev) {
    if (ev.target.nodeName !== 'I') {
      $('#ghost .title-item-name').text($(this).find('.location-name').text());
      $('#ghost .edit-link')[0].click();
    }
  });
});