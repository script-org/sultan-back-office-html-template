(function ($, ScrollReveal) {
	"use strict";

  var pluginName = "scrollreveal",
      defaults = {
      
      };

  // The actual plugin constructor
  function Plugin ( element, options ) {
      this.element = element;
      this._options = $.extend( {}, defaults, options );
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend( Plugin.prototype, {
      init: function() {
          if( window.sr ){
            sr.sync();
          }else{
            window.sr = ScrollReveal();
          }
          var item = this._options.item ? $(this.element).find(this._options.item) : this.element;
          var interval = this._options.interval;
          if( interval > 0){
            sr.reveal(item, this._options, interval);
          }else{
            sr.reveal(item, this._options);
          }
      },
      instance: function() {
          return this._plugin;
      }
  } );

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[ pluginName ] = function( options ) {
      return this.each( function() {
          if ( !$.data( this, "plugin_" + pluginName ) ) {
              $.data( this, "plugin_" +
                  pluginName, new Plugin( this, options ) );
          }
      } );
  };
  
})(jQuery, ScrollReveal);
