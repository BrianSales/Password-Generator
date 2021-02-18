// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword(){
    
    var length= prompt("how long would you like your passward 8-128 characters");
    console.log(length);

    

    var uppercase= confirm("would you like uppercase letters");
    var lowercase= confirm("would you like lowercase letters");
    var numbers= confirm("would you like numbers");
    var specialCharacters= confirm("would you like special-characters '!@#$'");


var uppercaseArray= [A,B,C

]
var lowerCaseArray= [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]

var numbersArray= [
    1,2,3,4,5,6,7,8,9,0
]

var specialCharacters= [
    !@#$%^&*()_+
]

if (numbers) 

emptyArray= []
}












// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page;