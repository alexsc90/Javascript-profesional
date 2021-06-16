import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/Autopause.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ], 
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

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}

