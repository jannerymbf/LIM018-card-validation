import validator from './validator.js'; //dejarlo en la primera línea

let creditCardNumber=document.getElementById("creditCardNumber");
let name=document.getElementById("name");
let month=document.getElementById("month");
let year=document.getElementById("year");
let CVV=document.getElementById("CVV");
let validar=document.getElementById("validar");
let limpiar=document.getElementById("clean");

validar.addEventListener("click", ()=>{
    let finalMessage=document.getElementById("message");
    

    if(creditCardNumber.value===""){
        finalMessage.innerHTML="*Ingrese un número de tarjeta.";
    }else{
        if (validator.isValid(creditCardNumber.value)===true ){
            finalMessage.innerHTML="*El número de tarjeta ingresado es válido.";
        } else {
            finalMessage.innerHTML="*El número de tarjeta ingresado es inválido.";
        }
    }

    creditCardNumber.value=validator.maskify(creditCardNumber.value);
    

});

limpiar.addEventListener("click", ()=>{
    creditCardNumber.value="";
    name.value="";
    month.value="";
    year.value="";
    CVV.value="";
});










