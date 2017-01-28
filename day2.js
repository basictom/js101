// SWITCHES

/*var day ="Friday";

switch(day){
  case "Monday":
    console.log('Working');
  case "Friday":
    console.log('Party');
  default:
    console.log('Still working');

    if(day === "Monday"){
      console.log('Yes');
    }else if (day === "Friday"){
      console.log("YesYes");
    }else{
      console.log("still working...");
    }
}
*/


// ARRAYS

// var fruit = ['apples', 'bananans', 'melons', 'oranges', 'squash'];
// var fruitString = fruit.join(', ');
// console.log('fruitString', fruitString);
//
// var catColors = 'green,red,yellow,black';
// var catColorsArray = catColors.split(',');
// console.log(catColorsArray);
//
// var reverseFruit = fruit.reverse('');
// console.log(reverseFruit);
//
// var sortedFruit = fruit.sort('');
// console.log(sortedFruit);
//
// var numbers = [1,2,3,4,11,6,7,8,9];
// var numSort = numbers.sort(function(a,b){return a-b});
// console.log(numSort);
//
// var mixedCrap = ['a','b', 12, 16, 'ef'];
// console.log(mixedCrap.sort());
//
// console.log(fruit.indexOf('apples'));
//
// var sport = ['hockey', 'baseball', 'football', 'soccer', 'lacrosse'];
// var sportSlice = sport.slice(1, 2, 3);
// console.log(sportSlice);
//
// var colors = ['red', 'blue', 'grey', 'yellow'];
// //sort, reverse, make a string
// var finalAnswer = colors.sort().reverse().join(' cat ');
// console.log(finalAnswer);



for(var i=0; i<5; i++){
  console.log(i);
};


// write a for loop that increments by 10 each time = 10 times
// 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
for(var k=0; k<101; k+=10){
  console.log("k",k);
}


// for loop that pushes the index to an array for 5 times
// console.log (array) \\ [0,1,2,3,4]
var myArray = [];
for (var i=0; i<5; i++){
  myArray.push(i);
}
console.log("myArray", myArray);

// for loop that starts at 100 and divides by 2 each time 3 times
// 100, 50, 25,

var number = 100;
for(var i=0; i<3; i++){
  console.log("My number: ", number);
  number=number/2;
}
