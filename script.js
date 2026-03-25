let time = 15;
let total = 15;

let el = document.getElementById("time");
let progress = document.getElementById("progress");
let btn = document.getElementById("backBtn");

let timer = setInterval(() => {
    time--;

    el.textContent = time;

    let percent = ((total - time) / total) * 100;
    progress.style.width = percent + "%";

    if (time <= 0){
        clearInterval(timer);
        el.textContent ="0";
        progress.style.width = "100%";

         btn.style.display = "inline-block";
    }

}, 1000);

function goTwitch() {
    window.location.href = "https://www.twitch.tv/";
}