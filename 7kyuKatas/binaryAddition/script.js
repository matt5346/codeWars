// 7 kyu Binary Addition

// Implement a function that adds two numbers together and returns
// their sum in binary. The conversion can be done before, or after the addition.

function addBinary(a,b) {
    let decimal = a + b
    let result = []
    let one = 1
    let zero = 0
    for(let i = 0; i < decimal; i++) {
        if(i === 0) {
            result.push(one + one)
        }
        if(i >= 1) {
            lastDigit = result[result.length - 1] + one
            result.pop()
            result.push(lastDigit)
        }
        for (let j = 0; j <= i; j++) {
            if(result.length === 1 && result[result.length - 1] === 2) {
                result.shift()
                result.push(one)
                result.push(zero)
            }
            if(result.length > 1 && result[result.length - 1] === 2) {
                result.shift()
                result.push(one)
                result.push(zero)
            }
        }
    }
    console.log(result)
}

console.log(addBinary(1,2))