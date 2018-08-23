// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================



for (var i = 0 ; i < arr.length ; i++){

    var isSwaped = true;

    num1 = arr[i];
    num2 = arr[i+1];

    if (num1 < num2){
        arr[i+1] = num1;
        arr[i+2] = num2;
    }

    




}








// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);