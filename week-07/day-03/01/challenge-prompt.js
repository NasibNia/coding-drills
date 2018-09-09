// Rotation Index



// `rotIndex` takes in an array of integers where if the front part was appended to the
// back part, it would be a sorted array and returns the index of where the split happens
function rotIndex(arr) {
  // -------------------- Your Code Here --------------------
  var rotIn = 0;
  
  for (var i = 0; i < arr.length-1; i++) {
    if(arr[i] > arr [i+1]){
      rotIn = i+1;
      return rotIn;
    }
    
  }
  
  return rotIn;
  
  
  
  // --------------------- End Code Area --------------------
}

module.exports = rotIndex;
