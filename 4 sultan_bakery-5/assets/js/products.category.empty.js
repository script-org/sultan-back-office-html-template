$(document).ready(function() {
  $('#add-category-modal input').keydown(function() {
    $('.save').removeAttr('disabled');
  });

  $('.save').click(function() {
    location.href="./products.category.html";
  })
});