const validator = {
  isValid: function(cardNumber){
    let arrayCardNumber=Array.from(cardNumber);
    let finalSum=0;
    
    for(let i=0; i<arrayCardNumber.length/2; i++){
      let temporary=arrayCardNumber[i];
      let reversedIndex=arrayCardNumber.length-i-1;
      
      arrayCardNumber[i]=arrayCardNumber[reversedIndex];
      arrayCardNumber[reversedIndex]=temporary;
    }

    for(let x=0; x<arrayCardNumber.length;x++){
      let element=parseInt(arrayCardNumber[x]);

      if(x%2!==0){
        arrayCardNumber[x]=element*2;
        if(arrayCardNumber[x]>9){
          let stringCardDigit=arrayCardNumber[x].toString();
          let digit1=parseInt(stringCardDigit.charAt(stringCardDigit.length-1));
          let digit2=parseInt(stringCardDigit.charAt(stringCardDigit.length-2));
          let sumString=digit1+digit2;

          arrayCardNumber[x]=sumString;
        }else{
          arrayCardNumber[x];
        }
      }else{
        arrayCardNumber[x]=element;
      }

      finalSum=arrayCardNumber[x]+finalSum;
    }
    
    return finalSum%10===0;
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
        let character="#";
        arrayCard[i]=character;
        newStringCardNumber=arrayCard.toString();
      } 
    }
    newCardNumber=newStringCardNumber.replace(/,/g,"");
    return newCardNumber;
  }
};


export default validator;

