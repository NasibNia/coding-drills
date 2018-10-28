// Sum Check


// `sumCheck` takes in a positive integer and an array of positive integers
// and returns true if two integers within the array add up to be the first argument
const sumCheck = (num, arr) => {
  // -------------------- Your Code Here --------------------
  var obj = {};
  for (let j = 0; j < arr.length; j++) {
    const num1 = arr[j];
    if (num > num1){
      var num2 = num - num1;
      // console.log("obj ", obj);
      // console.log("num2 is  ", num2);
      if (num2 in obj) 
        return true;

      obj[num1] = true;
    } 
  } 

  return false;

  // --------------------- End Code Area --------------------
};

// Tests
// All tests should console log `true`
//
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(sumCheck(6, [1, 2, 4, 9, 6, 2]));

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(sumCheck(8, [1, 3, 4, 9, 2]) === false);

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(sumCheck(6, [3, 4, 9, 3]));
