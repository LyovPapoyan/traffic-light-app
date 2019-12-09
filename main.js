let karmir = document.querySelector('#red');
let dexin = document.querySelector('#yellow');
let kanach = document.querySelector('#green-aj');
let lrKanach = document.querySelector('#green');


let karmir_2 = document.querySelector('#red-2');
let dexin_2 = document.querySelector('#yellow-2');
let kanach_2 = document.querySelector('#green-aj-dzax');
let lrKanach_2 = document.querySelector('#green-2');


let karmir_3 = document.querySelector('#red-3');
let dexin_3 = document.querySelector('#yellow-3');
let kanach_3 = document.querySelector('#green-dzax');
let lrKanach_3 = document.querySelector('#green-dz-3');


let zone_1 = document.querySelector('.zone-1');
let zone_2 = document.querySelector('.zone-2');
let zone_3 = document.querySelector('.zone-3');


zone_1.onclick = function () {
    karmir.style.backgroundColor = 'red';

    karmir_2.style.backgroundColor = 'red';
    lrKanach_2.style.backgroundColor = 'green';

    lrKanach_3.style.backgroundColor = 'green';
    kanach_3.style.backgroundColor = 'green';




    function changeLights1_1() {

        kanach.style.backgroundColor = null;
        lrKanach.style.backgroundColor = null;
        kanach_2.style.backgroundColor = null;
        karmir_3.style.backgroundColor = null;

        dexin.style.backgroundColor = null;
        dexin_2.style.backgroundColor = null;
        dexin_3.style.backgroundColor = null;

        karmir.style.backgroundColor = 'red';

        karmir_2.style.backgroundColor = 'red';
        lrKanach_2.style.backgroundColor = 'green';

        lrKanach_3.style.backgroundColor = 'green';
        kanach_3.style.backgroundColor = 'green';


    }


    function changeLights1_2(num) {
        lrKanach.style.backgroundColor = 'green';

        lrKanach_3.style.backgroundColor = null;
        console.log(num);

    }



    function yellowLights() {

        karmir.style.backgroundColor = null;
        lrKanach.style.backgroundColor = null;
        kanach.style.backgroundColor = null;

        karmir_2.style.backgroundColor = null;
        lrKanach_2.style.backgroundColor = null;
        kanach_2.style.backgroundColor = null;

        lrKanach_3.style.backgroundColor = null;
        karmir_3.style.backgroundColor = null;
        kanach_3.style.backgroundColor = null;


        dexin.style.backgroundColor = 'yellow';
        dexin_2.style.backgroundColor = 'yellow';
        dexin_3.style.backgroundColor = 'yellow';

    }


    function changeLights1_3() {

        lrKanach_2.style.backgroundColor = null;

        dexin.style.backgroundColor = null;
        dexin_2.style.backgroundColor = null;
        dexin_3.style.backgroundColor = null;

        kanach.style.backgroundColor = 'green';
        lrKanach.style.backgroundColor = 'green';

        karmir_2.style.backgroundColor = 'red';

        kanach_3.style.backgroundColor = 'green'


    }


    function changeLights2_1() {

        kanach_3.style.backgroundColor = null;
        kanach.style.backgroundColor = null;

        karmir_2.style.backgroundColor = null;

        karmir.style.backgroundColor = 'red';

        lrKanach_2.style.backgroundColor = 'green';
        kanach_2.style.backgroundColor = 'green';

        lrKanach.style.backgroundColor = 'green';

        karmir_3.style.backgroundColor = 'red';
    }

    setTimeout(changeLights1_2, 10000, 1);
    setTimeout(yellowLights, 15000);
    setTimeout(changeLights1_3, 18000);
    setTimeout(changeLights2_1, 28000);
    setTimeout(yellowLights, 35000);
    setTimeout(changeLights1_1, 38000);
    setTimeout(repeat, 42000)

    function repeat() {
        setTimeout(changeLights1_2, 10000);
        setTimeout(yellowLights, 15000);
        setTimeout(changeLights1_3, 18000);
        setTimeout(changeLights2_1, 28000);
        setTimeout(yellowLights, 35000);
        setTimeout(changeLights1_1, 38000);
        setTimeout(repeat_1, 42000);

    }

}


