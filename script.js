var length = 8;
var pick = [];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCh = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">", "/"];




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  ;
}

function userPrompts() {
pick = [];
characters = (prompt("How many characters do you want your password to be?"))

if (characters < 8 || characters > 128) {
  return "The password has to be between 8 and 128 characters.";
} else if (isNaN(characters)) {
  characters = prompt("Please enter a valid number.");
}
else {
  alert("Your password will be " + characters + " characters long.");
  
}









//create a function to take in all password criteria
  //prompt user for length of password and save as a variable
  //check to make sure the length is between 8 and 128 characters
  //confirm lowercase, uppercase, numeric, and special characters
  //validate that one of the 4 options were selected
  //create an object to store the user input

  // create a seperate global array for each of the 4 confirmations


  //inside generatePassword function
   // create a variable to store user input from the password option function
   //create a new array that will take in all possible characters that can be used for new password
   //create conditional statements to push into possible character arrray...
   //if user selects lowercase then we need to push those elements in the lowercase array into possible character array
   //loop through the possible character array and return characters based on the length give by user
   //return the result and pass to be generated on page