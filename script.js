/*

var quote = "\"we jowj foe jwpo jpojw. eozj ojeoj wpojwpoj w\"";

console.log(quote.length);

console.log(quote.indexOf("z"));

console.log(quote[6]);

var position = quote.charAt(12);
console.log("Letter at spot 12 ", position);

var newPhrase = quote.replace("jowj", "balls");
console.log(newPhrase);




var phrase = "Hello World.";
var element = document.getElementById("container");
element.innerHTML = phrase;

*/


// 1.Paste the code below into your HTML file.
// 2.Take the contents of the sonnet div and place it in a variable
// 3.Find and output the starting position of the word "orphans"
//  401
var excercise = document.getElementById("sonnet").innerHTML;
console.log(excercise.indexOf("orphans"));
// 4.Output the number of characters in the sonnet
//  618
console.log(excercise.length);
// 5.Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = excercise.replace("winter", "yuletide");
console.log(newSonnet);
// 6.Replace all occurances of the string "the" with "a large"
var newerSonnet = newSonnet.replace(/the/g, 'a large');
console.log(newerSonnet);
// 7.Set the content of the sonnet div with the new string
