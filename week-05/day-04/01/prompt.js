
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
    
    for (var i = 1; i < n; i++) {

        if (i%15 == 0){
            console.log("fizzBuzz");
        } else if (i%5 == 0) {
            console.log("Buzz");
        } else if (i%3 == 0) {
            console.log("fizz");
        }  else {
            console.log(i);
        } 
    }


// ==========================================================
  
}

var number = process.argv[2];

fizzBuzz(number);

