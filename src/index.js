import validator from './validator.js'; //dejarlo en la primera línea

let creditCardNumber=document.getElementById("creditCardNumber");
let validar=document.getElementById("validar");

validar.addEventListener("click", ()=>{
    let finalMessage=document.getElementById("message");
    if (validator.isValid(creditCardNumber.value)==true){
        finalMessage.innerHTML="El número de tarjeta ingresado es válido.";
    } else {
        finalMessage.innerHTML="El número de tarjeta ingresado es inválido.";
    }
});








