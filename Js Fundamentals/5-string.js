
const firstName = "RanCo";
const secondName = "Tech";
const age = 21;
const about = "I'm a web Developer";

let val;

val = firstName + secondName;

// Concadination
val = firstName + " " + secondName;

// Concadination Method
val = firstName.concat(" ", secondName, " ", "I am. ", age, " and ", about);

// Append
// val = "RanCo";
// val = val; // RanCo => Output;
// val = val + "Tech";
// val += " Tech";
val = "My Name is " + firstName + secondName + " I am " + age;

// Length
val = about.length;

// Change Upper and Lower Case
val =  firstName.toUpperCase() + " " + secondName.toLocaleLowerCase();

// CharAt
val = about.charAt("18");

// Slice
const fruit = "apple";


console.log(val);
