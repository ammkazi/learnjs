function neverending() {
    for (let index = 0; index < arguments.length; index++) {
        //const element = arguments[index];
        console.log(arguments[index]);
        console.log(arguments[index].id);

    }
}

neverending(1, 2, 3, 4, 5, 6);
console.log("-----------------");
neverending("aiman", "kazi");
console.log("-----------------");
neverending("aiman", 20);
//add();
console.log("-----------------");
neverending();
console.log("-----------------");
neverending({ id: 1, name: "Aiman" }, { id: 2, name: "Jasmine" })
