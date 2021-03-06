window.addEventListener('load', () => {
    loading.style.display = 'none';
});

const loading = document.querySelector('.loading');

let canvaslist = document.querySelector('.canvaslist ul');

canvaslist.onscroll = function () {
    progressBar()
};

// progress bar
function progressBar() {
    let winScroll = document.body.scrollTop || canvaslist.scrollTop;
    let height = canvaslist.scrollHeight - canvaslist.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}


// video hover
const video = Array.from(document.querySelectorAll('li'));

video.forEach((item) => {
    const videoElem = item.querySelector('video');

    videoElem.addEventListener('mouseenter', handlePlayButton, false);
    videoElem.addEventListener('mouseleave', handlePlayButton, false);

    async function playVideo() {
        try {
            await videoElem.play();
        } catch (err) {
            console.log(err);
        }
    }
    
    function handlePlayButton() {
        if (videoElem.paused) {
            playVideo();
        } else {
            videoElem.pause();
        }
    }
});

