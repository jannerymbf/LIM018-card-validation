import validator from './validator.js'; //dejarlo en la primera línea

let creditCardNumber=document.getElementById("creditCardNumber");
let validar=document.getElementById("validar");

validar.addEventListener("click", ()=>{
    validator.isValid(creditCardNumber.value);
});




