// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements

// var newArr=[];
// function bubbleSortTwo(arr) {
//     // ================= code goes here ===========================
//     for (var i = 0 ; i < arr.length-1 ; i++){
//         if (arr[i] > arr [i+1]){
//             var tmp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = tmp;
//         } 
//     }
//     var lastNum = arr.pop();
//     console.log( " last number is " + lastNum);
//     newArr.unshift(lastNum);
//     console.log ("newArr is "+ newArr);

//     if (arr.length > 1){
//         bubbleSortTwo(arr);
//     } 
    
//     return newArr;
//     // ============================================================
// }


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================
    var swapped = true;
    var itrRange = arr.length;
    while(swapped && itrRange>1){
        swapped = false;
        for (var i = 0 ; i < arr.length ; i++){
            
            if (arr[i] > arr [i+1]){
                var tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                swapped = true;
            } 
        }
        if (swapped){
            itrRange--;
        } else {
            swapped = false;
            return arr;
        }        
    }
    // ============================================================
}
var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge);

