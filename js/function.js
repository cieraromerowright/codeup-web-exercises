"use strict";
//alert("hey what's up?")
console.log("Hello from external JavaScript");
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// named function < name is sayHello
// one parameter < parameters label should be 'name'
//return a string < string should concatenate "Hello, "+ the input/ the argument"
function sayHello(name){

     return"Hello," + name + "!";
};
var myName = ("Ciera")
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * var helloMessage = sayHello(
 */





//call my function :phone_emoji
//use my name as a string <as the input/ the argument
// the RESULT; the RETURN need to end up in var named "helloMessage"
//after all of the above: console.log the var

var helloMessage = sayHello(name:"Ciera Romero")

console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Ciera";
var resultOfFunction = sayHello(myName);

console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

/**
  // named function - istwo
  //one parameter < a number
 //should  IF inputNumber = = = 2 is true
 // otherwise false

 function isTwo(number){

 return number === 2;
 }

 //call function with the variable 'random' from line 55
 //console
 console.log("Hello this is random: " + random);
 console.log(isTwo(random));
 *
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 function calculateTIp(tipDecimal, totalBill){

 return tipDecimal * totalBill;
 }


 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

//two prompts< how much did you pay? how much do you want to ?
//two variables to save result of prompts?
// an alert! an alert using  my calculateTip function to show the result of the math


var billTotal = prompt("How much was your bill tonight? :)");

var tippercent = prompt( " How much would you like to tip in decimal?");






alert("Awesome- thank you, I think you should tip $" + calculateTip(tipPercent, billTotal))

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


//named function< applyDiscount
//two parameter < totalPrice , discountPercent
//return the ADJUSTED price < of total reflecting the discount provided
//e.g., 100 with .2 the adjusted price is 80

function applyDiscount(totalPrice, discountPercent){
    //v1
    // var mathBucket = totalPrice - (totalPrice * discountPercent);
    //
    //return mathBucket;

    //v2

    return totalPrice - (totalPrice * discountPercent);



}