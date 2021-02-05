$(document).ready(function() {

  var isEdit = false;

  $('.alert').hide();
  $('.alert').removeClass('d-none');

  $('.category-edit').change(function() {
    $('.save').removeAttr('disabled');
    $('.cancel').removeAttr('disabled');
    $('.delete-btn').removeAttr('disabled');
  });

  function format() {
    $('input').val('');
    $('.save').attr('disabled', true);
    $('.cancel').attr('disabled', true);
    $('#category-edit-title').text('Create modifier');
    $('.delete-btn').addClass('d-none');
    isEdit = false;
  }

  $('.save').click(function() {
    if(isEdit) {
      $('.alert').text('Modifier updated successfully');
    } else {
      $('.alert').text('Modifier added successfully');
    }
    $('.alert').fadeIn();
    format();
    setTimeout(function() {
      $('.alert').fadeOut();
    }, 3000);
  });

  $('body').on('click', '.delete-row', function() {
    $(this).parent().parent().remove();
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
          <input type="text" class="number-format form-control">
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
    $('.list-row').append(htmlStr);
  });

  $('.delete').click(function() {
    $('.alert').text('Modifier has been deleted successfully');
    $('.alert').fadeIn();
    setTimeout(function() {
      $('.alert').fadeOut();
    }, 3000);
    format();
  });

  $('.edit').click(function() {
    isEdit = true;
    $('#category-edit-title').text('Edit modifier');
    $('#name').val('Modifier name');
    $('.option-name').val('Extra Cheese');
    $('.option-value').val('1,000');
    $('.save').attr('disabled', true);
    $('.cancel').attr('disabled', true);
    $('.delete-btn').attr('disabled', true);
    $('.delete-btn').removeClass('d-none');
  });

  $('.leave').click(function() {
    format();
  })
});