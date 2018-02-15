var cars = ["zen", "esteem", "m800", "honda-activa"];
var currentcarscars = ["suzuki", "sx4"];
var dontwant = [];

console.log("----------------------");
for (let i = 0; i < cars.length; i++) {
    const mycar = cars[i];
    console.log(mycar);
}
console.log("----------------------");
for (const mycar in cars) {
    console.log(mycar);
}
console.log("----------------------");
for (const mycar of cars) {
    console.log(mycar);
}
