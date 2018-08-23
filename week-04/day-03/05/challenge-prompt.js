
console.log("////////////////////////////// QUESTION 5.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Given an unsorted array of (almost sequential) numbers, return the number that makes the array non-sequential.

//For example, if we were given this array: [5, 2, 4, 6, 1, 3, 8], it would look like this [1, 2, 3, 4, 5, 6, 8] sorted.

//You'll notice that the numbers would be counting up, but for a missing 7. That is the value your function should return


function missingNumber(arr){
    // =========== code starts here =============

    var min = arr [0];
    var max = arr [0];
    var sum = 0;
    
    for (var  i = 0 ; i < arr.length ; i++){
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
    }

    var sum1 = max*(max+1)/2;
    var sum2 = (min-1)*(min)/2;
    var missing  = sum1-sum2-sum;
    console.log("sum1  " + sum1);
    console.log("sum2  " + sum2);
    console.log("sum  " + sum);
    console.log("missing  " + missing);


    return missing;

    // =========== code ends here ==============
  }
  
missingNumber([5, 2, 4, 6, 1, 3, 8]);
//expected output = 7 because if we ordered this list, the number seven would be missing

missingNumber([5, 4, 6, 7, 8 , 10]);
//expected output = 9 because if we ordered this list, the number seven would be missing