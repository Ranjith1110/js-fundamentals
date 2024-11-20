

// Three types of variables they are 

// const, let, var *****  
var name = "ranjith";
console.log(name);

// INIT Variable
var greet;  // undefined
console.log(greet)

var greet;
greet = "ranjith ram";
console.log(greet);

// Variable name can't start with the number
// var 5name = "ranjith";  // can't work
var name5 = "ranjith";
console.log(name5);

// letters, _, $ 
// Multi word

var firstname = "ranjith";
var firstName = "ram Camel case";    // camel case  // *****
var first_name = "chinna"; // snake case
var FirstName = "jhon";   // pascla case  // some time when means components, function cunstructor
var $firstname = "jeo";   // dollar case
console.log(firstName);

// let and var is most of the time same when it was different means scoping
// have to assign the value
// let
let newName;
newName = "Jack";
newName = "Javid";
console.log(newName);

// Const
const sameName = "ranjith";
sameName = "ram"; // Can't reassign the value (same variable name)
// const sameName; => error (Missing initializer in const declaration )
console.log(sameName);