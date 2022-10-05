import videojs from "video.js";

import "video.js/dist/video-js.css";

import "@videojs/http-streaming/dist/videojs-http-streaming.min";

import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";

const options = {
  fluid: false,
  liveui: true,
};

const video = videojs("player", options, (player) => {
  console.log(player.seekable());
});
video.httpSourceSelector();

const video2 = videojs("player2", options);
video2.httpSourceSelector();
