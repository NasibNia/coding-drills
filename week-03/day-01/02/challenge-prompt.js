// Day 01
// Activity 02

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------   
  // console.log($('<button value='+ str + '>' + str +'</button>'))  
  // console.log(str)
  var newBtn = $('<button>');
  newBtn.attr("value", str);
  newBtn.attr("class", "new-button");
  newBtn.text(str);
  $("#button-area").append(newBtn);
  return; 
  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  
  // ---------- Your Code Here ----------
  //console.log( event ); 
  // console.log( event.type );    // The event type, eg. "click"
  // console.log( event.which );   // The button or key that was pressed.
  // console.log( event.target );  // The originating element.
  // console.log( event.pageX );   // The document mouse X coordinate.
  // console.log( event.pageY );
  // $("#display-area").append($("#user-input").val());
  // console.log($("#display-area").append($("#user-input").val()))
  // console.log($("#user-input").val());




  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  
  // ---------- Your Code Here ----------
// event.preventDefault();
  // var inputText = "nasibkharoo"
  
  var inputText = $("#user-input").val() ;
  console.log(inputText);
  $(document).on('click', "#submit-button", function(){
  });
  // $("#button-area").on('click',displayContent('click'));
// displayContent(event);

  // ---------- End of Code area ----------
});