var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId:watch?v=JyhvTaGadTY
      playerVars: {
        autoplay: 1, // start automatically
        controls: 0, // don't show the controls (we can't click them anyways)
        modestbranding: 1, // show smaller logo
        loop: 1, // loop when complete
        playlist: 'kNizPk7xBbs' // required for looping, matches the video ID
      }
    });
  }