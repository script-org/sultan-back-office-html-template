(function ($) {
    'use strict';

    var TRANSITION_DURATION = 600;

    $(document).on('pjax:send', function () {
        $(document).trigger('pjaxSend');
    });

    $(document).on('pjaxSend', function () {
        // close the aside on mobile
        $('#aside').modal('hide');
        $('body').removeClass('modal-open').find('.modal-backdrop').remove();
        // remove the tags created by plugins
        $('.jqvmap-label, .note-popover, .dz-hidden-input').remove();
    });

    $(document).on('pjax:beforeSend', function (event) {
        if ($('footer .save').length && $('footer').is(':visible') && !$('footer .save').is('[disabled]')) {
            $('#page-leave-modal').attr('href', event.relatedData);
            $('#page-leave-modal').modal('show');
            return false;
        }
        return true;
    });

    $(document).on('click', '#page-leave-modal .leave', function () {
        $('footer .save').attr('disabled', true);
        $('#ghost .any-link').attr('href', $('#page-leave-modal').attr('href'));
        $('#ghost .any-link')[0].click();
    });

    $(document).on('refresh', function () {
        signin_pjax && signin_pjax.refresh();
        aside_pjax && aside_pjax.refresh();
        header_pjax && header_pjax.refresh();
        content_pjax && content_pjax.refresh();
        account_pjax && account_pjax.refresh();
    });

    $(document).on('pjax:success', function () {
        if (bootstrap && bootstrap.Util) {
            $(document).one(bootstrap.Util.TRANSITION_END, function () {
                $('.js-Pjax-onswitch').removeClass('js-Pjax-onswitch');
                $(document).trigger('pjaxEnd');
            }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
            $(document).trigger('pjaxEnd');
        }

        $('#content a.ajax, #content-body a').click(function () {
            $(document).find('.pjax-clicked-link').removeClass('pjax-clicked-link');
            $(this).addClass('pjax-clicked-link');
        })

        signin_pjax && signin_pjax.refresh();
        aside_pjax && aside_pjax.refresh();
        header_pjax && header_pjax.refresh();
        content_pjax && content_pjax.refresh();
        account_pjax && account_pjax.refresh();
    });

    var switch_h_option = {
        classNames: {
            // class added on the element that will be removed
            remove: 'animate animate-reverse animate-fast animate-no-delay',
            // class added on the element that will be added
            add: 'animate',
            // class added on the element when it go backward
            backward: 'fadeInRight',
            // class added on the element when it go forward (used for new page too)
            forward: 'fadeInLeft'
        },
        callbacks: {
            addElement: function (el) {
                $(el).parent().addClass('js-Pjax-onswitch');
            },
            removeElement: function (el) {
                $(el).css('width', $(el).parent().width());
            }
        }
    };

    var signin_pjax = new Pjax({
        cacheBust: false,
        elements: '#sign-in',
        selectors: ['title', '#main-for-signin', 'footer'],
        switches: {
            '#main-for-signin': function (oldEl, newEl, options, switchOptions) {
                this.switches.sideBySide.bind(this)(oldEl, newEl, options, switchOptions);
            }
        },
        switchesOptions: {
            '#main-for-signin': switch_h_option
        }
    });

    var account_pjax = new Pjax({
        cacheBust: false,
        elements: '#header a[href="account.general.html"]',
        selectors: ['title', '#content', 'footer'],
        switches: {
            '#content': function (oldEl, newEl, options, switchOptions) {
                this.switches.sideBySide.bind(this)(oldEl, newEl, options, switchOptions);
            }
        },
        switchesOptions: {
            '#content': switch_h_option
        }
    });

    var header_pjax = new Pjax({
        cacheBust: false,
        elements: '#header .navbar-nav a:not(.no-ajax)',
        selectors: ['title', '#main', 'footer'],
        switches: {
            '#main': function (oldEl, newEl, options, switchOptions) {
                this.switches.sideBySide.bind(this)(oldEl, newEl, options, switchOptions);
            }
        },
        switchesOptions: {
            '#main': switch_h_option
        }
    });

    var aside_pjax = new Pjax({
        cacheBust: false,
        elements: '#aside a:not(.no-ajax), #content a.ajax',
        selectors: ['title', '#content', 'footer'],
        switches: {
            '#content': function (oldEl, newEl, options, switchOptions) {
                if ($(oldEl).find('.pjax-clicked-link').is('[pjax-back]')) {
                    $(newEl).find('#pjax-back-link').replaceWith($('.pjax-clicked-link').attr('pjax-back'));
                }
                this.switches.sideBySide.bind(this)(oldEl, newEl, options, switchOptions);
            }
        },
        switchesOptions: {
            '#content': switch_h_option
        }
    });

    var content_pjax = new Pjax({
        cacheBust: false,
        elements: '#content-aside a, #content-body a',
        selectors: ['title', '#content-body', 'footer'],
        switches: {
            '#content-body': function (oldEl, newEl, options, switchOptions) {
                this.switches.sideBySide.bind(this)(oldEl, newEl, options, switchOptions);
            }
        },
        switchesOptions: {
            '#content-body': switch_h_option
        }
    });

})(jQuery);