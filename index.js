// Code your solutions in this file
function writeCards(names, eventName){
    let cards = [];
    for(let i = 0; i < names.length; i++){
        //console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    //console.log(cards)
    return cards;
}

function countDown(number){
    let countdown = number;
    while (countdown > -1){
        console.log(countdown);
        countdown--;
    }
}