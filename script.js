// Assignment Code
var generateBtn = document.querySelector("#generate");

// will have to make arrays of lower and upper letters, numbers, and symbols

// make generatePassword function
// prompt for password length is a number
// if statement if number is above 8 && below 128
// confirm for lowercase, uppercase, numeric and special characters
// store there response in a variable
// if statement for each confirm and if it is a yes or true I would push or add random characters to a big array of all characters selected so far.
// for loop while i is less than there answer for num length prompt
// in this for loop we would randomly pull characters from the big array
// pull random characters from the array using math.random
// have a var declared above for loop
// that var += theRandomChar
// return the password var

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("Select the length of the password");

  // check if length is between 8 and 128 characters, also check if input isn't a valid number
  if(length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid length!");
    generatePassword(); // recursive call until valid length is given
    return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
