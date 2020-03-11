"use strict";


function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// ***********Instructor solution**********
// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res,num);
//         });
//
//
// };



function githubInfo (userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': `token ${githubKey}`}})
        .then(function (response) {
            return response.json();
        })
        // .then(response => response.json())
        .then(function(githubData) {
            console.log(githubData)
            let userName = githubData[0].actor.login;
            console.log(`${userName} ${githubData[0].created_at}`);
        })

        // console.log(`${userName} ${githubData[0].created_at}`);

}
githubInfo("jeffwalton205")



