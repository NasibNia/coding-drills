// Longest substring
// This function takes in a string and returns the longest substring that doesn't
// contain repeated characters
function longestSubstring(str) {
  // -------------------- Your Code Here --------------------
  str = str.trim();
  var first = str[0];
  var longestSoFar ={str : first};
  var currentCheck ={str : first};
  var letterTracker = {};
  var substr = "";
  var longestStr;
  var currentStr;
  for (var i = 0 ; i < str.length ; i++){
    var currentLetter = str[i];
    longestStr =  longestSoFar.str;
    currentStr = currentCheck[str];
    if(currentLetter in  letterTracker){
      //if we hit the redundant letter
      if(currentStr.length > longestStr.length){
        //swap them
        longestSoFar.str = currentStr;
       }
        currentCheck[str]=currentLetter;
        //erase all the letters before this lettes in letter tracker
        for (var member in letterTracker){
          delete letterTracker[member];
        }
        substr = currentLetter;
    } else{
      substr = substr + currentLetter;
      currentCheck[str] = substr;       
    }
    //the final check at the end of the string
    if (i===str.length-1){
      currentCheck[str] = substr;
      currentStr = currentCheck[str];
      if(currentStr.length > longestStr.length){
        
        longestSoFar.str = currentStr;
      }
    }
    letterTracker[currentLetter] = true; 
  }  
  console.log("longest substring is "+ longestSoFar.str);
  return longestSoFar.str;
  // --------------------- End Code Area --------------------
}


// Export the longest substring for use by the testing function
module.exports = longestSubstring;
