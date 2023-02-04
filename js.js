function currentTime() {
    let date = new Date();
    let hs = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    hs = (hs < 10) ? "0" + hs : hs;
    min = (min < 10) ? "0" + min : min;
    seg = (seg < 10) ? "0" + seg : seg;

    let horaActual = `${hs} : ${min} : ${seg}`;
    let watch = document.getElementById("watch");
    
    watch.innerHTML = horaActual;
}

currentTime();
setInterval(currentTime, 1000);