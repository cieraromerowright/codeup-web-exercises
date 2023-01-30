"use strict";

function showMultiplicationTable(Number){
    for(var i = 1; i <= 10; i++){
        console.log(Number + " x " + 1 + " = " + (Number* i));
    }
    showMultiplicationTable(7)
}

for(var i = 1; i <=10; i++){
    var random = Math.floor(Math.random() * 180) + 20;
    if(random % 2 === 0){
        console.log("its even" + random);
    } else{
        console.log("its Odd" + random);
    }
}

for(var i = 1; i <=9; i++) {
    var iString = "";
    for(var n=1; n=i; n++) {
        iString +=i;
    }
    console.log(iString);
}

for(var i=1; i<=9; i++) {
    console.log(i.iString().repeat(i))
}

for(var i=100; i>=5; i=1-5) {
    console.log(i);
}


