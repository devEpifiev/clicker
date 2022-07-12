const countClicks = document.getElementById('countClicks');

let value = 0;

function start() {
    countClicks.innerHTML = ++value;
}

function reset() {
    value = 0;
    countClicks.innerHTML = value;
}