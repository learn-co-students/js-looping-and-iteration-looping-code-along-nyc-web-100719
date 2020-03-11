// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`);
// }

// wrapGift(gifts[0])
// wrapGift(gifts[1])
// wrapGift(gifts[2])

//For Loops
//for ([initialization]; [condition]; [iteration]) {
//    loop body
//}

function wrapGift(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
}

// wrapGift(gifts)

// const names = ["Ada", "Brendan", "Ali"]
// const event = "birthday"

function writeCards(names, event) {
    let array = []
    for (let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`      
        array.push(message)
    }
    return array
}

// writeCards(names, event)
function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    } 
}

    
//While Loops
// while ([condition]) {
//     [loop body]
//   }

const presents = ["teddy bear", "drone", "doll"];

function wrapGiftWhile(presents) {
    let i = 0;
    while (i < presents.length) {
        console.log(`Wrapped ${presents[i]} in a bow!`)
        i++
    }
}

    wrapGiftWhile(presents)
