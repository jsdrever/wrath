// Assignment Code
//this variable targets generate id (password button)
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
//function generatePassword() {
  //  console.log("clicked it")
//todo need a generated password and return that variable
// 1. prompt the user for the password criteria
// !  a. password length 8-128 code unsuccessfull
//   b. lowercase, upppercase, numbers, special characters
// 2. validate the input ^ at least one type of character
// 3. generate the password
// ! 4. display password to the page

const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercase = document.getElementById('includeUppercase')
const includeNumbers = document.getElementById('includeNumbers')
const includeSymbols = document.getElementById('includeSymbols')
const includeLowercase = document.getElementById('includeLowercase')


  //  return "Generated Password will go here!"
//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var newPassword

  //passwordText.value = newPassword;
  passwordText.value = password;
   
}

// Add event listener to generate button an on click connects the generate btn variable and calls the writePassword function




//practice attempt 2
// GENERATEBTN CLICK EVENT NOT RESPONDING
// NEEDS PROMPTS FOR INPUT SELECTION
// PASSWORD NOT BEING DISPLAYED IN BOX
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = "!@#$%^&*()[]{}=+></,.";

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
    
    let newPassword = "";
    function hasLowercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      function hasUppercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
      function hasNumbers() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      }
      function hasSymbols() {
        const symbols = "!@#$%^&*()[]{}=+></,.";
        return symbols[Math.floor(Math.random() * symbols.length)];
      }
    
    //! these prompts have no effect on the generated password.
//      if (confirm('Include capital letters?')) {
//          characterCodes.push(includeUppercase)
//        } else {
//         return
//        }
    
//    if (confirm('Include lowercase letters?')) {
//          characterCodes.push(includeLowercase)
//        } else {
//         return
//        }
      
//         if (confirm('Include numbers?')) {
//          characterCodes.push(includeNumbers)
//        } else {
//         return
//        }
     
//       if (confirm('Include symbols?')) {
//          characterCodes.push(includeSymbols)
//          {
//              password.textContent = newPassword;
//              password.textContent = password;
//          }
//        };
        //! newPassword undefined...
        //! how do i collect the resluts from the functions
        //  todo make a prompt for selecting length. not sure how to set that up. it wont be a if(confirm('how many characters)) {
        //     characterCodes.push(userInput)
        // }

    if(availableCharacters.length === 0) return "";

    for(let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password+= availableCharacters[randomIndex];
    }
    return password;
    // ! What am i doing wrong here...
}


// the 10 value will need to be optional
// console.log(generatePassword(10, true, true, true));
var writePassword = function() {
    console.log(generatePassword())
};
writePassword();
//not even getting console.log to read password ^ up there
generatePassword(10, true, false, true);


//! it's displaying in the password box now but also getting a [object HTMLTextAreaElement] then the digits
//  https://tinyurl.com/BootCampTutorTeam bc i keep losing the email with this link. like seriously why does the bootcamp walk you through a method of scheduling with a tutor but then they don't accept that method and it's not written anywhere on the pages. you just need to find "that email" that has "that link" end of rant.








