$(document).ready(function () {
  $('body').on('click', '.delete-row', function() {
    if($('.list-item').length > 1){
      $(this).parent().parent().remove();
    }
  });

  var htmlStr = `
    <div class="list-item " data-id="15">
      <div>
        <div class="text-muted js-handle">
          <i class="i-con i-con-menu"><i></i></i>
        </div>
      </div>
      <div class="flex pr-0 col-8">
        <input type="text" class="form-control" placeholder="e.g. Cheese">
      </div>
      <div class="no-wrap">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">L£</span>
          </div>
          <input type="number" class="number-format form-control">
        </div>
      </div>
      <div class="pl-0">
        <a class="delete-row text-danger i-con-h-a">
          <i class="i-con i-con-trash"><i></i></i>
        </a>
      </div>
    </div>
    `;
  
  $('.add-row').click(function() {
    if($('.list-item').length < 10){
      $('.list-row').append(htmlStr);
    }
  });

  $('#add-modifier-modal').change(function() {
    $('.save').removeAttr('disabled');
  });

  $('.save').click(function() {
    location.href="./products.modifier.html";
  });
});