/**
 * Filename: d:\LearnJS\newObject.js
 * Path: d:\LearnJS
 * Created Date: Friday, February 2nd 2018, 3:58:51 pm
 * Author: hp
 * 
 * Copyright (c) 2018 Your Company
 */

var person = new Object();
console.log(person);

person.id = 5;
person.name = "Aiman";
person.color = "Wheatish";

console.log(person);
for (var index = 0; index < 10; index++) {
    person[index] = index;
}

console.log(person);

console.log(person.__proto__);