/* The Age Calculator
Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values. */

let currentYear = 2021;
const birth = 1986;

let ageOne = currentYear - birth;
let ageTwo = ageOne - 1;

let howOld = `You are either ${ageOne} or ${ageTwo} years old. It depends on what month you were born.`;

console.log(howOld);
