'use strict';

// let quantity=5;
// let pricePerDroid=3000;


function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity*pricePerDroid
  return  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
    
} 
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);




