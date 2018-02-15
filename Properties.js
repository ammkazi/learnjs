var person = new Object();
//person.id = 1;
//console.log(person);

Object.defineProperty(
    person,
    "id", {
        value: "1",
        enumerable: false,
        configurable: false
    }
)

console.log(person);

Object.defineProperty(
    person,
    "name", {
        value: "Brendon",
        enumerable: true,
        configurable: true,
        writable: false
    }
)

Object.defineProperty(
    person,
    "name", {
        value: "John",
        enumerable: true,
        configurable: true,
        writable: true
    }
)

console.log(person);


Object.defineProperty(
    person,
    "id", {
        value: 5,
        enumerable: true
    }
);




//person.name = "John";
console.log(person);


