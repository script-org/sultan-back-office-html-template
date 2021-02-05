window.plyr = {};

(function ($) {
  "use strict";

  var init = function(){
    var player_audio = new Plyrist(
      {
        playlist: '#plyrist_audio', 
        player: 'audio'
      }
    );

    var play_audio_theme = new Plyrist(
      {
        playlist: '#plyrist_audio_1', 
        player: 'audio'
      },
      [],
      {
        theme: 1
      }
    );

    var player_video = new Plyrist(
      {
        playlist: '#plyrist_video', 
        player: 'video'
      },
      [],
      {
        controls: [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen', // Toggle fullscreen
        ],
        autoplay: true,
        hideControls: true,
        fullscreen:{ enabled: true }
      }
    );

  }

  // for ajax to init again
  plyr.init = init;

})(jQuery);
