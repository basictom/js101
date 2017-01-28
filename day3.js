// var myDog = {
//   coat: "brindle",
//   age: 4,
//   type: "shitty",
//   friends: ["little dog", "rucker", "yellow"]
// }
//
// console.log(myDog.type);
// console.log(myDog.friends);
//
// for(var myKey in myDog){
//   console.log(myKey);
//   console.log("values", myDog[myKey]);
// }

var nuggetELement = document.getElementById("nugget-shack");
var purchase = document.getElementById("purchase");
console.log(nuggetELement);
console.log(purchase);



function nuggatizer(animal) {
  var myNugget = "breading" + animal + " breading";
  return myNugget;
}
function shackMaker(divLocation, typeOfNugget){
  divLocation.innerHTML += typeOfNugget;
}




var chickenNuggets = nuggatizer(" chicken");
shackMaker(purchase, chickenNuggets + "<br>");
// nuggetELement.innerHTML = chickenNuggets;

var lobsterNuggets = nuggatizer(" lobster");
shackMaker(purchase, lobsterNuggets + "<br>");
// nuggetELement.innerHTML = lobsterNuggets;

var tablets = nuggatizer(" computer");
shackMaker(purchase, tablets + "<br>");


var shackName = "Bam's F-Shack";
shackMaker(nuggetELement, purchase)

// function myLooper(myArray) {
//   for (var i=0; i<myArray.length; i++){
//     console.log(myArray[i]);
//   }
// }
//
// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// var colors = ["red", "blue", "gold", "pink", "orange"];
// myLooper(animals);
// myLooper(colors);
