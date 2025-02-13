
// JavaScript Variables

// Variables are Containers for storing information or data 
// JavaScript Variables can be declared in 4ways 

// Using (var) keyword - function scope or globle scope

var a = 10;
{
    var b = 20;
}
console.log(a);
console.log(b);
// Output : 20; (accessible outside and inside the block);


// Using (let) keyword - Block scope
{
    let x = 10;
    // console.log(x);
    
}
console.log(x);
// let can't be used here only insde the parentheses

// Using (const) keyword - Block scope (const is constant value)
// A constant variable is once assigned a valu, cannot be reassigned or redeclared

// const keyword can't do this
const num = 10;
num = 10;
