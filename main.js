let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green-aj');
let additionalGreen = document.querySelector('#green');

let red_2 = document.querySelector('#red-2');
let yellow_2 = document.querySelector('#yellow-2');
let green_2 = document.querySelector('#green-aj-dzax');
let additionalGreen_2 = document.querySelector('#green-2');

let red_3 = document.querySelector('#red-3');
let yellow_3 = document.querySelector('#yellow-3');
let green_3 = document.querySelector('#green-dzax');
let additionalGreen_3 = document.querySelector('#green-dz-3');

let start = document.querySelector('.start');

start.onclick = function () {

    green.style.backgroundColor = 'green';
    additionalGreen.style.backgroundColor = 'green';

    red_2.style.backgroundColor = 'red';

    green_3.style.backgroundColor = 'green';

    function changeLights1_1() {
        yellow.style.backgroundColor = null;
        yellow_2.style.backgroundColor = null;
        yellow_3.style.backgroundColor = null;

        green.style.backgroundColor = 'green';
        additionalGreen.style.backgroundColor = 'green';

        red_2.style.backgroundColor = 'red';
        green_3.style.backgroundColor = 'green';
    }

    function changeLights1_2() {
        red.style.backgroundColor = 'red';
        additionalGreen.style.backgroundColor = null;
        green.style.backgroundColor = null;

        red_2.style.backgroundColor = 'red';
        additionalGreen_2.style.backgroundColor = 'green';

        additionalGreen_3.style.backgroundColor = 'green';
        red_3.style.backgroundColor = null;
    }

    function changeLights1_3() {

        yellow.style.backgroundColor = null;
        yellow_2.style.backgroundColor = null;
        yellow_3.style.backgroundColor = null;

        red.style.backgroundColor = 'red';
        additionalGreen.style.backgroundColor = 'green';

        green_2.style.backgroundColor = 'green';
        additionalGreen_2.style.backgroundColor = 'green';

        red_3.style.backgroundColor = 'red';
    }

    function yellowLights() {

        red.style.backgroundColor = null;
        additionalGreen.style.backgroundColor = null;
        green.style.backgroundColor = null;

        red_2.style.backgroundColor = null;
        additionalGreen_2.style.backgroundColor = null;
        green_2.style.backgroundColor = null;

        additionalGreen_3.style.backgroundColor = null;
        red_3.style.backgroundColor = null;
        green_3.style.backgroundColor = null;

        yellow.style.backgroundColor = 'yellow';
        yellow_2.style.backgroundColor = 'yellow';
        yellow_3.style.backgroundColor = 'yellow';
    }

    setTimeout(changeLights1_2, 10000);
    setTimeout(yellowLights, 15000);
    setTimeout(changeLights1_3, 18000);
    setTimeout(yellowLights, 27000);
    setTimeout(changeLights1_1, 30000);
    setTimeout(repet, 35000);

    function repet() {
        setTimeout(changeLights1_2, 10000);
        setTimeout(yellowLights, 15000);
        setTimeout(changeLights1_3, 18000);
        setTimeout(yellowLights, 27000);
        setTimeout(changeLights1_1, 30000);
        setTimeout(repet, 35000);
    }

} 
