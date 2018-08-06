
$(document).ready(function () {
  // Section 1: DEFINING VARIABLES

  // 1.1 create a variable called letters with an array of every letter in alphabet (A-Z) as a string
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 1.2 create a variable called body and have it equals the jquery selector of body
  var body = $("body");

  // 1.3 create a variable called btns which equals the variable body jQuery called "find" method and in find we are looking fro the id of buttons
  var btns = body.find("#buttons");

  // Section 2 : DYNAMICALLY the text on the button
  // =================================================================================

  // 2.1 Create a for-loop that iterates through the variable letters.
  for (var i = 0 ; i < letters.length ; i++){

    // 2.2 Create a variable named "textButton" equal to a jquery selctor of the <button> tag
    var textButton = $("#buttons");

    // 2.3. Add the class "letter-button" to the variable textButton we just created
    textButton.addClass(".letter-button");

    // 2.4. Then give the variable text button a data-attribute of "data-letter" set to each element within our letters array in turn 
    textButton.attr("data-letter", letters[i] );
    // console.log(textButton);

    // 2.5. Set the text of each button to match each element in the array
    textButton.html(letters[i]);

    // 2.6. Append "textButton" to the variable buttons.
    $("#buttuns").append(textButton);
  }
  

  // Section 3 : attaching the button text to a div
  // =================================================================================

  // 3.1 Create an "on-click" event attached to the ".letter-button" class.
  $(".letter-buttons").on('click', function(){

    // 3.2 Create a variable called textDiv and jquery selector string of <div>.
    var textDiv = $("<div>");

    // 3.3 use the variable textDiv and add a class of a string letter.
    textDiv.addClass("heythere");

    // 3.4 use the var textDiv and add text that is equal to the this or button that creates the letter and add a attribute of a string data-letter 
    var text = $(this).attr("data-letter");
    console.log(text);
    textDiv.html(text);

    // 3.5 select the body of the page and find the id of display and append textDiv to it
    body.$("#display").append(textDiv); 
  });

});
