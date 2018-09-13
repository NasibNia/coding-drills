# Algos 

## Add digits

## Instructions

Given a number, add all of its digits. Continue to do so until the sum is one digit. Return the single digit.

## Example 
Given the number 644, your function should return 5. 6 + 4 + 4 = 14. 1 + 4 = 5.

Given the number 42, your function should return 6. 4 + 2 = 6. 

Given the number 89657, your function should return 8. 8 + 9 + 6 + 5 + 7 = 35. 3 + 5 = 8.



Since we want to get to the final summation below 9; the summation is the remainder of number % 9,
because essentially that is showing how many times we should keep going to get to the one digit number.

in all the cases that number is divisive to 9 the summation is 9 ; in all the other cases it would be the remainder

for example if we have 27 the number is dividive to 9 and remainder is 0. the summation of digits would be 9.
for the case of 28 tho; the remainder is 1, and final summation would be 1 too.

here is another example:

644 /9 = 73 
644 % 9 = 5

To find the pattern I was playing with numbers in the following format and realized that anything between 10-100 and inside the table is essentially a one-time one-digit summation while anything outside is not.
10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 
.. | .. | .. | .. | .. | .. | .. | 81 | 
.. | .. | .. | .. | .. | .. | 72 | 
.. | .. | .. | .. | .. | 63 |
.. | .. | .. | .. | 54 |
.. | .. | .. | 45 | 
.. | .. | 36 |
.. | 27 | 
18 | 