let time = 30;
let el = document.getElementById("time");

setInterval(() => {
    time--;
    el.textContent = time;
}, 1000);

