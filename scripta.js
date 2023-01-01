// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppcaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbolsArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']']


function generatePassword() {
    // create the array of available characters
    var characterTypes = []
    var password = ''
    // ask the user for the length of thepassword minimum 8 characters max 128 characters
    var passwordLength = prompt('WHat is the length of your password')
    console.log(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
        alert('write something')
        return null
    }
    // ask the user the character types uppercase, lowercase, symbols, numbers?
    var uppercase = confirm('do you want uppercase?')
    var lowercase = confirm('do you want lowercase?')
    var numbers = confirm('do you want numbers?')
    var symbols = confirm('do you want symbols?')

    if (!uppercase && !lowercase && !numbers && !symbols) {
        alert('please choose at least one character type!')
        return null
    }

    if (uppercase) {
        characterTypes = characterTypes.concat(uppcaseArr)
    }
    if (lowercase) {
        characterTypes = characterTypes.concat(lowercaseArr)
    }
    if (numbers) {
        characterTypes = characterTypes.concat(numberArr)
    }
    if (symbols) {
        characterTypes = characterTypes.concat(symbolsArr)
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomItem = randomCharacter(characterTypes)
        password = password + randomItem

    }

    return password
}

function randomCharacter(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);