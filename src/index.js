import validator from './validator.js'; //dejarlo en la primera línea

let creditCardNumber=document.getElementById("creditCardNumber");
let validar=document.getElementById("validar");
let limpiar=document.getElementById("clean");
let start=document.getElementById("start");
let finalMessage=document.getElementById("message");

start.addEventListener("click", ()=>{
    document.getElementById("backgroundMovies").style.background='none';
    document.getElementById("welcome").style.display='none';
    document.getElementById("footerMovies").style.color='#7F7C7C';
    document.getElementById("creditCard").style.visibility='visible';
})

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
    window.location.reload();
});










