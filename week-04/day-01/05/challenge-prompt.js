// Activity 5


// We are creating a function that takes in an unsorted array of integers
// and returns a new array containing only the prime numbers sorted in
// descending order

// -------------------------------------------------------
//                Helper Functions (Optional)
function isPrime(num){
  if (num === 1 || num ===2 || num===3){
    return true;
  }
  for(var i =2 ; i<=num/2 ; i++){
    if (num%i === 0){
      return false;
    }
  } 
  return true;
}

// -------------------- Your Code Here --------------------
function primeArray (arr){
  var primeArr = [];
  for  (var i = 0 ; i < arr.length ; i++){
    if(isPrime(arr[i])){
      primeArr.push(arr[i]);
    }
  }
  return primeArr;
}


function bubleSort (arr){
  var isSwapped  = true;
  var range = arr.length;

  while(isSwapped && range >=-1){
    isSwapped = false;

    for (var i = 0; i < arr.length-1 ; i++){
      if(arr[i]<arr[i+1]){
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        isSwapped = true;
      }
      if(isSwapped) {
        range--;
      } else {
        isSwapped = false;
      }
    }
  }
  return arr;

}



// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function primeSort(arr) {
  // -------------------- Your Code Here --------------------
  var pArray  = primeArray(arr);
  var sortArr = bubleSort(pArray);


  return sortArr;


  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [73, 47, 17, 5]");
console.log(primeSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [83, 6, 13, 15, 27, 19, 103, 59, 42, 4];
console.log("The following should be [103, 83, 59, 19, 13]");
console.log(primeSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [6, 81, 36, 45, 82, 21, 8, 22, 10, 15];
console.log("The following should be []");
console.log(primeSort(testArr3));