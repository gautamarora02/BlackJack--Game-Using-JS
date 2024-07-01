let cards = []
let sum = 0;
let isAlive = false;
let isBlackJack = false;
let drawanother = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.querySelector("#message-el");
let cardsEl = document.getElementById("cards-el")
let playEl = document.getElementById("play-el");

let Player = {
    name: "Gautam", 
    chips : 120
}

playEl.textContent = Player.name +": $"+  Player.chips;


function startgame(){
    isAlive = true;
    isBlackJack = false;
    cards = [];
    let number1 = getRandomCard();
    let number2 = getRandomCard();
    cards.push(number1);
    cards.push(number2);
    sum = number1 + number2;
    rendergame();
}

function getRandomCard(){
    let number = Math.floor(Math.random()*13)+1;
    if(number === 1){
        return 11;
    }
    else if(number>= 11){
        return 10;
    }
    else return number;
}

function rendergame(){
    console.log(cards)
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum<21){
        message = "Do you want to draw a new card?";
    }
    else if(sum ===21){
        message = "Wohoo! You've got BlackJack!";
        isBlackJack = true;
    }
    else{
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

function drawnew(){
    if(isAlive == true && isBlackJack == false){
    newcard = Math.floor(Math.random()*10)+2
    cards.push(newcard)
    drawanother = true;
    sum += newcard;
    rendergame();
    }
}