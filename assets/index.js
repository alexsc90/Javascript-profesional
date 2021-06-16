import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    /* plugins: [new AutoPlay()] */ 
});

const playButton = document.querySelector("#play");
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector("#mute");
muteButton.onclick = () => {
    if(player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};

