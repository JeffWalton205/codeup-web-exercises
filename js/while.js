"use strict";
// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 1;
// while (i <= 16) {
//     console.log(Math.pow(2, i));
//     i++;
// }
// **********Instructor SolutioN!!!!!!!!!
// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i *=2;
// }


// An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones

// var totalCones = Math.floor(Math.random() * 50) + 50;
// var i = Math.floor(Math.random() * 5) + 1;
//
// do {
//     console.log(totalCones);
//     console.log(i);
//     console.log(i + ' cones sold...');
//     i++;
// } while (i <= totalCones);
// ****************Instructor Solution!**************
// var allCones = Math.floor(Math.random() * 50) + 50;
// do{
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//     if (conesPurchased > allCones){
//         var sadMessage = "Cannot sell you " + conesPurchased + " I only have " +            allCones + " left";
//         console.log(sadMessage);
//     } else {
//         allCones -= conesPurchased;
//         var happyMessage = conesPurchased + " cones sold..." + allCones + " cones to            go!";
//         console.log(happyMessage);
//     }
// } while (allCones > 0);
//     console.log("Yay I sold all my cones!");
