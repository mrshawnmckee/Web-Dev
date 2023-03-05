const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// This is the speed at which the load will increase
let int = setInterval(blurring, 30)

function blurring() {
    load++
    if(load > 99) {
        clearInterval(int);
    }
    // this will make the nmbers go from 0 - 100 %, along with the load
    loadText.innerText = `${load}%`

    // this one causes the number to fade, we are mapping the following range of numbers to the load range with the scal function. Opacity ranges from 1(opaque) to 0(clear)
    //so: num = load, then load's range of numbers
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // this one causes the blur to fade
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}