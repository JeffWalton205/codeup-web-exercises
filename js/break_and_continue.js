"use strict";
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// var numToStopAt = prompt("Enter an odd number from 1-50");
//
// for (var i = 1; i < 50; i+=2) {
//
//     console.log('Here is an odd number: ' + i);
//
//     if (i === numToStopAt) {
//         console.log('Yikes! Skipping number: ' + numToStopAt);
//         break;
//     }
// }

var numberToStopAt = prompt("Enter an odd number 1-50");

for (var i = 1; i < 50; i+=2) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;

    }
}