/**
 * Filename: d:\LearnJS\functionObject.js
 * Path: d:\LearnJS
 * Created Date: Friday, February 2nd 2018, 6:07:14 pm
 * Author: hp
 * 
 * Copyright (c) 2018 Your Company
 */

function Emp(id, name) {
    this.id = id;
    this.name = name;

    this.print = function () {
        console.log("Hello !!!");
        return "Whatsapp";
    }
}

var brandon = new Emp(1, "Brandon");

//console.log(brandon.print());
var a = brandon.print();
console.log(a);

console.log(brandon);