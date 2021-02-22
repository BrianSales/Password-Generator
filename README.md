# Password-Generator
## Discription

I first had to think about and had to define the array sets that would be used in my code. I choose to use queryselector syntax to help with page loadout and added an eventlistner so that the html would load first onto the page. If I did not I noticed that my prompts would load before the generate button was clicked. When generate button is clicked the user is prompted with a series of ok or cancel prompts that must return true to help determine password length. If the password returns a length that is false the user can clicked the generate button and try again.  The user is then prompted to slecet what values the password will contain. I used the spread syntax method to place the user choosen array set and used the math floor dot random function to come up with a random variable set based on the user inputs.




GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
### Usage  
    Able to generate a password between 8-128 characters
    <img src="images\_C__Users_Brian_Desktop_Password_Password-Generator_index.html(Pixel 2 XL).png" width="190">

#### Links