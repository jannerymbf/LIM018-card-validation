const validator = {
  isValid: function(cardNumber){
    let arrayCardNumber=Array.from(cardNumber);
    let arrayCardNumber2=arrayCardNumber.reverse();
    
    let finalArray=arrayCardNumber2.map(function(element, position) {
      parseInt(element);
      if(position%2!==0){
        let newElement=element*2;
        if(newElement>9){
          let numberToString=newElement.toString();
          let digit1=parseInt(numberToString.charAt(numberToString.length-1));
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

    return (totalNumber%10===0)?true:false;
  },

  maskify: function(cardNumber){
    let arrayCard=Array.from(cardNumber);
    let newStringCardNumber;
    let newCardNumber;

    if(cardNumber===""){
      return "";
    } else if(cardNumber.length===1 || cardNumber.length===2 ||cardNumber.length===3 || cardNumber.length===4){
      return cardNumber;
    } else if(cardNumber.length>=5){
      for(let i=0; i<cardNumber.length-4;i++){
        arrayCard[i]=arrayCard[i].replace(arrayCard[i],"#");
        newStringCardNumber=arrayCard.toString();
      }
    }

    newCardNumber=newStringCardNumber.replace(/,/g,"");
    return newCardNumber;
  }


};


export default validator;

