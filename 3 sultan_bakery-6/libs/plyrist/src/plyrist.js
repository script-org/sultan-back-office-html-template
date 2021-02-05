/**
 * 0.0.1
 * playlist for plyr
 * 
 * @ blackui.com All Rights Reserved.
 * Author url: blackui.com
 */

window.Plyrist = {};
window.Plyrists = [];

(function ($, undefined) {
  "use strict";
  
  Plyrist = function(el, items, options){
    var self = this;
    this.active = 0;
    this.repeat = false;
    this.shuffle = false;
    this.items = items || [];

    this.el = $.extend({}, this._el, el);
    this.options = $.extend(true, {}, this._options, options);

    $.each(this.el, function(key, value) {
      if(key !== 'playlist' && key !=='controls'){
        self.el[key] = self.el.playlist + ' ' + self.el[key];
      }
    });

    this._getItems();
    this._createItems();
    this._createControls();

    this.player = new Plyr(this.el.player, this.options);
    Plyrists.push(this.player);

    this.player.on('ready', event => {
        self._initEvents();
        self._initState();
    });

    this.player.on('play', event => {
      Plyrists.forEach(function(player) {
          if(player !== self.player){
            player.pause();
          }
      });
    });

    this.player.on('loadedmetadata', event => {
      var duration = $(this.el.playlist + ' .plyr__time--duration');
      this.player.duration == 'Infinity' ? duration.hide() : duration.show();
    });

    this.player.on('ended', function() {
      if(self.repeat){
        self.select(self.active);
      }else{
        self.next();
      }
    });

    this._init();
  }

  Plyrist.prototype = {
    _el: {
      playlist: '#playlist',
      player: " audio",
      items: '.plyr-list',
      item: '.plyr-item',
      itemTitle: '.plyr-item-title',
      itemAuhtor: '.plyr-item-author',
      itemPoster: '.plyr-item-poster',
      poster: '.plyr__poster',
      title: '.plyr__title',
      prev: '[data-plyr="prev"]',
      next: '[data-plyr="next"]',
      like: '[data-plyr="like"]',
      shuffle: '[data-plyr="shuffle"]',
      repeat: '[data-plyr="repeat"]',
      list: '[data-plyr="list"]',
      controls: {
        prev: '<button type="button" class="plyr__control" data-plyr="prev"><svg role="presentation"><use xlink:href="#plyr-prev"></use></svg><span class="plyr__tooltip" role="tooltip">Prev</span></button>',
        play: '<button type="button" class="plyr__control" aria-pressed="false" aria-label="Play, {title}" data-plyr="play"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Pause</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span></button>',
        next: '<button type="button" class="plyr__control" data-plyr="next"><svg role="presentation"><use xlink:href="#plyr-next"></use></svg><span class="plyr__tooltip" role="tooltip">Next</span></button>',
        poster: '<div class="plyr__poster"></div>',
        title: '<div class="plyr__title"></div>',
        progress: '<div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"><progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress><span role="tooltip" class="plyr__tooltip">00:00</span></div>',
        currentTime: '<div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>',
        duration: '<div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>',
        mute: '<button type="button" class="plyr__control" aria-pressed="false" aria-label="Mute" data-plyr="mute"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span></button>',
        volume: '<div class="plyr__volume"><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"></div>',
        like: '<button type="button" class="plyr__control" aria-pressed="false" data-plyr="like"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-liked"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-like"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Dislike</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Like</span></button>',
        shuffle: '<button type="button" class="plyr__control" data-plyr="shuffle"><svg role="presentation"><use xlink:href="#plyr-shuffle"></use></svg><span class="plyr__tooltip" role="tooltip">Shuffle</span></button>',
        repeat: '<button type="button" class="plyr__control" data-plyr="repeat"><svg role="presentation"><use xlink:href="#plyr-repeat"></use></svg><span class="plyr__tooltip" role="tooltip">Repeat</span></button>',
        list: '<button type="button" class="plyr__control" data-plyr="list"><svg role="presentation"><use xlink:href="#plyr-list"></use></svg><span class="plyr__tooltip" role="tooltip">Playlist</span></button>'
      }
    },
    _options: {
      theme: 0,
      iconUrl: '../libs/plyrist/src/plyrist.svg',
      autoplay: true,
      hideControls: false,
      fullscreen:{ enabled: false }
    },
    _init: function(){
      var self = this;
      if(self.options.autoplay) {
        self.play(self.active);
      }else{
        self.select(self.active);
      }
    },
    _initState: function(){
      // to fix css when use audio player to play video
      $('.plyr--video', this.el.playlist+'.plyrist_audio').addClass('plyr--audio');
      this.shuffle ? $(this.el.shuffle).addClass('is--shuffle') : $(this.el.shuffle).removeClass('is--shuffle');
      this.repeat ? $(this.el.repeat).addClass('is--repeat') : $(this.el.repeat).removeClass('is--repeat');
    },
    _initEvents: function() {
      var self = this;

      $(this.el.prev).off().on('click', function(){
        self.prev();
      });

      $(this.el.next).off().on('click', function(){
        self.next();
      });

      $(this.el.like).off().on('click', function(){
        $(this).attr('aria-pressed', $(this).attr('aria-pressed') == 'true' ? 'false' : 'true');
      });

      $(this.el.shuffle).off().on('click', function(){
        self.shuffle = ! self.shuffle;
        self._initState();
      });

      $(this.el.repeat).off().on('click', function(){
        self.repeat = ! self.repeat;
        self._initState();
      });

      $(this.el.list).off().on('click', function(){
        $(self.el.items).toggle();
      });
    },
    _createItems: function() {
      var self = this;
      $.each(this.items, function(i, e) {
        this.el.on("click", function(e) {
          self.items[i].active = false;
          if (!$(this).hasClass("active")) {
            self.items[i].active = true;
            self.active = i;
            self.play(i);
          }
        });
      });
    },
    _getItems: function() {
      this.items = $(this.el.item).map(function(i) {
        var item = $(this);
        return {
          type: item.attr("data-type"),
          source: item.attr("data-source"),
          provider: item.attr("data-provider"),
          poster: item.attr("data-poster"),
          el: item,
          active: false
        };
      });
    },
    _createControls: function(){
      if(this.options.controls) return;
      switch(this.options.theme){
        case 0:
            this.options.controls = this._buildControls([
              this.el.controls.prev,
              this.el.controls.play,
              this.el.controls.next,
              this.el.controls.poster,
              '<div class="plyr__col d-none d-lg-block">',
              '<div class="plyr__row">',
              this.el.controls.title,
              this.el.controls.currentTime,
              this.el.controls.duration,
              '</div>',
              this.el.controls.progress,
              '</div>',
              this.el.controls.mute,
              this.el.controls.volume,
              this.el.controls.like,
              this.el.controls.repeat,
              this.el.controls.shuffle,
              this.el.controls.list
            ]);
            break;
        case 1:
            this.options.controls = this._buildControls([
              this.el.controls.poster,
              '<div class="plyr__col">',
              this.el.controls.title,
              '<div class="plyr__row">',
              this.el.controls.play,
              this.el.controls.prev,
              this.el.controls.next,
              '<div class="plyr__row"></div>',
              this.el.controls.mute,
              this.el.controls.volume,
              this.el.controls.like,
              this.el.controls.repeat,
              this.el.controls.shuffle,
              this.el.controls.list,
              '</div>',
              '<div class="plyr__row">',
              this.el.controls.progress,
              this.el.controls.currentTime,
              this.el.controls.duration,
              '</div>',
              '</div>'
            ]);
            break;
        default:
            break;
      }
      $(this.el.playlist).addClass('plyrist-theme-'+this.options.theme);
    },
    _buildControls: function(arr){
      var self = this;
      if(self.options.iconUrl){
        $.each(arr, function(key, value) {
          arr[key] = value.replace(/xlink:href="/g, 'xlink:href="'+self.options.iconUrl);
        });
      }
      return '<div class="plyr__controls">'+arr.join('')+'</div>';
    },
    select: function(index){
      $(this.el.item).removeClass("active");
      $(this.el.title).html(this.items[this.active].el.text());
      $(this.el.poster).css('background-image','url('+this.items[this.active].poster+')');
      this.items[index].el.addClass("active");
    },
    play: function(index) {
      var source = {
        type: this.items[index]['type'],
        sources: [
          {
          	src: this.items[index]["source"],
          	provider: this.items[index]["provider"]
      	  }
        ]
      };
      this.player.source = source;
      this.player.play();
      this.select(this.active);
    },
    setIndex: function(index, callback) {
      this.active =
        index > this.items.length - 1
          ? 0
          : index < 0 ? this.items.length - 1 : index;

      if(this.shuffle){
        this.active = Math.floor(Math.random() * this.items.length);
      }
      if (callback) {
        callback();
      }
    },
    prev: function() {
      var self = this;
      this.setIndex(self.active - 1, function() {
        self.play(self.active);
      });
    },
    next: function() {
      var self = this;
      this.setIndex(self.active + 1, function() {
        self.play(self.active);
      });
    }
  }

})(jQuery);
