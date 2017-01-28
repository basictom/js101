var myDog = {
  coat: "brindle",
  age: 4,
  type: "shitty",
  friends: ["little dog", "rucker", "yellow"]
}

console.log(myDog.type);
console.log(myDog.friends);

for(var myKey in myDog){
  console.log(myKey);
  console.log("values", myDog[myKey]);
}
