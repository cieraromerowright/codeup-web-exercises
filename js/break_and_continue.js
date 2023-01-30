"use strict";

var userInput;
while(true){
    userInput = Number(prompt("enter and odd number between 1 and 50"));
    if(userInput % 2 === 1 && userinput >= 1 && userInput <=50) {
        break;
    }
}

for(var i=1; i<=50; i++) {
    if(i === userInput) {

        console.log("Oh no skipping numbers" + i);
        continue;
    }
    console.log("These are the odd numbers" + i);
}