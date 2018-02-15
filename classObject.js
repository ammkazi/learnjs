/**
 * Filename: d:\LearnJS\classObject.js
 * Path: d:\LearnJS
 * Created Date: Friday, February 2nd 2018, 6:38:14 pm
 * Author: hp
 * 
 * Copyright (c) 2018 Your Company
 */

class Emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    print() {
        console.log(this.id + " " + this.name);
    }
};

class Manager extends Emp {
    constructor(id, name, designation) {
        super(id, name);
        this.designation = designation;
    }
    print() {
        console.log(this.id + " " + this.name + " " + this.designation);
    }

}

var aiman = new Emp(1, "Aiman");
console.log(aiman);

var sanjay = new Manager(5, "Sanjay", "Manager");
console.log(sanjay);