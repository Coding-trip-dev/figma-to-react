import React from 'react'

import MediaPlayer from "mediaplayer";



export default function mediaPlayer() {

const $target = document.querySelector("audio[controls], video[controls]");

// assign media player from target (all these options represent the defaults)
const player = new MediaPlayer($target, {
  prefix: "media",
  lang: {
    play: "play",
    pause: "pause",
    mute: "mute",
    unmute: "unmute",
    volume: "volume",
    currentTime: "current time",
    remainingTime: "remaining time",
    enterFullscreen: "enter fullscreen",
    leaveFullscreen: "leave fullscreen",
    download: "download",
  },
  svgs: {
    play: "#symbol-play",
    pause: "#symbol-pause",
    mute: "#symbol-mute",
    unmute: "#symbol-unmute",
    volume: "#symbol-volume",
    currentTime: "#symbol-currentTime",
    remainingTime: "#symbol-remainingTime",
    enterFullscreen: "#symbol-enterFullscreen",
    leaveFullscreen: "#symbol-leaveFullscreen",
    download: "#symbol-download",
  },
  timeDir: "ltr",
  volumeDir: "ltr",
});



  return (
    <div>mediaPlayer</div>
  )
}
