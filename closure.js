function outer() {
    var outer = 1;
    var inner = function () {
        console.log(outer);
    }

    return inner;
}

var fn = outer();
fn();
console.log(fn);
// it has closed obver its surrounding.. 

function Employe(id, name) {
    this.id = id;
    this.name = name;
    this.print = () => console.log(this.id + " " + this.name);
}


// cannot use lamba if we are using this keyword.
var emp = Employe(100, "Aiman");
emp.print();


