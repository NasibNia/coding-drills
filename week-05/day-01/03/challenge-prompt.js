// Activity 3


// The `zipArrays` function should take in two arrays of numbers and
// add numbers at the same indices together. Return a new array
// with sums and any unpaired elements.



// ----------------------------------------------------------
//                        Zipping Arrays
// ----------------------------------------------------------
function zipArrays(arr1, arr2) {
  // -------------------- Your Code Here --------------------
  var length = arr2.length;
  if (arr1.length > arr2.length){
    length = arr1.length;
  }
  var arr = [];
  for (var i = 0; i < length; i++) {
    if(arr1[i]){
      arr.push(arr1[i]+arr2[i]);
    } else {
      arr.push(arr2[i]);
    }
      
  }
  return arr;

  // --------------------- End Code Area --------------------
}




// --------------------------- Test Cases ---------------------------
//
//
// ---------------------------- Test 01 -----------------------------
var test1arr1 = [20,3,45,79];
var test1arr2 = [2,34,5,6,8,9];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 01</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [22,37,50,85,8,9]</p>
      <hr class="mb-5">
      <p class="text-left">[${zipArrays(test1arr1, test1arr2)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 02 -----------------------------
var test2arr1 = [6,20,43,589];
var test2arr2 = [];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 02</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [6,20,43,589]</p>
      <hr class="mb-5">
      <p class="text-left">[${zipArrays(test2arr1, test2arr2)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 03 -----------------------------
var test3arr1 = [67,8,93,4,25];
var test3arr2 = [4,36,5,78,9];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 03</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [71,44,98,82,34]</p>
      <hr class="mb-5">
      <p class="text-left">[${zipArrays(test3arr1, test3arr2)}]</p> 
    </div>
  </div>
`)
