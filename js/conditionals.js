"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 *
 */

// var userConfirm = confirm("Would you like to enter a number?");
// if (userConfirm) {
//     var input = Number(prompt("Please enter number:"));
//     if (isNaN(input)) {
//         alert("That's not a number!");
//     } else {
//         if (input % 2 === 0){
//             alert("Your number is even!");
//         } else if (input % 2 === 1){
//             alert("Your number is odd!");
//         }
//         alert("Your number plus 100 is: " + (input + 100));
//         if (input > 0) {
//             alert("Your number is positive!");
//         }
//         else if (input <= 0) {
//             alert("Your number is negative or zero!");
//         }
//     }
// } else {
//     alert("Whatevs");
// }
//**************Instructor solution!!!**********************************
// var willContinue = confirm("Would you like to enter a number?");
//
// if(willContinue) {
//     //prompt for number
//     var userInput = prompt("What number would you like to enter?");
//
//     var isNum = !isNaN(userInput);
//
//     if (isNum) { //isNum is true
//         //we know that we have a real number
//         //Run all our calculations in this if statement
//
//         //is even or odd
//         if (userInput % 2 === 0) {
//             alert("Number is even!");
//         } else {
//             alert("Number is odd!");
//         }
//         //num + 100
//         var userNum = parseFloat(userInput);
//         alert("Your number plus 100 is " + (userNum + 100));
//
//         //negative or positive
//         if (userInput < 0) {
//             alert("Your number is negative.");
//         } else if (userInput > 0) {
//             alert("Your number is positive.");
//         } else {
//             alert("Your number is zero!");
//         }
//     } else {
//         alert("That's not a number!");
//     }
// }
// function isNumFunc(input) { //taking user number input
//     return !isNaN(input)   // true -> number, false -> NaN
// }
//
// function isEven(num) {
//     return num % 2 === 0; //true -> even, false -> odd
// }
//
// function plus100(num) {
//     var userNum = parseFloat(num);
//     return ("Your number plus 100 = " + (userNum + 100));
// }

function isNegative(num) {
    return num < 0; // true -> number is less than zero (negative)
                    // false -> number is greater than zero (positive)
}


function mainFunction (willContinue) {
    //call all functions
    if (willContinue) {
        var userInput = prompt("What number?")
        if (isNumFunc(userInput)) {
            var isEvenMessage = (isEvenMessage)
        }
    }
}

var willContinueFunc = confirm("Would you like to enter a number");



// *********************End instructor solution!!!********************

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(x) {
//     var returnPhrase;
//     if (x === "red") {
//         returnPhrase = "roses are red"
//     }
//     else if (x === "blue") {
//         returnPhrase = "violets are blue"
//     }
//     else {
//         returnPhrase = "cyan lol"
//     }
//     return returnPhrase;
// }
//***********************Instructor Solution******************
function analyzeColor(color) {
    var colorMessage = "";
    if (color === "blue") {
        colorMessage ="Ocean is blue";
    } else if (color === "red") {
        colorMessage = "Strawberries are red";
    } else if (color)
}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(x) {
//     var returnPhrase;
//     if (x === "red") {
//         returnPhrase = "roses are red"
//     }
//     else if (x === "blue") {
//         returnPhrase = "Sky is blue"
//     }
//     else if (x === "orange") {
//         returnPhrase = "Oranges are yum."
//     }
//     else if (x === "green") {
//         returnPhrase = "Green is good."
//     }
//     else if (x === "indigo") {
//         returnPhrase = "Indie go-go."
//     }
//     else if (x === "violet") {
//         returnPhrase = "Violet turned into a giant plum."
//     }
//     return returnPhrase;
// }
//
// console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    var colorMessage = "";
    switch (color) {
        case "blue":
            colorMessage = "Sky is blue";
            break
    }
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Please enter a color");
alert(analyzeColorSwitch(userColor));






/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calcTotal(luckyNumber, totalAmount) {
    var discountRate = 0;
    switch(luckyNumber) {
        case 0:
            discountRate = 0;
            break;
        case 1:
            discountRate = 0.10;
            break;
        case 2:
            discountRate = 0.25;
            break;
        case 3:
            discountRate = 0.35;
            break;
        case 4:
            discountRate = 0.50;
            break;
        case 5:
            discountRate = 1;
            break;
    }
    return totalAmount - (discountRate * totalAmount)
}






/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What was your bill total?");
alert("Your lucky number is " + luckyNumber);
alert("Your new total is " + calculateTotal(luckyNumber, totalBill).toFixed(2));