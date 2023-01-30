"use strict";

function showMultiplicationTable(Num){
    for(var i = 1; i <= 10; i++){
        console.log("these are the numbers " + (Num * i));
    }
}

for(var i = 1; i <=10; i++){
    var random = Math.floor(Math.random() * 180) + 20;
    if(random % 2 === 0){
        console.log("its even" + random);
    } else{
        console.log("its Odd" + random);
    }
}


