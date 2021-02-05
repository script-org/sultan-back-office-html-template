window.chat = {};

(function ($, lists) {
	"use strict";

  var nav_el = "#chat-nav"
      ,list_el = "#chat-list"
      ,filter = ""
      ,navlist
      ,list
      ,robotList = ['Hello', 'How can I help you', 'That sound great', 'Really?', 'Howdy']
      ,noticed = false
      ;

  $(document).on('click', '#chat-form .btn', function(e){
    create();
  });

  $(document).on('keypress', '#chat-form input', function(e){
    if(e.keyCode == 13){
      create();
    }
  });

  var timeout;

  function create(){
    var newField = $('#chat-form input');
    if(newField.val() !== ''){
      list.add({
        msg: newField.val(),
        date: 'Just now',
        image: '../assets/img/a0.jpg',
        class: 'alt'
      });
      newField.val('');
    }
    gotoMsg();
    clearTimeout(timeout);
    timeout = setTimeout(robot, (Math.random() * robotList.length)*500 + 1000 );
  }

  function robot(){
    list.add({
        msg: robotList[Math.floor((Math.random() * robotList.length))],
        date: 'Just now',
        image: '../assets/img/a2.jpg',
        class: ''
    });
    gotoMsg();
  }

  function gotoMsg(){
    $('.scrollable', list_el).animate({ 
      scrollTop: $('.scrollable', list_el).prop("scrollHeight")
    }, 1000, function (x, t, b, c, d) {
          if (t==0) return b;
          if (t==d) return b+c;
          if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
          return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    });
  }

  var init = function(){
    $(document).trigger('refresh');
    
    // nav
    navlist = new List(nav_el.substr(1), {
        valueNames: [
          'item-author',
          'item-except'
        ]
    });

    // list
    list = new List(list_el.substr(1), {
      listClass: 'chat-list',
      item: 'chat-item',
      valueNames: [
        'msg',
        'date',
        { data: ['class']},
        { name: 'image', attr: 'src' }
      ]
    });

    if(!noticed){
      notie.alert({type:1, text: 'Try say something' });
      noticed = true;
    }

  }

  // for ajax to init again
  lists.init = init;

})(jQuery, window.chat);
