var length = 8;
var pick = [];
var passwordString = " "

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
    var characters = parseInt(prompt("How many characters would you like in your password?"))
    console.log(characters)
    if (characters < 8 || characters > 128) {
      alert ("Your password must be between 8 and 128 characters.");
     var characters = parseInt(prompt("Please enter a number between 8 & 128"))
      
    }
  
  if (confirm("Do you want uppercase letters in your password?")){
  pick.push(upperCase)
  }
  
  if (confirm("Do you want lowercase letters in your password?")){
    pick.push(lowerCase)
  }
  
  if (confirm("Do you want special characters in your password?")){
    pick.push(specialCh)
  }
  
  if (confirm("Do you want numbers in your password?")){
    pick.push(numbers)
  }
  
  else if (pick.length === 0){
    alert("You must select at least one character type.")
    return ''
  }  

console.log(characters, pick)
  
  
  for (var i = 0; i < characters; i++){
    var randomNum = Math.floor(Math.random() * pick.length);
    var randomCharNum = Math.floor(Math.random() * pick[randomNum].length);
    var password = pick[randomNum][randomCharNum]
    passwordString += password
    console.log(randomNum, randomCharNum, password)
  }
  
  return passwordString
  
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