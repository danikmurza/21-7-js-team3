/*
* What number is bigger?
Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers.

!Bonus: add error messages if the numbers are equal or cannot be compared.
!Don't forget to test it! */

function whichNumBigger(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("YOU SHOULD ONLY TRY NUMBERS!");
  } else if (num1 === num2) {
    console.log("The numbers are equal!");
  } else if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    console.log("Not valid!");
  }
}

console.log(whichNumBigger("A", 2));
console.log(whichNumBigger(2, 2));
console.log(whichNumBigger(3, -20));
console.log(whichNumBigger(-2, -3));
