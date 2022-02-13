/*
FizzBuzz Coding Challenge

What this program does:
  - Prints a number from 1 to 100
  - If this number is a multiple of 3 print "Fizz"
  - If this number is a multiple of 5 print "Buzz"
  - If this number is a multiple of 3 AND 5 print "FizzBuzz"
*/


var small_multiple_number = 3;
var high_multiple_number = 5;


// Limit the input_number's value to avoid memory overflow problems
var min_input_number_limit = 1;
var max_input_numbers_limit = 100;

var small_multiple_message = "Fizz";
var high_multiple_message = "Buzz";


// Called when the HTML document is loading
function initialize() {
  initialize_all_html_classes_and_id_elements_content();

  document.getElementById("small-multiple-number-input").value = small_multiple_number;
  document.getElementById("high-multiple-number-input").value = high_multiple_number;
}


function initialize_all_html_classes_elements_content() {
  set_text_by_html_class("min-input-number", min_input_number_limit);
  set_text_by_html_class("max-input-number", max_input_numbers_limit);


  set_text_by_html_class("small-multiple-number", small_multiple_number);
  set_text_by_html_class("high-multiple-number", high_multiple_number);

  set_text_by_html_class("small-multiple-message", small_multiple_message);
  set_text_by_html_class("high-multiple-message", high_multiple_message);
}


function set_text_by_html_class(html_class_name, new_text) {
  let html_class_elements = document.getElementsByClassName(html_class_name);

  //console.log(document.getElementsByClassName(html_class_name)[1].textContent);
  for (var counter = 0; counter < html_class_elements.length; counter ++) {
    html_class_elements[counter].textContent = new_text.toString();
  }
}


function test() {
  var min_input_number = 1;
  // Initialize the user's input which will be asked
  var input_numbers = 100;
  // Limit the input_number's value
  var input_numbers_limit = 100;

  var small_multiple_number = 3;
  var high_multiple_number = 5;

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
}


// WARNING: WRITE FIZZ / BUZZ INSTEAD OF PRINTING NUMBER!!!!!!!!!!!!!!!!!!!!!


function process_numbers(value_1, value_2) {
  let returnValue = "";
  let fizz = false;
  let buzz = false;

  for (var counter = 1; counter <= 100; counter++) {
    fizz = counter % value_1 === 0;
    buzz = counter % value_2 === 0;

    switch(true) {
      case fizz && buzz:
        returnValue += "FizzBuzz ";
        break;

      case fizz:
        returnValue += "Fizz ";
        break;

      case buzz:
        returnValue += "Buzz ";
        break;

      default:
        returnValue += counter + " ";
        break;
    }
  }
  return returnValue
}


// Call and use FizzBuzz
function fizz_buzz() {
  let output = "";
  let value_1 = document.getElementsByClassName("small-multiple-number").value;
  let value_2 = document.getElementsByClassName("high-multiple-number").value;

  output = process_numbers(value_1, value_2);
  console.log("Output:", output);

  document.getElementById("results").innerHTML = output;
}

initialize();
