/ Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false
"use strict;"
function timesFour(num) {
    return num * 4;
    var answer = timesFour(0); // 0
}

function timesFour(num) {
    return num * 4
    var answer = timesFour("5"); // 20
}

function timesFour(num) {
    return num * 4
    var answer = timesFour(-5); // -20
}

function timesFour() {
    return num * 4
    var answer = timesFour('Texas'); // False
}

function timesFour() {
    return num * 4
    var answer = timesFour([2,1,0]); // False
}

function timesFour() {
    return num * 4
    var answer = timesFour (true); //false
}

function timesFour(){
    return (null); // false
}


// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

function convertDaystoHours () {

}



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false