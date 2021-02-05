$(document).ready(function () {

  footerControl();
  let editEls = {
    "Product title": val => `<input type="text" class="form-control w-100" value="${val}">`,
    "Category": val => `
          <select class="custom-select" style="width: 100%" data-option="{}" value="${val}"
            data-placeholder="Select category">
            <option value="Grandparent">Grandparent</option>
            <option value="Parent">Parent</option>
            <option value="Children">Children</option>
          </select>`,
    "Supplier": val => `<input type="text" class="form-control w-100" value="${val}">`,
    "Expiration date": val => `
          <div class="input-group">
          <input type="text" class="form-control start-date" value="${val}">
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="i-con i-con-calendar"><i></i></i>
            </span>
          </div>
        </div>
    `,
    "Available for sale": val => `<input type="checkbox" checked=${val}>`,
    "Available for sale-label": val => `<input type="checkbox" checked=${val}>`,
    "Price": val => `
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2">L£</span>
            </div>
            <input type="number" value="${val}" class="number-format form-control"
              aria-label="Recipient's username" aria-describedby="basic-addon2">
          </div>`,
    "Price-label": val => `<p style="text-align:left;">L£<span style="float:right;">${val}</span></p>`,
    "Cost": val => `
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2">L£</span>
            </div>
            <input type="number" value="${val}" class="number-format form-control"
              aria-label="Recipient's username" aria-describedby="basic-addon2">
          </div>`,
    "Cost-label": val => `<p style="text-align:left;">L£<span style="float:right;">${val}</span></p>`,
    "Charge taxes": val => `<input type="checkbox" checked=${val}>`,
    "Charge taxes-label": val => `<input type="checkbox" checked=${val}>`,
    "SKU": val => `<input type="text" class="form-control w-100" value="${val}">`,
    "Barcode": val => `<input type="text" class="form-control w-100" value="${val}">`,
    "Track stock": val => `<input type="text" class="form-control w-100" value="${val}">`
  }
  $('.start-date').fdatepicker({
    initialDate: '12-12-2020',
    format: 'M dd, yyyy',
    disableDblClickSelection: true,
    leftArrow: '<<',
    rightArrow: '>>',
  });

  $('.column-buttons').on('click', '.btn-field', function () {
    $('footer').slideDown();
    $(this).remove();
    $('.drop-down-field').find("button:contains('" + $(this).text().trim() + "')").eq(0).attr('disabled', false);
    if ($(this).text().trim() == "Product title") {
      $('tbody td:first-child').each(function () {
        $(this).replaceWith(`<td class="table-fixed-layout">${$(this).find('input').val()}</td>`)
      })
    }
    else {
      var row = $(this).text().trim().toLocaleLowerCase().replace(" ", "-").replace(" ", "-");
      $('.' + row).addClass('d-none');
    }
  });

  $('.drop-down-field').on('click', 'button', function () {
    if ($(this).attr('disabled', false)) {
      $('footer').slideDown();
      $(this).attr('disabled', true);
      var btn_html = '<button class="btn btn-light btn-field mr-2">' + $(this).text() + '<i class="i-con i-con-close" ></i ></button>';
      $('.btn-all-field').append(btn_html);
      if ($(this).text().trim() == "Product title") {
        $('tbody tr td:first-child').each(function () {
          $(this).replaceWith('<td><input type="text" class="form-control w-100" value="' + $(this).text() + '"></td>')
        });
      }
      else {
        var row = $(this).text().trim().toLocaleLowerCase().replace(" ", "-").replace(" ", "-");
        $('.' + row).removeClass('d-none');
      }
    }
  });

  $('.bulk-table').change(function () {
    $('footer').slideDown();
  });

  $('.save').click(function () {
    notification('4 products saved successfully');
  });
  $('.bulk-table tbody td').focusin(function () {
    if ($(this).hasClass('table-fixed-layout')) return;
    $(this).addClass('selected');
    $selecteds.push($(this));
  })
  let shift = false;
  let $selecteds = [];
  $('.bulk-table tbody td').focusout(function (event) {
    if ($(this).hasClass('table-fixed-layout') || shift) return;
    $(this).removeClass('selected');
    $selecteds.splice($selecteds.indexOf($(this), 1));
  })
  function toggleEdit($td) {
    if ($td.hasClass('table-fixed-layout')) return;
    $td.removeClass('selected');
    $('.bulk-table td:not(.table-fixed-layout)').each(function () {
      if ($(this).hasClass('d-none')) return;
      var $input = $(this).find('select, input');
      if ($input.length == 0) return;
      if (editEls[$input.closest('table').find('th').eq($(this).index()).text() + '-label'] == undefined) {
        $(this).html($input.val())
      } else {
        $(this).html(editEls[$input.closest('table').find('th').eq($(this).index()).text() + '-label']($input.val()))
      }
    })
    let text = $td.text();
    if ($td.find('p')) text = $td.find('span').text();
    else if ($td.find('input')) text = $td.find('input').attr('checked');
    $td.html(editEls[$td.closest('table').find('th').eq($td.index()).text()](text));
  }
  $('.bulk-table tbody td').dblclick(function () { toggleEdit($(this)) });
  $('.bulk-table tbody td').keydown(function (event) {
    if (event.which == 16) shift = true;
  });
  $('.bulk-table tbody td').keyup(function (event) {
    if (event.which == 16) { shift = false; return; }
    if (event.which == 13) { toggleEdit($(this)); return; }
    if (event.which == 38) { //UP
      $('.bulk-table').find('td').focusout();
      if ($(this).parent().prev().length) {
        $(this).parent().prev().eq(0).find('td').eq($(this).index()).focus();
      }
    }
    if (event.which == 40) { //DOWN
      $('.bulk-table').find('td').focusout();
      if ($(this).parent().next().length) {
        $(this).parent().next().eq(0).find('td').eq($(this).index()).focus();
      }
    }
    if (shift) return;
    if (event.which == 37) { //LEFT
      $prev = $(this).prevUntil('.d-none,.table-fixed-layout');
      if ($prev.length) $prev.eq(0).focus();
    }
    if (event.which == 39) { //RIGHT
      $next = $(this).nextUntil('.d-none,.table-fixed-layout');
      if ($next.length) $next.eq(0).focus();
    }
    event.preventDefault();
  });
});
