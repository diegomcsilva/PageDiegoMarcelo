// adding initial time classnames on load. css handles the timing.
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.getElementById("second-hand").className = "sh-" + seconds;
document.getElementById("minute-hand").className = "mh-" + minutes;
document.getElementById("hour-hand").className = "hh-" + hours;

function hour() {
    var date = new Date();
    var h = date.getHours();
    if (h <= 23 && h > 18) {
        alert("Boa Noite!");
    } else if (h < 18 && h > 12) {
        alert("Boa Tarde!");
    } else if (h < 12 && h > 1) {
        alert("Bom Dia!");
    } else {
        alert("Que horas são?");
    }
}