/**
 * Filename: d:\LearnJS\varlet.js
 * Path: d:\LearnJS
 * Created Date: Wednesday, February 14th 2018, 10:12:32 am
 * Author: Aiman Kazi
 * 
 * Copyright (c) 2018 VLIT
 */


// var $name = "Visual Labs";
// function greetMe(name) {
//     // alert("Hello " + name)
//     console.log("Hello " + name)
// }
// greetMe("Aiman")
// console.log($name);

var $name;
var a, b;
console.log("The value of a is : " + a);
console.log("Hello");

var test = 1;
function greetMe(name) {
    console.log("Hello " + name)
    var test = 5;
    console.log("The value of test is : " + test);
}
greetMe("Aiman")

console.log("The value of test is : " + test);

// there are === instead of == in Javascript
if ($name === undefined) {
    console.log("THE VALUE IS UNDEFINE");
}

var a;
console.log(a + 2)

var n = null;
console.log(n * 32);

var n = null;

if (n) {
    console.log("CHECKER");
}

if (true) {
    let x = 5;
    console.log("The value of x inside first if statement is : " + x);
}

if (true) {
    var x = 50;
    console.log("The value of x second if statement is : " + x);
}

console.log("Program ends")