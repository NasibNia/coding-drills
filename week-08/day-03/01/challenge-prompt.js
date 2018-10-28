// toLowerCase


// This function takes in a string as the argument and returns
// a new string with all the characters converted to lower case

function toLowerCase(str) {
  // -------------------- Your Code Here --------------------

  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var newStr = '';
  for (let i = 0; i < str.length; i++) {
    var indexInUpper = upper.indexOf(str[i]);
    if(indexInUpper !== -1){
      newStr += lower[indexInUpper];
    } else {
      newStr += str[i];
    }
    
  }
  return newStr;

  // -------------------- End Code Area ---------------------
}


// Should be "hello world"
console.log(toLowerCase("Hello World"));

// Should be "test"
console.log(toLowerCase("Test"));

// Should be "rotating cap with nu|v|b3r5 and $ymb0!s"
console.log(toLowerCase("RoTaTiNg CaPs With Nu|V|b3R5 aNd $YmB0!s"));

// Should be an empty string
console.log(toLowerCase(""));

