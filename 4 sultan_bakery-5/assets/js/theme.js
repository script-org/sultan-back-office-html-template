(function ($) {
  'use strict';

  window.theme = {
    color: {
      primary: '#137eff',
      info: '#7258ff',
      success: '#5bc146',
      warning: '#ffd14d',
      danger: '#fe4d62'
    },
    setting: {
      stickyHeader: true,
      stickyAside: true,
      foldedAside: false,
      hideAside: false,
      bg: '',
      header: 'bg-white',
      aside: 'bg-white'
    }
  };

  // ie
  if (!!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
    $('body').addClass('ie');
  }

  // iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
  var ua = window['navigator']['userAgent'] || window['navigator']['vendor'] || window['opera'];
  if ((/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua)) {
    $('body').addClass('touch');
  }

  // fix z-index on ios safari
  if ((/iPhone|iPod|iPad/).test(ua)) {
    $(document, '.modal, .aside').on('shown.bs.modal', function (e) {
      var backDrop = $('.modal-backdrop');
      $(e.target).after($(backDrop));
    });
  }

  //resize
  $(window).on('resize', function () {
    var $w = $(window).width()
      , $lg = 1200
      , $md = 991
      , $sm = 768
      ;
    if ($w > $lg) {
      $('.aside-lg').modal('hide');
    }
    if ($w > $md) {
      $('#aside').modal('hide');
      $('.aside-md, .aside-sm').modal('hide');
    }
    if ($w > $sm) {
      $('.aside-sm').modal('hide');
    }
  });

  // mousewheel
  $('body').on('DOMMouseScroll mousewheel', function (event) {
    var $header = $('#header');
    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
      $header.removeClass('scroll-up').addClass('scroll-down');
    } else {
      $header.removeClass('scroll-down').addClass('scroll-up');
    }
    if ($(window).scrollTop() == 0) {
      $header.removeClass('scroll-up scroll-down');
    }
  });

  // nav
  $(document).on('click', '[data-nav] a', function (e) {
    var $this = $(this), $active, $li, $li_li;

    $li = $this.parent();
    $li_li = $li.parents('li');

    $active = $li.closest("[data-nav]").find('.active');

    $li_li.addClass('active');
    ($this.next().is('ul') && $li.toggleClass('active') && e.preventDefault()) || $li.addClass('active');

    $active.not($li_li).not($li).removeClass('active');

    if ($this.attr('href') && $this.attr('href') != '#') {
      $(document).trigger('Nav:changed');
    }
  });

  // toggleClass
  $(document).on('click', '[data-toggle-class]', function (e) {
    var $self = $(this);
    var attr = $self.attr('data-toggle-class');
    var target = $self.attr('data-toggle-class-target') || $self.attr('data-target');
    var closest = $self.attr('data-target-closest');
    var classes = (attr && attr.split(',')) || '',
      targets = (target && target.split(',')) || Array($self),
      key = 0;
    $.each(classes, function (index, value) {
      var target = closest ? $self.closest(targets[(targets.length == 1 ? 0 : key)]) : $(targets[(targets.length == 1 ? 0 : key)]),
        current = target.attr('data-class'),
        _class = classes[index];
      (current != _class) && target.removeClass(target.attr('data-class'));
      target.toggleClass(classes[index]);
      target.attr('data-class', _class);
      key++;
    });
    $self.toggleClass('active');
    $self.attr('href') == "#" ? e.preventDefault() : '';
  });

  var init = function () {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    // init the plugin
    $(document).find('[data-plugin]').plugin();

    // active nav item
    var url = window.location.pathname.split('/');
    if (url.length > 0) url = url[url.length - 1];
    // $('[data-nav] li.active').removeClass('active');
    // $('[data-nav] a').filter( function() {
    //   return url == $(this).attr('href') && $(this).attr('href') !=='#';
    // }).parents('li').addClass( 'active' );

  }

  init();

  $(document).on('pjaxEnd', function () {
    init();
  });

  var namespace = theme.color.primary + '-setting';

  if (!store(namespace)) {
    store(namespace, theme.setting);
  } else {
    theme.setting = store(namespace);
  }

  var v = window.location.search.substring(1).split('&');

  for (var i = 0; i < v.length; i++) {
    var n = v[i].split('=');
    theme.setting[n[0]] = (n[1] == "true" || n[1] == "false") ? (n[1] == "true") : n[1];
    store(namespace, theme.setting);
  }

  $(document).on('click.setting', '.setting input', function (e) {
    var $this = $(this),
      $attr = $this.attr('name');
    theme.setting[$attr] = $this.is(':checkbox') ? $this.prop('checked') : $(this).val();
    store(namespace, theme.setting);
    setTheme(theme.setting);
  });

  setTheme();

  // set theme
  function setTheme() {
    var that = $('.setting');
    // bg
    $('body').removeClass($('body').attr('data-class')).addClass(theme.setting.bg).attr('data-class', theme.setting.bg);
    // header
    $('#header').removeClass($('#header').attr('data-class')).addClass(theme.setting.header).attr('data-class', theme.setting.header);
    // aside
    $('#aside').removeClass($('#aside').attr('data-class')).addClass(theme.setting.aside).attr('data-class', theme.setting.aside);
    // folded
    theme.setting.foldedAside ? $('#aside').addClass('folded') : $('#aside').removeClass('folded');
    theme.setting.hideAside ? $('#aside').addClass('hide') : $('#aside').removeClass('hide');
    // sticky header
    theme.setting.stickyHeader ? $('.page-header').addClass('sticky') : $('.page-header').removeClass('sticky');
    // sticky aside
    theme.setting.stickyAside ? $('.page-sidenav').addClass('sticky') : $('.page-sidenav').removeClass('sticky');

    that.find('input[name="foldedAside"]').prop('checked', theme.setting.foldedAside);
    that.find('input[name="hideAside"]').prop('checked', theme.setting.hideAside);
    that.find('input[name="stickyHeader"]').prop('checked', theme.setting.stickyHeader);
    that.find('input[name="stickyAside"]').prop('checked', theme.setting.stickyAside);

    that.find('input[name="bg"][value="' + theme.setting.bg + '"]').prop('checked', true);
  }

  // save setting to localstorage
  function store(namespace, data) {
    try {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || false;
      }
    } catch (err) {

    }
  }

  window.hexToRGB = function (hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  }

  $('.number-format').autoNumeric('init', { mDec: 0, vMax: '9999999999999999999999999999999999999999999999999' });

})(jQuery);
