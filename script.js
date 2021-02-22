//This is where I had to define the array sets
var upperCaseArray= [

    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"    

];

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

var passwordlength = [];

//I choose to use queryselector syntax to help with page loadout and added an eventlistner so that the html loads first

document.addEventListener("DOMContentLoaded",function(){
    var generateBtn = document.querySelector("#generate");
    console.log(generateBtn)

    generateBtn.addEventListener("click", function(){
        console.log("i have been clicked")

    
 //User is prompted with a series of ok or cancel prompts to help determine password length   
        var passwordlength = prompt("How long would you like your password 8-128 characters");
    console.log(length);

    if(passwordlength<8){
        alert("Password must from 8-128 characters");
    } else if(passwordlength>128){
            
        alert("Password must be less than 128 characters");
    };


//User is prompted to slecet what values the password will contain used spread syntax method

    var upperCase= confirm("Would you like uppercase letters?");
        if(upperCase){
            passwordNotes.push(...upperCaseArray);
            console.log(passwordNotes);
        }

    var lowerCase= confirm("Would you like lowercase letters?");
        if (lowerCase){
            passwordNotes.push(...lowerCaseArray);
            console.log(passwordNotes);
        }

    var numbers= confirm("Would you like numbers?");
        if (numbers){
            passwordNotes.push(...numbersArray);
            console.log(passwordNotes);
        }

    var specialCharacters= confirm("Would you like special-characters. For example '!@#$'");
        if (specialCharacters){
            passwordNotes.push(...specialCharactersArray);
            console.log(passwordNotes);
        }

  var password = generatePassword(passwordlength);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


    });


//function used to gather all variables and assign a random output
function generatePassword(password){
    
    var passwordLoop = [];
    for(var i = 0;i < password; i++){
    var passwordIndex = passwordNotes[Math.floor(Math.random() * passwordNotes.length)] 
    passwordLoop.push(passwordIndex)
    }

    return passwordLoop.join("")

};


})