// 7 kyu Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes 
// and PIN codes cannot contain anything but 
// exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, 
// return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false

function validatePIN(dna){
    checkRegex1 = /^\d{4}$/gi
    checkRegex2 = /^\d{6}$/gi
    if (dna.match(checkRegex1) || dna.match(checkRegex2)) {
        return true
    } else {
        return false
    }
}

console.log(validatePIN("1234"))