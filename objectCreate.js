var amitab = new Object();
amitab.name = "Amitab";
amitab.familyname = "Bachan";

var abhishek = Object.create(amitab);
abhishek.name = "Abhishek";

console.log(abhishek.name + " " + abhishek.familyname);

var shweta = Object.create(amitab);
shweta.name = "Shweta";
shweta.familyname = "Nanda";

console.log(shweta.name + " " + shweta.familyname);

shweta.__proto__.familyname = "Shrivastav";
console.log(amitab.name + " " + amitab.familyname);
console.log(abhishek.name + " " + abhishek.familyname);

abhishek.familyname = "RAI";
console.log(amitab.name + " " + amitab.familyname);
console.log(abhishek.name + " " + abhishek.familyname);
