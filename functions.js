function addition(a, b) {
    var c = a + b;
    return c;
}

function subtraction(a, b) {
    var c = a - b;
    return c;
}

function multiplication(a, b) {
    var c = a * b;
    return c;
}

function division(a, b) {
    var c = a / b;
    return c;
}

var result = addition(5, 10);
console.log(result);
console.log(addition.toString());
addition = 99;
console.log(addition.toString());
//result = add(1, 2);
