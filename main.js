const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

const hrs = document.querySelector('#hrs')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')


let hrsHolder = 0;
let minHolder = 0;
let secHolder = 0;
let milSecHolder = 0;

let runtime;

let active = true

const functionHolder = ()=>{
    milSecHolder += 1;
        
        if(milSecHolder === 450){
            milSecHolder = 0;

            sec.textContent = secHolder += 1;

            if(secHolder == 60){
                secHolder = 0;
                sec.textContent = secHolder;


                min.textContent = minHolder += 1

                if(minHolder == 60){
                    minHolder = 0;
                    min.textContent = minHolder;


                    hrs.textContent = hrsHolder += 1;
                }
            }
        }

}



startBtn.addEventListener('click',function(){

    if(active){

        active = false;

        runtime = setInterval(functionHolder,0)

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
    milSecHolder = 0;

    hrs.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";

    clearInterval(runtime)

    active = true
})