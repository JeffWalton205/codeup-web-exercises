const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const lang = users.filter(user => user.languages >= 3);
console.log(lang);

const emails = users.map(user => user.email);
console.log(emails);

// const years = users.reduce(user => user.yearsOfExperience)

const years = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);

let avgYears = years / users.length;
console.log(years);
console.log(avgYears);

// const longEmail = users.reduce((emails, person) => {
//     return person.email;
// }, 0);
// console.log(longEmail.length);

let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, "");
console.log(longestEmail);