"use strict";

var i = 2;
while(i <=65536) {
    console.log(i);
    i *= 2;
}

var cones = Math.floor(Math.random()* 50) +50);
console.log(cones);

do {
    var conesBought = Math.floor((Math.random() * 4) + 1);
    if(conesBought < cones) {
        console.log(conesBought + "cones bought...");
        cones -= conesBought;
    } else if (conesBought > cones) {
        console.log("Cannot sell" + conesBought + "cones I only have" + cones);
    } else {
        console.log("Awesome! I sold everything I had!");
        cones -= conesBought;
    }
} while(cones > 0)