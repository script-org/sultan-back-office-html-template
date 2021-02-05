$(document).ready(function () {
  footerControl();
  footerShowCondition();
  var hourHtmlStr = `<div class="input-group">
                  <select class="custom-select select2">
                    <option value="">1:00</option>
                    <option value="">1:30</option>
                    <option value="">2:00</option>
                    <option value="">2:30</option>
                    <option value="">3:00</option>
                    <option value="">3:30</option>
                    <option value="">4:00</option>
                    <option value="">4:30</option>
                    <option value="">5:00</option>
                    <option value="">5:30</option>
                    <option value="">6:00</option>
                    <option value="">6:30</option>
                    <option value="">7:00</option>
                    <option value="">7:30</option>
                    <option value="">8:00</option>
                    <option value="">8:30</option>
                    <option value="">9:00</option>
                    <option value="">9:30</option>
                    <option value="">10:00</option>
                    <option value="">10:30</option>
                    <option value="">11:00</option>
                    <option value="">11:30</option>
                    <option value="">12:00</option>
                    <option value="">12:30</option>
                  </select>
                  <div class="input-group-append">
                    <select name="" class="custom-select" id="">
                      <option value="">AM</option>
                      <option value="">PM</option>
                    </select>
                  </div>
                </div>
                <span class="px-5">-</span>
                <div class="input-group">
                  <select class="custom-select select2">
                    <option value="">1:00</option>
                    <option value="">1:30</option>
                    <option value="">2:00</option>
                    <option value="">2:30</option>
                    <option value="">3:00</option>
                    <option value="">3:30</option>
                    <option value="">4:00</option>
                    <option value="">4:30</option>
                    <option value="">5:00</option>
                    <option value="">5:30</option>
                    <option value="">6:00</option>
                    <option value="">6:30</option>
                    <option value="">7:00</option>
                    <option value="">7:30</option>
                    <option value="">8:00</option>
                    <option value="">8:30</option>
                    <option value="">9:00</option>
                    <option value="">9:30</option>
                    <option value="">10:00</option>
                    <option value="">10:30</option>
                    <option value="">11:00</option>
                    <option value="">11:30</option>
                    <option value="">12:00</option>
                    <option value="">12:30</option>
                  </select>
                  <div class="input-group-append">
                    <select name="" class="custom-select" id="">
                      <option value="">AM</option>
                      <option value="">PM</option>
                    </select>
                  </div>
                </div>`;

  $('.hours .ui-switch input').change(function () {
    // $(this).closest('span').next().toggleClass('text-dark');
    // $(this).closest('span').next().toggleClass('font-weight-bold');
    if ($(this).prop('checked')) {
      $('.all-check-text').addClass('text-dark');
      $('.all-check-text').addClass('font-weight-bold');
      $('.all-check-text').removeClass('text-muted');
      $(this).closest('span').next().removeClass('text-muted');
      $(this).closest('span').next().addClass('font-weight-bold');
      $(this).closest('span').next().addClass('text-dark');
      $(this).closest('span').next().text('Open');
      $(this).closest('td').next().html(hourHtmlStr);
      // $('.select2').select2();
    } else {
      $('.all-check-text').removeClass('text-dark');
      $('.all-check-text').removeClass('font-weight-bold');
      $('.all-check-text').addClass('text-muted');
      $(this).closest('span').next().removeClass('text-dark');
      $(this).closest('span').next().removeClass('font-weight-bold');
      $(this).closest('span').next().addClass('text-muted');
      $(this).closest('span').next().text('Closed');
      $(this).closest('td').next().html('');
    }
    if ($('.hours .ui-switch input').length === $('.hours .ui-switch input:checked').length) {
      $('#all-check').prop('checked', true);
    } else {
      $('#all-check').prop('checked', false);
    }
  });

  $('.index-page').on('click', '.select2-selection', function () {
    $('.select2-search__field').mask('99:99');
  });

  $('.service .ui-switch input').change(function () {
    $(this).closest('span').next().toggleClass('text-dark');
    $(this).closest('span').next().toggleClass('font-weight-bold');
    if ($(this).prop('checked')) {
      $(this).closest('span').next().text('Enabled');
      $(this).closest('td').next().html(hourHtmlStr);
      $('.select2').select2();
    } else {
      $(this).closest('span').next().text('Disabled');
      $(this).closest('td').next().html('');
    }
    $('.time-format').mask('99:99');
  });

  $('#cancel').click(function () {
    $('.ui-switch input').prop('checked', false);
    $('.hours span.d-flex .ml-2').text('Closed');
    $('.hours span.d-flex .ml-2').removeClass('text-dark');
    $('.hours span.d-flex .ml-2').removeClass('font-weight-bold');

    $('.service span.d-flex .ml-2').text('Disabled');
    $('.service span.d-flex .ml-2').removeClass('text-dark');
    $('.service span.d-flex .ml-2').removeClass('font-weight-bold');

    $('table td.d-flex').html('');
  });

  $('#all-check').click(function () {
    if ($(this).prop('checked')) {
      $('.all-check-text').addClass('text-dark');
      $('.all-check-text').addClass('font-weight-bold');
      $('.all-check-text').removeClass('text-muted');
      $('.hours .status').text('Open');
      $('.hours .status').removeClass('text-muted');
      $('.hours .status').addClass('font-weight-bold');
      $('.hours .status').addClass('text-dark');
      $('.hours input[type="checkbox"]').prop('checked', true).change();
      $('.hours .week').html(hourHtmlStr);
    } else {
      $('.all-check-text').removeClass('text-dark');
      $('.all-check-text').removeClass('font-weight-bold');
      $('.all-check-text').addClass('text-muted');
      $('.hours .status').text('Closed');
      $('.hours .status').removeClass('font-weight-bold');
      $('.hours .status').removeClass('text-dark');
      $('.hours .status').addClass('text-muted');
      $('.hours input[type="checkbox"]').prop('checked', false);
      $('.hours .week').html('');
    }
  });

  $('.continue').click(function () {
    $('.all-check-text').removeClass('text-dark');
    $('.all-check-text').removeClass('font-weight-bold');
    $('.all-check-text').addClass('text-muted');
    $('input[type="checkbox"]').prop('checked', false);
    $('table .status').removeClass('text-dark');
    $('table .status').removeClass('font-weight-bold');
    $('.week').html('');
    $('.hours .status').text('Closed');
    $('.service .status').text('Disabled');
  });
});