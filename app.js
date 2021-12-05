const billAmt = document.querySelector('.bill');
const percentForm = document.querySelector('.select-tip');
const howMany = document.querySelector('.howMany');
const dispTip = document.querySelector('#tip-amount'); 
const dispTotal = document.querySelector('#total') ;
const btns = document.querySelectorAll('.btn')
const resetBtn = document.querySelector('.reset-btn')
const cPercent = document.querySelector('.custom')

// VARIABLES
let bill = 0;
let perCent = 0;
let personsNo = 0;

// FUNCTIONS
let reset = () => {
    bill = 0;
    perCent = 0;
    personsNo = 0;
    billAmt.value = ''
    howMany.value = ''
    cPercent.value = ''
    dispTotal.innerText = '$0.00';
    dispTip.innerText = '$0.00';
}

let calculate = () =>  {
    if (perCent !== 0 ){
        const tipTotal = (perCent*bill)/100;
        const tipPerPerson = tipTotal/personsNo;
        if (personsNo <= 0 ){
            dispTotal.innerText = '$0.00';
            dispTip.innerText =  '$0.00';
        }
        else{
            dispTotal.innerText = `$${Math.round(tipTotal*100)/100}`;
            dispTip.innerText =  `$${Math.round(tipPerPerson*100)/100}`;
        }
    }
}

// EVENT LISTENERS
for(let btn  of btns){
    btn.addEventListener('click',function(){
        perCent = parseInt(btn.innerText);
        calculate();
    })
}

billAmt.addEventListener('input',function(){
    bill = billAmt.valueAsNumber;
    calculate();
})

howMany.addEventListener('input',function(){
    personsNo = howMany.value;
    calculate();
})

percentForm.addEventListener('submit',function(e){
    e.preventDefault();
});
resetBtn.addEventListener('click',reset);
cPercent.addEventListener('input',function(){
    perCent = cPercent.value;
    calculate();
})



