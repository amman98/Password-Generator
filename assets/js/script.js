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

// store every character type in separate arrays
var lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChars = ['1','2','3','4','5','6','7','8','9','0'];
var specialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


function generatePassword() {
  var length = prompt("Select a length between 8 and 128.");

  // check if length is between 8 and 128 characters, also check if input isn't a valid number
  while(length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid length!");
    length = prompt("Select a valid length between 8 and 128."); // reprompt user until given a valid length
  }

  var charList = [];
  confirmCharacters();

  var password = "";
  // stores randomly generated password one character at a time in password variable
  for(var i = 0; i < length; i++) {
    password = password.concat(charList[Math.floor(Math.random() * charList.length)]); // grab a random character from the list of available characters
  }

  return password;

  // confirm what characters user wants to include: (lowercase, uppercase, numerics, special characters)
  function confirmCharacters() {
    var hasLowerCase = confirm("Do you want to include lowercase characters?");
    var hasUpperCase = confirm("Do you want to include uppercase characters?");
    var hasNumeric = confirm("Do you want to include numeric characters?");
    var hasSpecialChar = confirm("Do you want to include special characters?");

    if(!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecialChar) {
      alert("You have to pick at least one character type.");
      confirmCharacters(); // recursive call until user has picked at least one type
      return;
    }

    // if statements decide which character types to include in generated password, based on user input
    if(hasLowerCase) {
      if(charList.length == 0) {
        charList = lowerCaseChars;
      }
    }
    if(hasUpperCase) {
      if(charList.length == 0) {
        charList = upperCaseChars;
      }
      else {
        charList = charList.concat(upperCaseChars);
      }
    }
    if(hasNumeric) {
      if(charList.length == 0) {
        charList = numericChars;
      }
      else {
        charList = charList.concat(numericChars);
      }
    }
    if(hasSpecialChar) {
      if(charList.length == 0) {
        charList = specialChars;
      }
      else {
        charList = charList.concat(specialChars);
      }
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
