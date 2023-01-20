"use strict";
console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var whatIsYourFavoriteColor = prompt( "what is your favorite color")
alert("Great! " + whatIsYourFavoriteColor + " is my favorite color too!")

var littlemermaid = prompt("How much many days was little mermaid rented");
var brotherbear = prompt("How many days was Brother Bear rented");
var hercules = prompt("How many days was Hercules rented");

let mermaid = littlemermaid*3
let bear =  brotherbear*3
let herc = hercules*3


let totalprice = (mermaid + bear + herc );



alert("Your total price is $" + totalprice )


