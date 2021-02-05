$(document).ready(function () {
  $('.all-table').on('click', 'tr', function() {
    $('#ghost .title-item-name').text($(this).children().eq(0).text());
    $('#ghost .edit-link')[0].click();
  });
});