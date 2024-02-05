let timer;
let timerPlay = false;

let button = document.querySelector('.playStop')

const start = () => {
    timer = setInterval(showTime, 1000)
    timerPlay = true
}

const stop = () => {
    clearInterval(timer)
    timerPlay = false
}

const showTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let HTXT = `${h}:${m}:${s}`;

    document.querySelector('h1').innerHTML = HTXT;
}

button.addEventListener('click', () => {
    if (timerPlay) {
        stop();

        document.querySelector('img').setAttribute('src','https://img.icons8.com/ffffff/ios-filled/50/play--v1.png')
    } else {
        start();

        document.querySelector('img').setAttribute('src','https://img.icons8.com/ffffff/ios-filled/50/stop.png')
    }
});