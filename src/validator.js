const validator = {
  cardNumber : document.getElementById("creditCardNumber").value,
  isValid: function(){
    let arrayCardNumber=Array.from(this.cardNumber);
    let arrayCardNumber2=arrayCardNumber.reverse();

  let finalArray=arrayCardNumber2.map(function(element, position) {
    parseInt(element);
    if(position%2!==0){
      let newElement=element*2;
      if(newElement>9){
        let numberToString=newElement.toString();
        let digit1=parseInt(numberToString.cnharAt(numberToString.length-1));
        let digit2=parseInt(numberToString.charAt(numberToString.length-2));
        let suma=digit1+digit2;
        return suma;
      }else{
        return newElement;
      }
    }else{
      return parseInt(element);
    }

  })

  let totalNumber=finalArray.reduce((acumulador, valorActual)=>
  acumulador+valorActual,0);

  if (totalNumber%10===0){
    alert("Numero Valido");
  }else{
    alert("Numero Invalido");
  }

  }
};


export default validator;
