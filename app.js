const billAmt = document.querySelector('.bill');
const percentForm = document.querySelector('.select-tip');
const howMany = document.querySelector('.howMany');
const dispTip = document.querySelector('#tip-amount'); 
const dispTotal = document.querySelector('#total') ;
const btns = document.querySelectorAll('.btn')

let bill = 0;
let perCent = 0;
let personsNo = 0;
billAmt.addEventListener('input',function(){
    bill = billAmt.valueAsNumber;
})


for(let btn  of btns){
    btn.addEventListener('click',function(){
        perCent = parseInt(btn.innerText);
        calculate();
    })
}
howMany.addEventListener('input',function(){
    personsNo = howMany.valueAsNumber
})

percentForm.addEventListener('submit',function(e){
    e.preventDefault();
});



let calculate = function (){
    const tipTotal = (perCent*100)/bill;
    const tipPerPerson = tipTotal/personsNo;
    dispTotal.innerText = tipTotal;
    dispTip.innerText =  tipPerPerson
}