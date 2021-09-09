/*
* Pluralize

Write a function pluralize that takes in two arguments, a number and a word, and returns the plural. For example:

!pluralize(5, 'cat'): '5 cats'
!pluralize(7, 'turtle'): '7 turtles'
*Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize(number, word) {
  if (number < 0) {
    console.log("You should enter only positive values");
    return "no pet.";
  } else if (number >= 0 && number <= 1) {
    return number + " " + word;
  } else if (number >= 1) {
    return number + " " + word + "s";
  }
}

console.log("I have " + pluralize(-2, "cat"));
console.log("I have " + pluralize(1, "cat"));
console.log("I have " + pluralize(23, "cat"));
