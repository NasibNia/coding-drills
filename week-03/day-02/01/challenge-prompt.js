// Day 02
// Activity 1


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds

var interval1 = setInterval( function (){console.log("question 01");}, 5000);


/// another way to write it
// var interval;
// var count  = 10;

// function func(){
//     clearInterval(interval);
//     interval = setInterval( log, 5000 );
// }

// function log(){
//     count--;
//     console.log("question 01");
//     if (count === 0){
//         clearInterval(interval);
//         console.log("Time Up!");
//     }
    
// }
// func();

// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
 
var interval = setInterval(function (){console.log("question 02");}, 10000);


// var interval;
// var count = 5;

// function func (){
//     clearInterval(interval);
//     interval = setInterval( log , 10000);
// }

// function log () {
//     count--;
//     console.log("question 01");
//     if (count === 0){
//         clearInterval(interval);
//         console.log("Time Up!");
//     }
// }

// func();

// Clear the interval you made in this question
clearInterval(interval);


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");

// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var interval = setInterval(function(){
    $("#question-03").append("3");
} , 2000);


// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
var interval = setInterval(function(){
    $("#question-03").empty();
} , 6000);


// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var interval = setInterval(function(){
    $("#question-05").append("5");
} , 1000);

setTimeout(clearFunc, 5000);

function clearFunc () {
    clearInterval(interval);
}

// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var interval6 = setInterval(function(){
    $("#question-06").append("6");
} , 1000);


// Create a timer to clear the interval after 6 seconds
setTimeout(clearFunc6, 6000);

function clearFunc6 () {
    clearInterval(interval6);
}


// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds

setTimeout (clearFunc1 , 10000 );

function clearFunc1 (){
    clearInterval(interval1);
}

