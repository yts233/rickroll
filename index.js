let video = document.createElement('video');
let canPlay = false;
let loaded = false;
video.onclick = e => document.documentElement.requestFullscreen();

async function main(){
    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource('rickroll.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
            loaded = true;
            if (canPlay)
                startPlay();
        });
    }
}

function startPlay() {
    document.body.innerHTML='';
    document.body.appendChild(video);
    video.classList.add('video');
    video.play();
    document.documentElement.requestFullscreen();
}

function start() {
    canPlay = true;
    if (loaded)
        startPlay();
}

main().catch(e=>console.error(e));
