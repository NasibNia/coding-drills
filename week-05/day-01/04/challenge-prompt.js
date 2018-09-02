// Activity 4


// The `findRepeats` function should take in one array of strings and
// find the strings that are repeated within the argument. Return a new
// array containing the repeated strings in alphabetical order.



// ----------------------------------------------------------
//                        Repeated Words
// ----------------------------------------------------------
function findRepeats(arr) {
  // -------------------- Your Code Here --------------------
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    if(elem in obj){
      console.log(elem + "  repeated word");
    } else {
      obj[elem] = true;
    }
  }

  //now would need a alphabetical sort function

  var refrence = 'abcdefghijklmnopqrstuvwxyz';
// a function that compares two letters and return a sorted array
function sortLetter (a , b){
  if (refrence.indexOf(a) < refrence.indexOf(b)) {
  }
}

//sorts the words in the arr in an alphabetical order:
  function sortWords (arrayOfNumbers){
    //do bubble sort;
  }

  function letterToNum (letter){
    return refrence.indexOf(letter);
  }

  function wordToNum (word){
    var code = "";
    for (var i = 0 ; i < word.length ; i++){
      var letter = letterToNum(word[i]);
      code = code + letter;
    }
    return parseInt(code);
  }

  function numArray (strArr) {
    var numArr = [];
    for (var i =0 ; i < strArr.length ; i++){
      var wordNum = wordToNum (strArr[i]); 
      numArr.push(wordNum);
    }
  }

  var arrayOfNums = wordToNum(array of words);
  sortWords(arrayOfNums);


  // another way to improve time efficiency is to only look at the first letter
  var letterArr = [];
  for (var i = 0 ; i < word.length; i++){
    letterToNum(word[i][0]);
  }
  // and then call the bubble sort on letterArr


  // --------------------- End Code Area --------------------
}




// --------------------------- Test Cases ---------------------------
//
//
// ---------------------------- Test 01 -----------------------------
var testarr1 = ["strong", "abridge", "critic", "beach", "abridge", "strong", "critic"];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 01</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [abridge,critic,strong]</p>
      <hr class="mb-5">
      <p class="text-left">[${findRepeats(testarr1)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 02 -----------------------------
var testarr2 = ["boat", "craftsman", "improve", "boat", "improve", "craftsman", "boat", "boat"];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 02</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [boat,craftsman,improve]</p>
      <hr class="mb-5">
      <p class="text-left">[${findRepeats(testarr2)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 03 -----------------------------
var testarr3 = ["package", "bounce", "duck", "basket", "scholar", "baskets", "sport"];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 03</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be []</p>
      <hr class="mb-5">
      <p class="text-left">[${findRepeats(testarr3)}]</p> 
    </div>
  </div>
`)
