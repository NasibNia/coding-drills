// Activity 5


// In this activity, we're creating a function that counts the
// number of consonants in a string


// -------------------------------------------------------
//                       Count Consonants
// -------------------------------------------------------
function countCons(str) {
  // -------------------- Your Code Here --------------------
  var list = 'BCDFGHJKLMNPQRSTUVWXYZ';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if(list.indexOf(letter) !== -1){
      count++;
    }
    
  }
  return count;





  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `countCons` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    var str = $("input").val().trim();
    $("#output-area").text(countCons(str));

  });
});