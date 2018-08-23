// Activity 4


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------
function isEven (num){
  if (num%2 === 0) {
    return true;
  }
  return false;
}

function swap(arr, i , j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function asendingBubble (arr , range){

  var isSwaped = false;
  var i = 0;
  while (i < range) {

    if (arr[i] > arr[i+1]) {
      swap(arr , i , i+1);     
      isSwaped = true;
    }else {      
      isSwaped = false;
    }
    i++;
  }
    
  if (range > 1) {
    asendingBubble(arr, range-1);
  }
  return arr;  
}
// var testArr0 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
// console.log(asendingBubble(testArr0 , 10));


function desendingBubble (arr , range){
  var isSwaped = false;
  var i = 0;
  while (i < range) {
    if (arr[i] < arr[i+1]) {
      swap(arr , i , i+1);     
      isSwaped = true;
    }else {      
      isSwaped = false;
    }
    i++;
  }  
  if (range > 1) {
    desendingBubble(arr, range-1);
  }
  return arr;
}

// testArr0 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
// console.log(desendingBubble(testArr0 , 10));


// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------
  var evenArr = [];
  var oddArr = [];

  for (var i = 0 ; i < arr.length ; i++){
    var number  = arr [i];
    if (isEven(number)){
      evenArr.push(number);
    } else {
      oddArr.push(number);
    }
  }
  
  // console.log("evenArr  " + evenArr);
  // console.log("oddArr   " + oddArr);
  
  var firstPart = asendingBubble(evenArr, evenArr.length);
  var secondPart = desendingBubble(oddArr , oddArr.length);
  var total = firstPart.concat(secondPart);
  return total;

  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));