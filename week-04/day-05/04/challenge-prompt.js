// Activity 4


// In this activity, we're creating a function that generates
// the first few elements of the fibonacci sequence

// -------------------------------------------------------
//                 Generate Fibonacci Sequence
// -------------------------------------------------------
function fibonacci(num) {
  // -------------------- Your Code Here --------------------
  var fiboArr = [];
  if (num == 0){
    return 0;
  } else if(num == 1){
    return 1;
  } else {
    return  fibonacci(num-1) + fibonacci(num-2);  
  }
  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `fibonacci` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    $("#output-area").empty();
    
    var num = $("input").val().trim();
    
    $("#output-area").text(fibonacci(num));

  });
});