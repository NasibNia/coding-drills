// Merging Sorted Arrays



// The `mergeSorted` function takes in two sorted arrays and returns a new 
// sorted array containing all the elements of the two argument arrays
var combine = [];
function mergeSorted(arr1, arr2) {
  // -------------------- Your Code Here --------------------
  
  var n1 = arr1.length;
  var n2 = arr2.length;
  if (n1 > 0 || n2 > 0) {
    if (n1 > 0 && n2 > 0){
      if (arr1[0]< arr2[0]){
        combine.push(arr1[0]);
        arr1.shift();
      } else{
        combine.push(arr2[0]);
        arr2.shift();
      }
    } else if (n1 === 0 && n2 > 0){
      combine.push(arr2[0]);
      arr2.shift();
    } else if (n1 > 0 && n2 === 0){
      combine.push(arr1[0]);
      arr1.shift();
    }
    mergeSorted(arr1, arr2);
  }
  return combine;


  // for (var i = 0 ; i < n1+n2 ; i++ ){
  //   if (arr1[0]< arr2[0]){
  //     combine.push(arr1[0]);
  //   } else{
  //     combine.push(arr2[0]);
  //   }
  // }

  // --------------------- End Code Area --------------------
}

// Export the `mergedSorted` 
module.exports = mergeSorted;
