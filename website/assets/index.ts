import MediaPlayer from '@alexsc90/platzimediaplayer';
import AutoPlay from '@alexsc90/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@alexsc90/platzimediaplayer/lib/plugins/Autopause';
import Ads from '@alexsc90/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ], 
});

const playButton: HTMLElement = document.querySelector("#play");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#mute");
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

