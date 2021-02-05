$(document).ready(function () {

  $('.alert').hide();
  $('.alert').removeClass('d-none');

  $('#toolbar').hide();

  $('tbody input[type="checkbox"]').click(function () {
    $('#selected-count').text($('tbody input:checked').length);
    if ($('tbody input:checked').length > 0) {
      $('#toolbar').show();
    } else {
      $('#toolbar').hide();
    }
  });

  $('thead input[type="checkbox"]').click(function () {
    if ($(this).prop('checked')) {
      $('tbody input[type="checkbox"]').prop('checked', true);
      $('#toolbar input[type="checkbox"]').prop('checked', true);
      $('#toolbar').show();
    } else {
      $('tbody input[type="checkbox"]').prop('checked', false);
      $('#toolbar input[type="checkbox"]').prop('checked', false);
      $('#toolbar').hide();
    }
    $('#selected-count').text($('tbody input:checked').length);
  });

  $('#import-start').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-1').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-2').click(function () {
    $('.step-1').hide();
    $('.step-2').show();
    $('.step-3').hide();
  });

  $('.to-step-3').click(function () {
    $('.step-1').hide();
    $('.step-2').hide();
    $('.step-3').show();
    var percent = 0;
    setInterval(function () {
      percent < 100 ? percent++ : '';
      $('.progress-bar').css('width', percent + '%');
      $('.progress-bar-percent').text(percent + '% complete');
    }, 50);
  });

  $('#composite-switch').change(function () {
    if ($(this).prop('checked')) {
      $('#composite-table').removeClass('d-none');
      $('#div-default-purchase-cost').addClass('d-none');
      $('#supplier_name').select2().next().hide();
      $('#composite-supplier-name').removeClass('d-none');
      $('#txt-composite-cost').html('Calculated as the sum of cost of components');
    } else {
      $('#composite-table').addClass('d-none');
      $('#div-default-purchase-cost').removeClass('d-none');
      $('#supplier_name').select2().next().show();
      $('#composite-supplier-name').addClass('d-none');
      $('#txt-composite-cost').html('Value updates automaNcally when you receive inventory');
    }
  });

  $('#production-switch').change(function () {
    if ($(this).prop('checked')) {
      $('#composite-table').removeClass('d-none');
    } else {
      $('#composite-table').addClass('d-none');
    }
  });

  // $('#add-variant').click(function() {
  //   if($('#variant-table').hasClass('d-none')) {
  //     $('#variant-table').removeClass('d-none');
  //   } else {
  //     $('#variant-table').addClass('d-none');
  //   }
  // });

  

  $('.edit').click(function () {
    location.href = './products.edit.html';
  });

  $('.create-order').click(function () {
    location.href = './inventory.purchase.html';
  });

  $('.stock-adjust').click(function () {
    location.href = './inventory.stock.html';
  });

  $('.duplicate-product').click(function () {
    location.href = './products.new.html';
  });

  $('.delete').click(function () {
    $('#delete-modal').modal('show');
  });

  $('#btn-delete').click(function () {
    $('#delete-modal').modal('hide');
    $('#toolbar').hide();
    $('input[type="checkbox"]:checked').each(function() {
      if(this.value != 'all' && this.value != 'name'){
        $(this).parent().parent().parent().remove();
      }
    });
    $('table input[type="checkbox"]').prop('checked', false);
    $('.alert').text('Dairy Khoury Labneh 400g deleted successfully');
    $('.alert').fadeIn();
    setTimeout(function() {
      $('.alert').fadeOut();
    }, 3000);
  });

  $('#btn-multi-delete').click(function () {
    $('#multi-delete-modal').modal('show');
    var selected_count = parseInt($('#selected-count').text());
    $('#selected-cnt').val(selected_count);
    if(selected_count == 1){
      $('#modal-multi-title').html('Delete '+selected_count+' product');
      $('#body-title').html('Are you sure you about this product? This can’t be undone.');
    }else{
      $('#modal-multi-title').html('Delete '+selected_count+' products');
      $('#body-title').html('Are you sure you about these products? These can’t be undone.');
    }
  });

  $('#btn-delete-confirm').click(function () {
    $('#multi-delete-modal').modal('hide');
    $('#toolbar').hide();
    $('input[type="checkbox"]:checked').each(function() {
      if(this.value != 'all' && this.value != 'name'){
        $(this).parent().parent().parent().remove();
      }
    });
    $('table input[type="checkbox"]').prop('checked', false);
    var selected_cnt = parseInt($('#selected-cnt').val());
    if(selected_cnt == 1){
      $('.alert').text('1 product deleted successfully');
    }else{
      $('.alert').text(selected_cnt + ' products deleted successfully');
    }
    
    $('.alert').fadeIn();
    setTimeout(function() {
      $('.alert').fadeOut();
    }, 3000);
  });

  $('#all-products tbody tr').click(function (ev) {
    if(ev.target.nodeName !== 'I' && ev.target.nodeName !== 'INPUT' && ev.target.nodeName !== 'A') {
      location.href = './products.edit.html';
    }
  });

  $('#product-category').change(function () {
    if ($(this).val() === 'new') {
      $('#add-category-modal').modal('show');
    }
  });

  $('#product-supplier').change(function () {
    if ($(this).val() === 'new') {
      $('#add-supplier-modal').modal('show');
    }
  });

  $('.edit-category').click(function () {
    $('delete-btn').removeClass('d-none');
    $('#category-edit-title').html('Edit category');
  });

  $('.delete-action').click(function () {
    $('delete-btn').addClass('d-none');
    $('#category-edit-title').html('Add category');
    $('#delete-modal').modal('hide');
  });

  $('.back').click(function () {
    location.href = 'products.all.html';
  });

  $('input[type=radio][name=point-round]').change(function() {
    if (this.value == 's_each') {
      
    } else if (this.value == 's_weight') {
      
    }
  });

  $('.barcode-add').click(function () {
    if($('.added-barcode-div').length < 2){
      var htmlStr = `
        <div class="col-6 form-group added-barcode-div">
          <label class="d-flex justify-content-between">
            <span>Barcode</span>
            <a class="text-dark barcode-remove">
              <i class="i-con i-con-close">
              </i>
            </a>
          </label>
          <div class="input-group">
            <input type="text" class="form-control px-0">
            <div class="input-group-append">
              <span class="input-group-text p-0 no-bg border-right-0" id="basic-addon2">
                <button class="btn btn-primary">Generate</button>
              </span>
            </div>
          </div>
        </div>
        `;

      $(htmlStr).insertBefore('#div-sku');
    }
  });

  $(document).on("click", ".barcode-remove", function(){
    $(this).closest('.form-group').remove();
  });

  $(document).on("change", "#ckb-tax1", function(){
    if(this.checked){
      $('#ckb-tax2').prop('checked', false);
      $('#ckb-tax1').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').addClass('text-muted');
    }else{
      $('#ckb-tax2').prop('checked', true);
      $('#ckb-tax2').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("click", "#ckb-tax2", function(){
    if(this.checked){
      $('#ckb-tax1').prop('checked', false);
      $('#ckb-tax2').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').addClass('text-muted');
    }else{
      $('#ckb-tax1').prop('checked', true);
      $('#ckb-tax1').closest('.d-flex').addClass('text-dark');
      $('#ckb-tax1').closest('.d-flex').removeClass('text-muted');
      $('#ckb-tax2').closest('.d-flex').removeClass('text-dark');
      $('#ckb-tax2').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("click", "#chk-product-for-sale", function(){
    if(this.checked){
      $('#txt-product-for-sale').html('Product for sale');
    }else{
      $('#txt-product-for-sale').html('Product not for sale');
    }
  });

  $(document).on("change", "#ckb-loyalty50", function(){
    if(this.checked){
      $('#ckb-loyalty10').prop('checked', false);
      $('#ckb-loyalty1').prop('checked', false);
      $('#ckb-loyalty50').closest('.d-flex').addClass('text-dark');
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-muted');
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-dark');
    }else{
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty50').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-loyalty10", function(){
    if(this.checked){
      $('#ckb-loyalty1').prop('checked', false);
      $('#ckb-loyalty50').prop('checked', false);
      $('#ckb-loyalty10').closest('.d-flex').addClass('text-dark');
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-muted');
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-dark');
    }else{
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty10').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-loyalty1", function(){
    if(this.checked){
      $('#ckb-loyalty10').prop('checked', false);
      $('#ckb-loyalty50').prop('checked', false);
      $('#ckb-loyalty1').closest('.d-flex').addClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-muted');
      $('#ckb-loyalty10').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty50').closest('.d-flex').removeClass('text-dark');
    }else{
      $('#ckb-loyalty1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-loyalty1').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-modifier1", function(){
    if(this.checked){
      $('#ckb-modifier1').closest('.d-flex').addClass('text-dark');
      $('#ckb-modifier1').closest('.d-flex').removeClass('text-muted');
    }else{
      $('#ckb-modifier1').closest('.d-flex').removeClass('text-dark');
      $('#ckb-modifier1').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-modifier2", function(){
    if(this.checked){
      $('#ckb-modifier2').closest('.d-flex').addClass('text-dark');
      $('#ckb-modifier2').closest('.d-flex').removeClass('text-muted');
    }else{
      $('#ckb-modifier2').closest('.d-flex').removeClass('text-dark');
      $('#ckb-modifier2').closest('.d-flex').addClass('text-muted');
    }
  });

  $(document).on("change", "#ckb-modifier3", function(){
    if(this.checked){
      $('#ckb-modifier3').closest('.d-flex').addClass('text-dark');
      $('#ckb-modifier3').closest('.d-flex').removeClass('text-muted');
    }else{
      $('#ckb-modifier3').closest('.d-flex').removeClass('text-dark');
      $('#ckb-modifier3').closest('.d-flex').addClass('text-muted');
    }
  });

  //$('footer').hide();
  //$('footer').removeClass('d-none');

  $('#contents input').change(function () {
    $('footer').removeClass('d-none');
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

  $('#contents input').keydown(function () {
    $('footer').removeClass('d-none');
    $('footer').slideDown();
    $('.save').removeAttr('disabled');
  });

});