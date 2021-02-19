// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseArray= [

    
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"    

];

console.log(upperCaseArray);

var lowerCaseArray= [
    "a","b","c","d","e","f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"
];

var numbersArray= [
    "1","2", "3", "4", "5", "6", "7", "8", "9", "0"
];

var specialCharactersArray= [
    "!","@","#","$","%","^","&","*","(",")","_","+","-","{","}","<",">","?","/","."
];

var passwordNotes = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// User is propmted to give password length
function generatePassword(){
    
    var passwordlength = prompt("how long would you like your password 8-128 characters");
    console.log(length);

    if(passwordlength<8){
        alert("Password must be at least 8 characters");
    }

    if(passwordlength>128){
        aleart("Password must be less than 128 characters");
    }
};
    
// The prompts that ask questions after you hit the button
    var upperCase= confirm("would you like uppercase letters");
        if(upperCase){
            passwordNotes.push(upperCaseArray);
            console.log(passwordNotes);
        }
    var lowerCase= confirm("would you like lowercase letters");
        if (lowerCase){
            passwordNotes.push(lowerCaseArray);
            console.log(passwordNotes);
        }

    var numbers= confirm("would you like numbers");
        if (numbers){
            passwordNotes.push(numbersArray);
            console.log(passwordNotes);
        }

    var specialCharacters= confirm("would you like special-characters '!@#$'");
        if (specialCharacters){
            passwordNotes.push(specialCharactersArray);
            console.log(passwordNotes);
        }

// Function writePassword(password){

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);