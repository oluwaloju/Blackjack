//
// let cards = [firstcard, secondcard];
// let sum = firstcard + secondcard;

let cards = [];
let firstcard = randomNumber();
let secondcard = randomNumber();
var sum = firstcard + secondcard;
let blackjackvalue = false; // checks for blackjack value
let isalive = true; //to check if the user can play only when the game is true
let message = "";
let gamestate = document.getElementById("message"); // get the gamestate
let sumEl = document.getElementById("sum"); //holding the sum
let cardEl = document.getElementById("card"); //holding the card
let playerEl = document.getElementById("Player"); //holding the player details
function randomNumber() {
  let jacknumbers = Math.floor(Math.random() * 14) + 1; //produces random numbers between 1 and 13
  // to be used by first and second card
  if (jacknumbers === 1) {
    return 11;
  } //these if conditions are for setting the ace card to either 1 or 11
  else if (jacknumbers > 10) {
    return 10;
  } else {
    return jacknumbers;
  }
  // let number=5;
  // return number
}

function start() {
  // let firstcard = randomNumber();
  // let secondcard = randomNumber();
  let cards = [firstcard, secondcard];
  let sum = [firstcard + secondcard];
  rendergamestate();
} //when this is called, it triggers the rendergamestate function

function rendergamestate() {
  cardEl.innerText = "cards:" + " " + firstcard + " " + secondcard;
  // for (i = 0; i < cards.length; i += 1) {
  //   cardEl.innerText+= card[i] + " ";
  //using the for loop to display the card contents
  sumEl.innerText = "sum:" + " " + sum;
}

if (sum <= 20) {
  message = "Do you want to draw a new card?";
  blackjackvalue = false;
} else if (sum === 21) {
  message = "Blackjack!";
  blackjackvalue = true;
} else {
  message = "You are out";
  isalive = false;
  blackjackvalue = false;
}
gamestate.innerText = message;

function newcard() {
  //this button is for the user to add a new card to the already existing cards
  if (isalive === true && blackjackvalue === false) {
    var thirdcard = randomNumber();
    sum += thirdcard; // sum=sum+thirdcard;
    cards.push(thirdcard);
    newcardrender(); //calling the function to start the game
  }
}
function newcardrender(){
  for (i=0; i<cards.length; i+= 1) {
//   cardEl.innerText= firstcard + " "+secondcard + " "+thirdcard + " ";
}
}
