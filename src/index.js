import validator from './validator.js'; //dejarlo en la primera línea

let creditCardNumber=document.getElementById("creditCardNumber");
let validar=document.getElementById("validar");
let limpiar=document.getElementById("clean");
let finalMessage=document.getElementById("message");

validar.addEventListener("click", ()=>{
    
    if(creditCardNumber.value===""){
        finalMessage.innerHTML="**Ingrese un número de tarjeta.";
        finalMessage.classList.add("invalid");
    }else{
        if (validator.isValid(creditCardNumber.value)===true ){
            finalMessage.innerHTML="**El número de tarjeta ingresado es válido.";
            finalMessage.classList.add("valid");
            
        } else {
            finalMessage.innerHTML="**El número de tarjeta ingresado es inválido.";
            finalMessage.classList.add("invalid");
        }
    }

    creditCardNumber.value=validator.maskify(creditCardNumber.value);
    

});

limpiar.addEventListener("click", ()=>{
    location.reload();
});










