// Parenthesis Matcher


// `matchParenthesis` takes in a string and the index of an opening parenthesis and returns the index of the parenthesis that corresponds to the parenthesis given
const matchParenthesis = (str, index) => {
  // -------------------- Your Code Here --------------------
  if (str[index]!== "("){
    return null;
  } else {
    var j= index+1;
    var obj = {
      open : 0,
      close : 0
    };
    for (var j = index+1; j < str.length; j++) {
      // console.log("j is " + j);
      if (str[j]==="("){
        obj.open +=1;
      } else if (str[j]===")"){
        obj.close +=1;
        if (obj.open > 0){
          obj.open -=1;
          obj.close -=1;
          // console.log("this j " , j);
        }
      }

      if (obj.open===0 && obj.close===1){
        return j;
      }
     
    }
  }
  // --------------------- End Code Area --------------------
};


// Tests
// All tests should console log `true`
var test = "apple (banana grape (pineapple)) orange";
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(matchParenthesis(test, 2) === null);

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(matchParenthesis(test, 20) === 30);

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(matchParenthesis(test, 6) === 31);

// ------------------------------------------------------------
test = "apple (banana grape (pineapple) orange";
console.log("==================== Test 4 ====================");
console.log(matchParenthesis(test, 6) === null);
