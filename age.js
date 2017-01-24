//1. How many hours are in a year
//2. How many minutes are in a decade
//3. How many seconds old they are
//4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

console.log("Open");

var minutesDay = 60 * 24;
var minutesYear = minutesDay * 365;
var minutesDecade = minutesYear * 10;

console.log(minutesYear / 60);
console.log(minutesDecade);

if (minutesDecade > 25 * minutesYear){
  console.log("Your old.");
}else{
  console.log("Young gunnin\'");
}

console.log("Close");
