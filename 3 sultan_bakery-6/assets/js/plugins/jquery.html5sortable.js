(function ($, sortable) {
	"use strict";

  var pluginName = "html5sortable",
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
          this._plugin = sortable(this.element, this._options);
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
  
})(jQuery, sortable);
