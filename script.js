let textColor = document.getElementById('colorText');
textColor.innerHTML = '<div id="color" style="color:#992525">testing<div>';
let main = document.querySelector('body');

function getColor() {
    let res = '#' + con(rnd(0, 255)) + con(rnd(0, 255)) + con(rnd(0, 255));
    return res;
}

function setColor() {
    console.log(getColor());
    main.style.background = getColor();
}

//setInterval(setColor, 1000);


function con(data) {
    let a;
    let res = '';
    for (let x = data; a != 0;) {
        a = Math.trunc(x / 16);
        let b = x - a * 16;
        if (b < 10) {
            res = b + res;
        } else {
            res = num(b) + res;
        }
        x = a;
    }
    if (res.length == 1) {
        res = 0 + res;
    }
    return res;
}
function num(data) {
    res = " ";
    switch (data) {
        case 10:
            res = 'A';
            break;
        case 11:
            res = 'B';
            break;
        case 12:
            res = 'C';
            break;
        case 13:
            res = 'D';
            break;
        case 14:
            res = 'E';
            break;
        case 15:
            res = 'F';
            break;

    }
    return res;
}

function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



