let circularProgressHc = document.querySelector(".circular-progress-hc"),
    circularProgressJs = document.querySelector(".circular-progress-js"),
    progressValueHc = document.querySelector(".progress-value-hc"),
    progressValueJs = document.querySelector(".progress-value-js");

let progressStartValueHc = 0,
    progressEndValueHc = 90,
    progressStartValueJs = 0,
    progressEndValueJs = 70,
    speed = 30;

let progressHc = setInterval(() => {
    progressStartValueHc++;

    progressValueHc.textContent = `${progressStartValueHc}%`
    circularProgressHc.style.background = `conic-gradient(#7d2ae8 ${progressStartValueHc * 3.6}deg, #ededed 0deg)`

    if (progressStartValueHc == progressEndValueHc) {
        clearInterval(progressHc);
    }
}, speed);

let progressJs = setInterval(() => {
    progressStartValueJs++;

    progressValueJs.textContent = `${progressStartValueJs}%`
    circularProgressJs.style.background = `conic-gradient(#a180cb ${progressStartValueJs * 3.6}deg, #ededed 0deg)`

    if (progressStartValueJs == progressEndValueJs) {
        clearInterval(progressJs);
    }
}, speed);