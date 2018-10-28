// Keyboard Row


// the `keyboardRow` function takes in an array of strings and
// returns a new array containing all the words that can be
// individually typed on a single row of a standard "QWERTY"
// keyboard.
function keyboardRow(arr) {
  // -------------------- Your Code Here --------------------
var row1 = 'QWERTYUIOP';
var row2 = 'ASDFGHJKL';
var row3 = 'ZXCVBNM';
var currentRow;
var trackObj = {};

for (let i = 0; i < arr.length; i++) {
 
  var word = arr[i];
  var firstLetter = word[0];
  
  if (row1.indexOf(firstLetter) !== -1){
    currentRow = row1;
  } else if (row2.indexOf(firstLetter) !== -1){
    currentRow = row2;
  } else if (row3.indexOf(firstLetter) !== -1){
    currentRow = row3;
  }
  
  // check if the word belongs to row1 || row2 || row3

  
  
}



  // -------------------- End Code Area ---------------------
}


var wordArray = ["pet", "world", "bc", "hello", "a", "flash", "blastoff", "to"]
// Should be [ 'pet', 'bc', 'a', 'flash', 'to' ]
console.log(keyboardRow(wordArray));
