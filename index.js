// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
for (let i = 0; i < gifts.length; i++){
    console.log(`wrapped ${gifts[i]} years old. Happy birthday to me!`);
    //debugger
}

return gifts;
}

wrapGifts(gifts);

*/

function countDown(num){

    while(num >= 0){
        console.log(num);
        num--;
    }
}

function writeCards(names, giftType){

    const newArray = [];
    for(let i= 0; i < names.length; i++){

        
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${giftType} gift!`

        
    }
    return newArray;
}