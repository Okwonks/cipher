$(document).ready(function() {
  $('#btn1').click(function() {
    // $('#header2').hide();
    $('#header2').toggle();
    $("#header1").html(sentence);
  });
  $('#btn2').click(function() {
    // $('#header1').hide();
    $('#header1').toggle();
    $("#header2").html(finalDecrypt);
  })
});

var sentence = prompt("Write a sentence:");
// document.getElementById("header1").innerHTML = sentence;
console.log(sentence);
//taking the first and last letters
var newString = function() {
  var firstLetter = (sentence.charAt(0)).toUpperCase();
  var lastLetter = (sentence.charAt(sentence.length - 1)).toUpperCase();
  var bothLetters = firstLetter + lastLetter; // not cheating..
  return bothLetters
  console.log(firstLetter);
  console.log(lastLetter);
}
newString();
console.log("This was fun mate" + newString());
//this is where we reverse
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

var thirdFunction = function() {
  newString();
  var answer = reverseString(newString());
  console.log(answer);
  var conCatSentence = sentence + answer; //not cheating
  return conCatSentence;
}
thirdFunction();
console.log(thirdFunction());



var fourthFunction = function () {
  var quotient = sentence.length / 2;
  var quotientChar = sentence.charAt(quotient);
  console.log(quotientChar);
  var bonusVar = quotientChar + thirdFunction();
  return bonusVar;
}
fourthFunction();
console.log(fourthFunction());

var finalDecrypt = reverseString(fourthFunction());
console.log("This is the reversed string final " + reverseString(fourthFunction()));
// document.getElementById("header2").innerHTML = finalDecrypt;
