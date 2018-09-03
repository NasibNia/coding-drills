// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------
var count = 1;
var num = divisor;
var last = divisor;
var remainder;
while(num <= dividend){
    num = num + divisor;
    if (num < dividend) {
        last = num;
        count++;
    } else {
        remainder = dividend-last;
        console.log("reaminder is   "+ remainder);
    }   
}
return count;



// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;