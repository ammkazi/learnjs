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
        console.log(this.id + " " + this.name);
    }
}

function Manager(id, name, designation) {
    Emp.call(this, id, name);
    this.designation = designation;
    //   generateCountry.call(this);
    //   run.call(this);
}

function generateCountry() {
    this.country = "India";
}
function run() {
    this.run = "RUN";
    console.log("You can run");
}

var aiman = new Emp(1, "aiman");
console.log(aiman);

var sanjay = new Manager(100, "sanjay", "Manager");
console.log(sanjay);
