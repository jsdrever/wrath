
/*
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
// generates the event listen
generateEl.addEventListener('click', () => {
    const length = + lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

// copy the password to a clipboard add click event
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

// generate password function
function generatePassword(lower, upper, number, symbol, length) {
// initialize a password variable; make it into a string
// filter out unchecked types
// loop over the length then call a generator function for each type
// add the final password to the password variable and return it

let generatedPassword = '';

const typesCount = lower + upper + number + symbol;
// wrap in {} to make these into objects for array
// setting .filter to object item will filter out false inputs
const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
);

if(typesCount === 0) {
    return '';
}

for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName]();
    });
}

const finalPassword = generatedPassword.slice(0, length);

return finalPassword;
}

// first make all the generator functions for lowercase, uppercase, numbers, then symbols
// http://www.net-comber.com/charset.html this is so clever

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

*/


// florin second try
/*

const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

//write the function to get these then determine length

function getLowercase() {
    return lowerLetters[Math.floor(math.random() * lowerLetters.length)];
}
function getUppercase() {
    return upperLetters[Math.floor(math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

  
    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

  for(let i=0; i<len; i++) {
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}
function generateX() {
    const xs = [];
    if(upperEl.checked) {
       xs.push(getUppercase()) 
    }
    if(lowerEl.checked) {
        xs.push(getLowercase()) 
     }
     if(numberEl.checked) {
        xs.push(number()) 
     }
     if(symbolsEl.checked) {
        xs.push(symbol()) 
     }

     if (xs.length === 0) return "";

     return xs[Math.floor(Math.random() * xs.length)];
}
generateEl.addEventListener('click', generatePassword);



*/ //florin 3rd attempt

const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});

console.log(generatePassword);