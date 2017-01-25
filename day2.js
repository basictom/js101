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

var fruit = ['apples', 'bananans', 'melons', 'oranges', 'squash'];
var fruitString = fruit.join(', ');
console.log('fruitString', fruitString);

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(',');
console.log(catColorsArray);

var reverseFruit = fruit.reverse('');
console.log(reverseFruit);

var sortedFruit = fruit.sort('');
console.log(sortedFruit);

var numbers = [1,2,3,4,11,6,7,8,9];
var numSort = numbers.sort(function(a,b){return a-b});
console.log(numSort);

var mixedCrap = ['a','b', 12, 16, 'ef'];
console.log(mixedCrap.sort());

console.log(fruit.indexOf('apples'));

var sport = ['hockey', 'baseball', 'football', 'soccer', 'lacrosse'];
var sportSlice = sport.slice(1, 2, 3);
console.log(sportSlice);

var colors = ['red', 'blue', 'grey', 'yellow'];
//sort, reverse, make a string
var finalAnswer = colors.sort().reverse().join(' cat ');
console.log(finalAnswer);