zone_2.onclick = function () {

    kanach.style.backgroundColor = 'green';
    lrKanach.style.backgroundColor = 'green';

    karmir_2.style.backgroundColor = 'red';

    kanach_3.style.backgroundColor = 'green';




    function changeLights1_1() {

        dexin.style.backgroundColor = null;
        dexin_2.style.backgroundColor = null;
        dexin_3.style.backgroundColor = null;

        kanach.style.backgroundColor = 'green';
        lrKanach.style.backgroundColor = 'green';

        karmir_2.style.backgroundColor = 'red';

        kanach_3.style.backgroundColor = 'green';


    }

    function changeLights1_2() {


        karmir.style.backgroundColor = 'red';
        lrKanach.style.backgroundColor = null;
        kanach.style.backgroundColor = null;

        karmir_2.style.backgroundColor = 'red';
        lrKanach_2.style.backgroundColor = 'green';

        lrKanach_3.style.backgroundColor = 'green';
        karmir_3.style.backgroundColor = null;

    }

    function changeLights1_3() {

        dexin.style.backgroundColor = null;
        dexin_2.style.backgroundColor = null;
        dexin_3.style.backgroundColor = null;

        karmir.style.backgroundColor = 'red';
        lrKanach.style.backgroundColor = 'green';

        kanach_2.style.backgroundColor = 'green';
        lrKanach_2.style.backgroundColor = 'green';

        karmir_3.style.backgroundColor = 'red';

    }

    function yellowLights() {
        
        karmir.style.backgroundColor = null;
        lrKanach.style.backgroundColor = null;
        kanach.style.backgroundColor = null;

        karmir_2.style.backgroundColor = null;
        lrKanach_2.style.backgroundColor = null;
        kanach_2.style.backgroundColor = null;

        lrKanach_3.style.backgroundColor = null;
        karmir_3.style.backgroundColor = null;
        kanach_3.style.backgroundColor = null;

        dexin.style.backgroundColor = 'yellow';
        dexin_2.style.backgroundColor = 'yellow';
        dexin_3.style.backgroundColor = 'yellow';
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


zone_3.onclick = function () {


    karmir.style.backgroundColor = 'red';
    lrKanach.style.backgroundColor = 'green';

    kanach_2.style.backgroundColor = 'green';
    lrKanach_2.style.backgroundColor = 'green';

    karmir_3.style.backgroundColor = 'red';


    function changeLights1_1() {

        dexin.style.backgroundColor = null;
        dexin_2.style.backgroundColor = null;
        dexin_3.style.backgroundColor = null;


        karmir.style.backgroundColor = 'red';
        lrKanach.style.backgroundColor = 'green';

        kanach_2.style.backgroundColor = 'green';
        lrKanach_2.style.backgroundColor = 'green';

        karmir_3.style.backgroundColor = 'red';
    }

    function changeLights1_2() {

        dexin.style.backgroundColor = null;
        dexin_2.style.backgroundColor = null;
        dexin_3.style.backgroundColor = null;

        kanach.style.backgroundColor = 'green';
        lrKanach.style.backgroundColor = 'green';

        karmir_2.style.backgroundColor = 'red';

        kanach_3.style.backgroundColor = 'green';
    }


    function yellowLights() {

        karmir.style.backgroundColor = null;
        lrKanach.style.backgroundColor = null;
        kanach.style.backgroundColor = null;

        karmir_2.style.backgroundColor = null;
        lrKanach_2.style.backgroundColor = null;
        kanach_2.style.backgroundColor = null;

        lrKanach_3.style.backgroundColor = null;
        karmir_3.style.backgroundColor = null;
        kanach_3.style.backgroundColor = null;

        dexin.style.backgroundColor = 'yellow';
        dexin_2.style.backgroundColor = 'yellow';
        dexin_3.style.backgroundColor = 'yellow';

    }

    function changeLights1_3() {

        kanach.style.backgroundColor = null;
        lrKanach.style.backgroundColor = null;
        karmir.style.backgroundColor = 'red';

        lrKanach_2.style.backgroundColor = 'green';

        lrKanach_3.style.backgroundColor = 'green';
    }

    setTimeout(yellowLights, 10000);
    setTimeout(changeLights1_2, 13000);
    setTimeout(changeLights1_3, 20000);
    setTimeout(yellowLights, 27000);
    setTimeout(changeLights1_1, 30000);
    setTimeout(repeat,37000);

    function repeat() {

        setTimeout(yellowLights, 10000);
        setTimeout(changeLights1_2, 13000);
        setTimeout(changeLights1_3, 20000);
        setTimeout(yellowLights, 27000);
        setTimeout(changeLights1_1, 30000);
        setTimeout(repeat,35000);
    }

}