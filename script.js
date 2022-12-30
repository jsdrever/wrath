// Assignment Code
//this variable targets generate id (password button)
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
//function generatePassword() {
  //  console.log("clicked it")
//need a generated password and return that variable
// 1. prompt the user for the password criteria
//   a. password length 8-128
//   b. lowercase, upppercase, numbers, special characters
// 2. validate the input ^ at least one type of character
// 3. generate the password
// 4. display password to the page




  //  return "Generated Password will go here!"
//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button an on click connects the generate btn variable and calls the writePassword function




//practice attempt 2
// GENERATEBTN CLICK EVENT NOT RESPONDING
// NEEDS PROMPTS FOR INPUT SELECTION
// PASSWORD NOT BEING DISPLAYED IN BOX
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!", "@", "#", "$", "%", "^", "&"]

const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())

const generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) =>{
    const availableCharacters = [
        ...(hasSymbols ? symbols : []),
        ...(hasNumbers ? numbers : []),
        ...(hasUppercase ? uppercaseLetters : []),
        ...(hasLowercase ? lowercaseLetters : []),
    ];
    let password = "";

    if(availableCharacters.length === 0) return "";

    for(let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password+= availableCharacters[randomIndex];
    }
    return password;
}

console.log(generatePassword(12, true, true, true, true));

generatePassword();









