$(document).ready(function() {
  $('#add-category-modal input').keydown(function() {
    $('.save').removeAttr('disabled');
  });

  $('.save').click(function() {
    $('#ghost .success-title-message').text('First category added successfully');
    $('#ghost .all-link')[0].click();
  })
});
