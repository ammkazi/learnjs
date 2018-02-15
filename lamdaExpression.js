// function without name and can be passed as a portable code
/**
 * Filename: d:\LearnJS\lamdaExpression.js
 * Path: d:\LearnJS
 * Created Date: Saturday, February 3rd 2018, 12:03:27 pm
 * Author: hp
 * 
 * Copyright (c) 2018 Your Company
 */

function doAddAndPrint(a, b, fn) {
    var result = fn(a, b);
    console.log(result);
};

function find(a, fn) {
    var result = fn(a);
    console.log(result);
}

/*
function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}
*/
doAddAndPrint(10, 100, (x, y) => (x) + (y));
doAddAndPrint(2, 4, (x, y) => (x) * (y));
find(3, (x) => (x) * (x) * (x));


// why and where to use lamda.. 
// example of add , subs, multi, delete....
