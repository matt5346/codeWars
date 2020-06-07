// 7 kyu Square Every Digit
// Welcome. In this kata, you are asked to 
// square every digit of a number.

// For example, if we run 9119 through the 
// function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let num_var = num.toString().split('')
    num_arr = []
    num_var.map(number => {
        num_arr.push(number * number)
    })
    return Number(num_arr.join(''))
}

console.log(squareDigits(9119))