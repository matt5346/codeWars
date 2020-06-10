// 7 kyu Descending Order solution

// Your task is to make a function that can take 
// any non-negative integer as a argument and 
// return it with its digits in descending order. 
// Essentially, rearrange the digits to create 
// the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    let num_arr = n.toString().split('');
    num_arr.sort((a, b) => {
        return b - a;
    })

    return Number(num_arr.join(''))
}

console.log(descendingOrder(123456789))