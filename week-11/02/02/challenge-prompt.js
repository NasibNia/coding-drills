// Bracket Checker


// `checkBracket` takes in a string and returns whether the configuration of brackets within that string is valid
const checkBracket = (str) => {
  // -------------------- Your Code Here --------------------
  let array = [];
  var inner = "";
  for (let i = 0; i < str.length; i++) {
    
    const element = str[i];
    
    // console.log("i    ", i);
    // console.log("element is ", element);
    // console.log("inner is " , inner);
    // console.log("array is ", array);

    if(element === "{" || element === "[" || element === "("  ){
      array.push(element);
      inner = element;
      // console.log("opening!");

    }
    else if ((element === "]" && inner === "[") || (element === ")" && inner === "(") || (element === "}" && inner === "{")){
      if (array.length === 1){
        inner = "";
      } else {
        inner = array[array.length-2];
      }
      array.pop();
      // console.log("closing!");

    } else if (element === "]" || element === ")" || element === "}"){
      // console.log("closing without the match!");
      return false;
    }
  }
  return true;
  // --------------------- End Code Area --------------------
};


// Tests
// All tests should console log `true`
var test = "{}ja(jd)a[jid(ajd{bofd{(d)}jqd}gf)]";
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(checkBracket(test));

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(checkBracket("{}()[]"));

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(checkBracket("}{") === false);

// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
console.log(checkBracket("[(])") === false);
