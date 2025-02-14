
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

function iphone(){
    console.log("This is Iphone");
}
// iphone();
function redmi(){
    console.log("This is Redmi");
}
// redmi();
function oppo(){
    console.log("This is Oppo");
}
// oppo();


var a = 10;
var b = 20;
function add() {
    console.log(a+b);
}
// add();

// Exercise
var factor = "Kamal";
var fplayer = "Fav Player : Dhoni";
var fmovie = "Fav Movie :";

function fav(){
    console.log("Fav Actor :", factor);
    console.log(fplayer);
    console.log(fmovie, "Anbe Shivam");
}
// fav();

// Parameters
function area(lenght, breadth){
    console.log(lenght*breadth);
}
// area(20,15);

// Return Type
function add(a, b){
    return a*b
}
// var total = add(10, 20);
// console.log(total);

