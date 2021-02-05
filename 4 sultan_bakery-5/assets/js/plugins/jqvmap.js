(function ($) {
	"use strict";

  var init = function(){
    
    // world map
    $('#jqvmap-world').each(function(){
      $(this).vectorMap(
          {
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#ffffff',
            borderWidth: 0.25,
            borderOpacity: 0.25,
            color: 'rgba(120,130,140, 0.1)',
            enableZoom: false,
            showTooltip: true,
            selectedColor: null,
            hoverColor: null,
            colors: {
              us: hexToRGB(theme.color.primary, 0.5),
              ru: hexToRGB(theme.color.info, 0.5),
              gb: theme.color.success,
              in: theme.color.warning
            }
          }
        );
    })

    // usa map
    $('#jqvmap-usa').each(function(){
      $(this).vectorMap(
        {
          map: 'usa_en',
          backgroundColor: 'transparent',
          borderColor: '#ffffff',
          borderWidth: 0.25,
          borderOpacity: 0.25,
          color: 'rgba(120,130,140, 0.1)',
          enableZoom: false,
          showTooltip: true,
          selectedColor: null,
          hoverColor: null,
          colors: {
              ca: theme.color.primary,
              fl: theme.color.info,
              ny: theme.color.success,
              mo: hexToRGB(theme.color.primary, 0.5),
              or: hexToRGB(theme.color.warning, 0.5)
          }
        }
      );
    });

    // france map
    $('#jqvmap-france').each(function(){
      $('#jqvmap-france').vectorMap(
        {
          map: 'france_fr',
          backgroundColor: 'transparent',
          borderColor: '#ffffff',
          borderWidth: 0.25,
          borderOpacity: 0.25,
          color: 'rgba(120,130,140, 0.1)',
          enableZoom: false,
          showTooltip: true,
          selectedColor: null,
          hoverColor: null,
          colors: {
              'fr-18': theme.color.primary,
              'fr-2b': theme.color.warning
          }
        }
      );
    });

  }

  // for ajax to init again
  $.fn.vectorMap.init = init;

})(jQuery);
