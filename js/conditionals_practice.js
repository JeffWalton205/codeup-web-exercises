"use strict";
// * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//     * would like to enter a number. If they click 'Ok', prompt the user for a
//     * number, then use 3 separate alerts to tell the user:
//     *
// * - whether the number is even or odd
// * - what the number plus 100 is
// * - if the number is negative or positive
// *
// * if what the user enters is not a number, use an alert to tell them that, and
// * do *not* display any of the above information.
// *
// * Can you refactor your code to use functions?
// */

var userConfirm = confirm("Would you like to enter a number?");

if (userConfirm) {
    var userInput = Number(prompt("What number?"));


}
