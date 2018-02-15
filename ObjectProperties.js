var employee = new Object();

Object.defineProperties(
    employee,
    "id", {
        value: 5,
        enumerable: true,
        writeable: false,
    },
    "name", {
        value: "Aiman",
        enumerable: true,
        writeable: false,
    }

)

console.log(employee);


