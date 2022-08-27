let video = document.createElement('video');
let canPlay = false;
let loaded = false;
video.onclick = e => document.documentElement.requestFullscreen();

async function main(){
    if (Hls?.isSupported()) {
        let hls = new Hls();
        hls.loadSource('rickroll.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
            loaded = true;
            if (canPlay)
                startPlay();
        });
    }
    else{
        alert('你的浏览器不支持此页面，我也不瞒你了，这个就是一个普通的rickroll');
        location.href='https://www.bilibili.com/video/BV1GJ411x7h7';
    }
}

function startPlay() {
    document.body.innerHTML='';
    document.body.appendChild(video);
    video.classList.add('video');
    video.play();
    document.documentElement.requestFullscreen();
    document.title='你被骗了';
}

function start() {
    canPlay = true;
    if (loaded)
        startPlay();
}

main().catch(e=>console.error(e));
