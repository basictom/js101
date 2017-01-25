/*

var quote = "\"we jowj foe jwpo jpojw. eozj ojeoj wpojwpoj w\"";


var position = quote.charAt(12);

var newPhrase = quote.replace("jowj", "balls");




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
// 5.Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = excercise.replace("winter", "yuletide");
// 6.Replace all occurances of the string "the" with "a large"
var newerSonnet = newSonnet.replace(/the/g, 'a large');
// 7.Set the content of the sonnet div with the new string
newSonnet.innerHTML = newerSonnet;
