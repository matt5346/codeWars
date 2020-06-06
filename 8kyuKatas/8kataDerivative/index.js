// Take the Derivative 8 kyu

// This function takes two numbers as parameters, 
// the first number being the coefficient, and the 
// second number being the exponent.

// Your function should multiply the two numbers, 
// and then subtract 1 from the exponent. Then, it 
// has to print out an expression (like 28x^7). "^1" 
// should not be truncated when exponent = 2.

function derive(coeff,exponent) {
    let exponentResult = coeff * exponent + 'x';
    let coeffResult = exponent - 1;
    let result = exponentResult + '^' + coeffResult;
    // console.log(typeof(exponentResult))
    // console.log(typeof(coeffResult))
    return result;
}


console.log(derive(5, 6));