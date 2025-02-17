
// JavaScript Variables

// Variables are Containers for storing information or data 
// JavaScript Variables can be declared in 4ways 

// Using (var) keyword - function scope or globle scope

var a = 10;
{
    // var b = 20;
}
// console.log(a);
// console.log(b);
// Output : 20; (accessible outside and inside the block);


// Using (let) keyword - Block scope
{
    let x = 10;
    // console.log(x);
}
// console.log(x);
// let can't be used here only insde the parentheses

// Using (const) keyword - Block scope (const is constant value)
// A constant variable is once assigned a valu, cannot be reassigned or redeclared

// const keyword can't do this
const num = 10;
// num = 10;


// Example Task
/*
let price = 100;
let product = "Rice";
let tax = 20;
console.log(product);

let total = price + tax;
console.log(total);
*/

/*
let FruitName = "Apple";
let count = 10;
let price = 250;
let total = count*price;
console.log(FruitName);
console.log(total);
*/

// Operators
// Increment operator ++
// Decrement operator --
let apple = 100;
// let b = apple++;
// console.log(b);

// Data Type
// console.log(typeof(10)); Number
// console.log(typeof("Apple")); String
// console.log(typeof(true)); Boolean

// Function

function iphone() {
    console.log("This is Iphone");
}
// iphone();
function redmi() {
    console.log("This is Redmi");
}
// redmi();
function oppo() {
    console.log("This is Oppo");
}
// oppo();


var a = 10;
var b = 20;
function add() {
    console.log(a + b);
}
// add();

// Exercise
var factor = "Kamal";
var fplayer = "Fav Player : Dhoni";
var fmovie = "Fav Movie :";

function fav() {
    console.log("Fav Actor :", factor);
    console.log(fplayer);
    console.log(fmovie, "Anbe Shivam");
}
// fav();

// Parameters
function area(lenght, breadth) {
    console.log(lenght * breadth);
}
// area(20,15);

// Return Type
function add(a, b) {
    return a * b
}
// var total = add(10, 20);
// console.log(total);

// If else statements
/*
var rain = false;

if(rain){
    console.log("Take an Umberlla");
} else{
    console.log("Enjoy Sunshine");
}
*/

/*
var homeWork = true;

if(homeWork){
    console.log("Great Job");
} else{
    console.log("Finish the homework before playing");
}
*/

/*
var cookies = false;

if(cookies){
    console.log("Would you like cookies?");
} else{
    console.log("Time to bake more cookies");
}
*/

/*
var brush = true;

if(brush){
    console.log("Your teeth are clean");
} else {
    console.log("Go and brush your teeth");
}
*/

/*
var birthDay = false;

if(birthDay) {
    console.log("Happy Birthday!");
} else {
    console.log("Have a great day");
}
*/

/*
var season = "summer";

if (season == "spring") {
    console.log("Enjoy the blowing flowers");
}
if (season == "summer") {
    console.log("Have fun in summer");
}
if (season == "autumn") {
    console.log("Admire the colorful leaves");
}
if (season == "winter") {
    console.log("Bundle up and stay warm");
}
*/

// odd or even number

/*
var number = 3;

if (number % 2 === 0){
    console.log(number + " is an even");
} else {
    console.log(number + " is an odd");
}
*/

/*
var letter = "F";
letter = letter.toUpperCase();

if (letter === "A" || letter === "E" || letter === "I" || letter === "o" || letter === "u") {
    console.log(letter + " is an vowel.");
} else {
    console.log(letter + " is a consonant.");
}
*/

// For Loop
/*
for(bucket = 0; bucket <= 5; bucket++) {
    console.log("Rainbow");
}
*/
/*
for (count = 0; count <= 10; count++) {
    console.log(count);
}
*/

for (count = 0; count <= 10; count++) {
    console.log(count+"x2"+ "=" + count*2);
}

/*
for (count = 10; count >= 0; count--) {
    console.log(count);
}
*/

/*
for (count = 0; count <= 10; count++) {
    if (count % 2 === 0) {
        console.log(count);
    } else{
        console.log("Odd Number");
        
    }
}
*/
/*
for (count = 1; count <= 10; count += 3) {
    console.log(count);
}
*/


