
// Primitive Type Holds a single value..

// String
const name = "Ranjith";
console.log(name);
console.log(typeof name);

// Number
const age = 21;
console.log(age);
console.log(typeof age);

// Boolean
const hadLunch = true;
console.log(hadLunch);
console.log(typeof hadLunch);

// Null
const hasGun = null;
console.log(hasGun);
console.log(typeof hasGun); // Its not object. It is null. Object is JavaScript Bug

// Undefind
var unDef;
// let unDef;
// const unDef; // if we use const varialbe for undefind is not work

console.log(unDef);
console.log(typeof unDef);


// Reference Type Holds a multiple value..

// Array []
const myArr = ["Ranjith", 21, true, null];
console.log(myArr);
console.log(myArr[4]);

// Object {}
// Key : Value or Name : Value
const car = {
    // Properties
    name: "Benzz",
    color: "Black",
    model: "F15",
    year: 2024,
    // Function Called Method
    start: function(){
        console.log("Car Started");
    }
}
console.log(car.year);
console.log(car["year"]);

console.log(car.start);


