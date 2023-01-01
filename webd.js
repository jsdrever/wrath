const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')


const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

// function includeNumbersElement(

// )

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// === true, == true, += true 
// or maybe make new const's and use it to call the elements


form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked == true
    // const includeLowercase = includeLowercaseElement.checked == true
    const includeNumbers = includeNumbersElement.checked == true
    const includeSymbols = includeSymbolsElement.checked == true
    const password = generatePassword(characterAmount, includeUppercase,  includeNumbers, includeSymbols)
//    includeLowercase,

    //let password = "";

    // if (includeUppercaseElement.checked) {
    //     password += includeUppercase();
    // }

    // if (includeNumbersElement.checked) {
    //     password += includeNumbers();
    // }

    // if (includeSymbolsElement.checked) {
    //     password += includeSymbols();
    // }

    // for (let i = password.length; i < characterAmount; i++) {
    //     const x = generatePassword();
    //     password += x;
    // }
    // todo none of this is working. try fixing the first checkboxes attempt.
    passwordDisplay.innerText = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
    // if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode)) 
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)  
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

console.log(generatePassword(''));

