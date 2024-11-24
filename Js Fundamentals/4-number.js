const numb1 = 100;
const numb2 = 200;

let val;

// Simple math with Number

val = numb1 + numb2;
val = numb1 - numb2;
val = numb1 * numb2;
val = numb1 / numb2;
val = numb1 % numb2;

// console.log(val);

// Math Object

val = Math.PI;
val = Math.round(2.3); // If the decimal is 0.5 or greater, the value is 3. Otherwise, if it's lower, the value is 2.
val = Math.round(2.5);
val = Math.ceil(2.4); // The output is 3 because the decimal 0.5 rounds up, just like how a ceiling in a house is always above us, so the number goes up too!
val = Math.floor(2.9); // The output is 2 because the decimal is below 0.5, similar to how a floor is below us, so the number goes down.

console.log(val);
