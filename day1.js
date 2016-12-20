//1) Can you restate the conditional more simply?
if ( (isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills) )
  winGoldMedals();


//2) Can you restate the conditional to use only
//one negation?
if (!rich && !happy)
    killSelf()
else
    liveOn();

//3) Camn you restate the condition to use two negations
//and be more legible?
if (!(urgent && important))
    usePostOfice();
else
    useFedex();

//4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5)
    doSomething();

//4b) Under which circumstances will doSomething run?
if (x > 5 || x <= -5)
    doSomething();

//5) Can you restate the conditional to use no negations?
if ( !(x > 10 && y < 15))
    alert("You got it!");
else
    prompt("What you need?");

//6) Can you restate the conditional to use only one negation?
if ( !(x < 10) || y <= 10 || z <= 25 || !dead ) {
    console.log("You know your DeMorgan's Laws");
}

//7) Can you distribute the negation across the expression in parens?
if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
    alert("game goes on");
}

//8) Can you distribute the negation across the expression in parens?
if (!(dead && level < 99 && world == "Earth")) {
    alert ("Life goes on");
}

//9) Generate a random number between 0 and 1 in Javascript


//10) Generate a random number between 0 and 10 in Javascript


//11) Generate a random integer between 0 and 10 (inclusive)


//12) Generate a random number between 5 and 10


//12b) Generate a random integer between 5 and 10


//13) Generate a random integer between -10 and 30


//14) Write a coin flip function. It should return the string "heads" half
//the time and the string "butts" the other half
function coinFlip(){

}

// 15) Write a card picking function that outputs
// cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts',
// '10 of Diamonds', '8 of Spades'
// There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen

// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it
function pickCard(){
    var suit = Math.round(Math.random()*3);
    if (suit === 0) suit = "Hearts";
    else if (suit === 1) suit = "Diamonds";
    else if (suit === 2) suit = "Clubs";
    else suit = "Spades";

    //your code here

    return suit;

}

//16) In programming, what is the opposite of black?

//17) In programming, what is the opposite of x > y ?

//18) Given an array of numbers, add up all the elements
var a = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];


//19) Write a function has1337s which takes an array and
//returns true if the array contains the number 1337
function has1337s(arr){
  for (var i =0; i <arr.length; i++){
    if (arr[i] == 1337) return true;
  }
  return false;
}

/*20) Write a function that receives an array and another parameter.
It will return true if one of the elements of the array is
equal to the other param. It should return false otherwise */
function containsThing(arr,theThing){

}

/* 21) Write a function that receives an array and another parameter.
It will return true if NONE of the elements of the array is
equal to the other param. It should return false otherwise */
function doesntContain(arr, theThing){

}


/* 22) Write a function that receives an array of numbers and returns
the average of those numbers*/
function getAvg(arr){
    
}



// 23) Write a function which draws a star triangle based
//on an input number
// starz(2) =
// **
// *
//starz(4) =
// ****
// ***
// **
// *


/* 24) Write a function which receives a parameter n and returns the
sum of its half plus half of that, plus half of that, until You
reach a number lower than 2.
n = 100, result = 50+25+12.5+6.25+3.125+1.5625
n = 64, result = 32+16+8+4+2+1
*/

function sumHalves(n){

}
