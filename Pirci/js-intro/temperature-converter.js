/* The Temperature Converter
Let's make a program to convert celsius tempatures to fahrenheit and vice versa, so we can complain about the weather with our friends oversees.

Reminder: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.

Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degress symbol.

* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "NN°C is NN°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "NN°F is NN°C."


! Challenge Question: Using Math functions
JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We'll talk about methods more later in the class. For now, know if you type Math.random(), you'll get a random number between 0 and 1.

Using this tool, update your fahrenheit to celsius tempature conversion program to do the following:

Instead of inputing a value for the Fahrenheit tempature, use Math.random() to generate a random tempature between 0 and 100
Have to program output: "It is NN°F today. That's NN°C." */

var givenCelsius = 25;
var calcFahrenheit = (givenCelsius * 9) / 5 + 32;
console.log(
  givenCelsius + "\u00B0 Celsious is " + calcFahrenheit + "\u00B0 Fahrenheit"
);

var givenFahrenheit = 73;
var calcCelsius = ((givenFahrenheit - 32) / 9) * 5;
console.log(
  givenFahrenheit + "\u00B0 Fahrenheit is " + calcCelsius + "\u00B0 Celsious."
);


var givenFahrenheit = Math.random() * 100;
var calcCelsius = ((givenFahrenheit - 32) / 9) * 5;
console.log(
  "It is " +
    givenFahrenheit +
    "\u00B0 Fahrenheit today. That's " +
    calcCelsius +
    "\u00B0 Celsius."
);