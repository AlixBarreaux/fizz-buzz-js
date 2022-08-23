/*
FizzBuzz Coding Challenge

What this program does:
  - Prints a number from 1 to 100
  - If this number is a multiple of 3 print "Fizz"
  - If this number is a multiple of 5 print "Buzz"
  - If this number is a multiple of 3 AND 5 print "FizzBuzz"
*/


// Numbers to display from x to y
let min_input_numbers_limit = 1;
let max_input_numbers_limit = 100;


// Limit the input_number's value to avoid memory overflow problems
// ADD TRESHOLD HERE !!!!!!!!!!!!

// Multiples acting on the messages to print
let small_multiple_number = 3;
let high_multiple_number = 5;


// Messages to print depending on the multiples
let small_multiple_message = "Fizz";
let high_multiple_message = "Buzz";
let double_multiple_message = small_multiple_message + high_multiple_message;


// Called when the HTML document is loading
function initialize() {
  initialize_all_html_classes_elements_content();

  document.getElementById("small-multiple-number-input").value = small_multiple_number;
  document.getElementById("high-multiple-number-input").value = high_multiple_number;

  return;
}


function initialize_all_html_classes_elements_content() {
  set_text_by_html_class("min-input-number", min_input_numbers_limit);
  set_text_by_html_class("max-input-number", max_input_numbers_limit);


  set_text_by_html_class("small-multiple-number", small_multiple_number);
  set_text_by_html_class("high-multiple-number", high_multiple_number);

  set_text_by_html_class("small-multiple-message", small_multiple_message);
  set_text_by_html_class("high-multiple-message", high_multiple_message);

  return;
}


function set_text_by_html_class(html_class_name, new_text) {
  let html_class_elements = document.getElementsByClassName(html_class_name);

  //console.log(document.getElementsByClassName(html_class_name)[1].textContent);
  for (let counter = 0; counter < html_class_elements.length; counter ++) {
    html_class_elements[counter].textContent = new_text.toString();
  }
  return;
}




let results_grid = document.getElementById("results-grid");
let grid_item = "      <div class=\"grid-item\">\n        <p class=\"grid-item-text\"></p>\n      </div>\n";


function process_results() {
  let grid_item_text = "";
  let index = 0;


  let fizz = false;
  let buzz = false;

  for (let counter = min_input_numbers_limit; counter <= max_input_numbers_limit; counter++) {
    // ADD COMMENT FOR BOOLEANS HERE !!!!!!!!!!!!!!!!!
    fizz = counter % small_multiple_number === 0;
    buzz = counter % high_multiple_number === 0;

    switch(true) {
      case fizz && buzz:
        grid_item_text = double_multiple_message;
        break;

      case fizz:
        grid_item_text = small_multiple_message;
        break;

      case buzz:
        grid_item_text = high_multiple_message;
        break;

      default:
        grid_item_text = counter;
        break;
    }
    generate_grid_items(index, grid_item_text)
    index ++;
  }
  return;
}


function generate_grid_items(index, text_content) {
  results_grid.innerHTML += grid_item;
  document.getElementsByClassName("grid-item-text")[index].textContent = text_content;

  return;
}


// Use the main script's functionality
function run() {
  process_results();
  return;
}

// Run when the script is loaded
initialize();
