(function ($) {
	"use strict";

  var popover,
  option = {
    header: {
      left: 'title, prev, next',
      center: '',
      right: ''
    },
    contentHeight: 'auto',
    defaultView: 'agendaWeek',
    defaultDate: moment().format('YYYY-MM-DD'),
    editable: true,
    eventLimit: false,
    viewRender: function (view, element) {
      element.find('th.fc-day-header.fc-widget-header').each(function () {
        if($(this).data('date')){
          var date = moment($(this).data('date'));
          $(this).html('<span>' + date.format('D') + '</span><span class="fc-week-title">' + date.format('dddd') + '</span>');
        }
      })
    },
    eventRender: function(event, element, view) {
        $(element).find('.fc-content').append('<div class="mt-1">'+event.description+'</div>');
        var participant = ''
        $.each(event.participant, function (index, value) {
          participant += '<a href="#" class="avatar w-24 b-a b-white"><img src="../assets/img/a'+value+'.jpg"></a>';
        });
        $(element).find('.fc-content').append( '<div class="d-flex my-3 avatar-group">' + participant + '</div>');
    },
    eventClick: function(event, jsEvent) {
      var event_date = '<div class="mb-1"><i class="i-con i-con-calendar w-16 text-fade mr-1"><i></i></i> '+moment(event.start).format("dddd D")+'</div>';
      var event_time = '<div class="mb-3"><i class="i-con i-con-time w-16 text-fade mr-1"><i></i></i> '+moment(event.start).format("h:mma")+ (event.end ? ' - '+moment(event.end).format("h:mma") : '' )+'</div>';
      var participant = '';
      $.each(event.participant, function (index, value) {
        participant += '<a href="#" class="avatar w-32 b-a b-white"><img src="../assets/img/a'+value+'.jpg"></a>';
      });
      $('#newEvent').modal('show');
      $('#event-title').val(event.title);
      $('#event-desc').val(event.description);
      $('#event-type input[value="'+event.type+'"]').prop('checked', true);
      $('#event-participant').html(participant);
      $('#event-start-date').val(moment(event.start).format("DD/MM/YYYY"));
      $('#event-start-time').val(moment(event.start).format("h:mma"));

      $('#event-end-date').val(moment(event.end).format("DD/MM/YYYY"));
      $('#event-end-time').val(moment(event.end).format("h:mma"));
    }
  };

  $(document).on('click', '#dayview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('changeView', 'agendaDay')
  });

  $(document).on('click', '#weekview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('changeView', 'agendaWeek')
  });

  $(document).on('click', '#monthview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('changeView', 'month')
  });

  $(document).on('click', '#todayview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('today')
  });

  var init = function(){
    $.ajax('../assets/api/fullcalendar.json').done(function(data){
      $.each(data, function(index,item){
        item.start = moment().startOf('week').add(index, 'd').add(Math.floor((Math.random() * 10) + 1) - index, 'h').add(index*5,'m');
        item.end = moment(item.start).add(Math.floor((Math.random() * 10) + 3) + index/3, 'h');
      });
      option.events = data;
      $('#fullcalendar').fullCalendar(option);
    });

  }

  // for ajax to init again
  $.fn.fullCalendar.init = init;

})(jQuery);
