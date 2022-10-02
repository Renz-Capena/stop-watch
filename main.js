'use strict'

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

const hrs = document.querySelector('#hrs')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')


let hrsHolder = 0;
let minHolder = 0;
let secHolder = 0;

let runtime;

let active = true

const functionHolder = ()=>{

    secHolder += 1

    sec.textContent = secHolder >= 10 ? secHolder : `0${secHolder}`;

    if(secHolder == 60){
        secHolder = 0;
        sec.textContent = `0${secHolder}`;

        minHolder += 1

        min.textContent = minHolder >= 10 ? minHolder : `0${minHolder}`

        if(minHolder == 60){
            minHolder = 0;
            min.textContent = `0${minHolder}`;

            hrsHolder += 1;

            hrs.textContent = hrsHolder >= 10 ? hrsHolder : `0${hrsHolder}`
        }
    }


}



startBtn.addEventListener('click',function(){

    if(active){

        active = false;

        runtime = setInterval(functionHolder,1000)

    }else{
        alert("Please click reset to start again")
    }

})

stopBtn.addEventListener('click',function(){
    clearInterval(runtime)

    active = true
})

resetBtn.addEventListener('click',function(){
    hrsHolder = 0;
    minHolder = 0;
    secHolder = 0;

    hrs.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";

    clearInterval(runtime)

    active = true
})