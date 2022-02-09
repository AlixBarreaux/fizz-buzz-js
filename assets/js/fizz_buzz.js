/*
FizzBuzz Coding Challenge

What this program does:
  - Prints a number from 1 to 100
  - If this number is a multiple of 3 print "Fizz"
  - If this number is a multiple of 5 print "Buzz"
  - If this number is a multiple of 3 AND 5 print "FizzBuzz"
*/

var min_number = 1;
// Initialize the user's input which will be asked
var input_number = 100;
// Limit the input_number's value
var input_number_limit = 100;

var small_multiple = 3;
var high_multiple = 5;

var small_multiple_message = "Fizz";
var high_multiple_message = "Buzz";
var double_multiple_message = small_multiple_message + high_multiple_message;


for (var number = 0; number < input_number + 1; number++) {
  console.log(number);

  if (number % small_multiple === 0 && number % high_multiple === 0) {
    console.log(number, ":" , double_multiple_message);
  }

  else if (number % small_multiple === 0) {
    console.log(number, ":" , small_multiple_message);
  }
  else if (number % high_multiple === 0) {
    console.log(number, ":" , high_multiple_message);
  }
}
