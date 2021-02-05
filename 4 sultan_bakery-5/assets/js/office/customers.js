$(document).ready(function () {

  $('footer').hide();

  $('.step-2').hide();
  $('.step-3').hide();
  $('#profile-page').hide();
  $('#edit-page').hide();

  $('.add').click(function () {
    $('#profile-page').hide();
    $('#index-page').hide();
    $('#edit-page').show();
  });

  $('textarea').keydown(function (ev) {
    if ($(this).val().length > 249) {
      ev.preventDefault();
    }
    $(this).parent().find('.length').text($(this).val().length);
  });

  $('.back').click(function() {
    $('#index-page').show();
    $('#profile-page').hide();
    $('#edit-page').hide();
    $('footer').slideUp();
    $('#title').text('Add customers');
    $('.delete').addClass('d-none');
  });

  $('.edit').click(function () {
    $('#title').text($(this).closest('tr').children().eq(0).text());
    $('#profile-page').hide();
    $('#index-page').hide();
    $('#edit-page').show();
    $('.delete').removeClass('d-none');
  });

  $('tbody tr').click(function (ev) {
    if (ev.target.nodeName !== 'I' && ev.target.nodeName !== 'A') {
      $('#title').text($(this).children().eq(0).text());
      $('#profile-page').show();
      $('#index-page').hide();
      $('#edit-page').hide();
      $('.delete').removeClass('d-none');
    }
  });

  $('#import-start').click(function() {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-1').click(function() {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-2').click(function() {
    $('.step-1').hide();
    $('.step-2').show();
    $('.step-3').hide();
  });

  $('.to-step-3').click(function() {
    $('.step-1').hide();
    $('.step-2').hide();
    $('.step-3').show();
  });

  $('#edit-page input').change(function() {
    $('footer').slideDown();
  });
  
  $('#edit-page input').keydown(function() {
    $('footer').slideDown();
  });

  $('#edit-page textarea').keydown(function() {
    $('footer').slideDown();
  });

  $('#profile-page input').change(function() {
    $('footer').slideDown();
  });
  
  $('#profile-page input').keydown(function() {
    $('footer').slideDown();
  });

  $('#profile-page textarea').keydown(function() {
    $('footer').slideDown();
  });

  var alarm;
  $('#save').click(function () {
    $('footer').slideUp();
    $('#index-page').show();
    $('#edit-page').hide();
    $('#profile-page').hide();
    $('.alert').removeClass('d-none');
    var alarm = setTimeout(function () {
      $('.alert').addClass('d-none');
    }, 5000);
  });

  $('.alert').click(function () {
    $(this).addClass('d-none');
    clearTimeout(alarm);
  });

  $('#delete-customer').click(function() {
    $('#delete-modal').modal('hide');
    $('#save').click();
  });
});