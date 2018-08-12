// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

// setTimeout(function(){					///interesting: if you put setTimeOut(alert("Question1"),5000); it doesn't work!
// 	alert("Question1")},5000);

//or

var question1Time = setTimeout(question1,5000);  /// Interesting: if you put setTimeout(question(),5000) it will immidiately runs questions and do not wait! 

function question1(){
	alert("Question1");
}



console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
var question2time = setTimeout(function(){
	alert("Question2") } , 15000);


// Remove the timer you just made for Question 2
clearTimeout(question2time);

// clearTimeOut(question2time);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
var timer3 = setTimeout(function(){
	alert("question 3 part 1")},15000);


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var timer4 = setTimeout(function(){
	alert("question 3 part 2")},16000);

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(timer3);



console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
setTimeout(function(){
	console.log("Question 5 Completed!");
},11000);

