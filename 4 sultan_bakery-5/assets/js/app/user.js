window.user = {};

(function ($, lists) {
  "use strict";

  var nav_el = "#user-nav"
      ,list_el = "#user-list"
      ,tagFilter = ""
      ,filter = ""
      ,link = "app.user.html#"
      ,navList
      ,list
      ,noticed = false
      ;
  $(document).on('click', nav_el+' a', function(e){
      tagFilter = $(this).find('.nav-text').text();
      filter = "";
      if(tagFilter == "All") tagFilter="";
      $('input.search').attr('placeholder', 'Search '+tagFilter);
      update(list);
      $('#content-aside').modal('hide');
  });

  $(document).on('click', list_el+' #btn-trash', function(e){
    $('input[name="id"]:checked').each(function(){
      list.remove('id', $(this).val());
    });
  });

  $(document).on('click', nav_el+' #newBtn', function(e){
    var newField = $('#newField'), 
        str = $.trim( newField.val() ),
        label = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        ;

    if(label == ''){
      return;
    }

    navList.add({
      name: label,
      link: link+label
    });
    newField.val('');

    notie.confirm({
      text: 'Group "'+ label +'" added',
      submitText: '',
      cancelText: 'Undo',
      cancelCallback: function () {
        navList.items.pop();
        navList.update();
        notie.alert({ type: 3, text: 'New group removed...' })
      }
    });

  });

  $(document).on('click', '#filter span', function(e){
      filter = $(this).text();
      $('#filter span').removeClass('text-primary');
      $(this).addClass('text-primary');
      update(list);
  });

  function update(list){
    if(!list) return;
    list.filter(function (item) {
      if (item.values().tag.indexOf(tagFilter) > -1) {
        if(filter !== ''){
          if(item.values()['item-author'].indexOf(filter) == 0){
            return true;
          }else{
            return false;
          }
        }else{
          return true;
        }
      } else {
        return false;
      }
    });

    list.update();
    $('.list', list_el).removeClass('hide').addClass('animate fadeIn');
  }

  function updateCount(count){
    $('#count').text(count);
  }

  var init = function(){
    $(document).trigger('refresh');
    
    // nav
    navList = new List(nav_el.substr(1), {
      listClass: 'nav',
      item: '<li><a href class="link"><span class="mx-2"><b class="badge badge-circle xs text-secondary"></b></span><span class="nav-text name"></span></a></li>',
      valueNames: [
        'name',
        { name: 'link', attr: 'href' }
      ]
    });

    // list
    if( $(list_el).length ){
      list = new List(list_el.substr(1), {
          valueNames: [
            { data: ['id'] },
            'item-author',
            'item-except',
            'tag'
          ],
          page: 10,
          pagination: true
      });

      list.on('updated', function (list) {
        updateCount(list.matchingItems.length);
        if (list.matchingItems.length > 0) {
          $('.no-result').addClass('hide');
        } else {
          $('.no-result').removeClass('hide');
        }
      });

      updateCount(list.items.length);
      update(list);
    }

    if(!noticed){
      notie.alert({text: 'Try input keyword to search users', position: 'top'});
      noticed = true;
    }

  }

  // for ajax to init again
  lists.init = init;

})(jQuery, window.user);
