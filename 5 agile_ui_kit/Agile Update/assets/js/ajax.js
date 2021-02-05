(function ($) {
	'use strict';
    
    var TRANSITION_DURATION = 600;

    $(document).on('pjax:send', function() {
      $(document).trigger('pjaxSend');
    });

    $(document).on('pjaxSend', function(){
      // close the aside on mobile
      $('#aside').modal('hide');
      $('body').removeClass('modal-open').find('.modal-backdrop').remove();
      // remove the tags created by plugins
      $('.jqvmap-label, .note-popover, .dz-hidden-input').remove();
    });

    $(document).on('refresh', function() {
      aside_pjax && aside_pjax.refresh();
      header_pjax && header_pjax.refresh();
      content_pjax && content_pjax.refresh();
    });
    
    $(document).on('pjax:success', function() {
      if(bootstrap && bootstrap.Util){
        $(document).one(bootstrap.Util.TRANSITION_END, function(){
          $('.js-Pjax-onswitch').removeClass('js-Pjax-onswitch');
          $(document).trigger('pjaxEnd');
        }).emulateTransitionEnd(TRANSITION_DURATION);
      }else{
        $(document).trigger('pjaxEnd');
      }
    });

    var switch_h_option = {
      classNames: {
        // class added on the element that will be removed
        remove: 'animate animate-reverse animate-fast animate-no-delay',
        // class added on the element that will be added
        add: 'animate',
        // class added on the element when it go backward
        backward: 'fadeInLeft',
        // class added on the element when it go forward (used for new page too)
        forward: 'fadeInRight'
      },
      callbacks: {
        addElement: function(el){
          $(el).parent().addClass('js-Pjax-onswitch');
        },
        removeElement: function(el) {
          $(el).css( 'width', $(el).parent().width() );
        }
      }
    };

    var header_pjax = new Pjax({
      cacheBust: false,
      elements: '#header .navbar-nav a:not(.no-ajax)',
      selectors: ['title', '#main'],
      switches: {
        '#main': Pjax.switches.sideBySide
      },
      switchesOptions: {
        '#main': switch_h_option
      }
    });

    var aside_pjax = new Pjax({
      cacheBust: false,
      elements: '#aside a:not(.no-ajax), #content a.ajax, #header a:not(.no-ajax)',
      selectors: ['title', '#content'],
      switches: {
        '#content': Pjax.switches.sideBySide
      },
      switchesOptions: {
        '#content': switch_h_option
      }
    });

    var content_pjax = new Pjax({
      cacheBust: false,
      elements: '#content-aside a, #content-body a',
      selectors: ['title', '#content-body'],
      switches: {
        '#content-body': Pjax.switches.sideBySide
      },
      switchesOptions: {
        '#content-body': switch_h_option
      }
    });

})(jQuery);
