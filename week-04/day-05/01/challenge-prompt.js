// Activity 1


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------

  var i = maxBottles ;
  while(i > 0 ){
    var txt1 = i + " bottles of beer on the wall, " + i + " bottles of beer.";
    var txt2 = "Take one down, pass it around, " + (i-1) +  "bottle of beer on the wall!";
    var newDiv1 = $('<p>');
    var newDiv2 = $('<p>');

    newDiv1.append(txt1);
    newDiv2.append(txt2);
    newDiv1.append(newDiv2);
    $("#output-area").append(newDiv1);
    i--;
  }
  


  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    var num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
});