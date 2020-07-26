// 7 kyu Multiples of 3 or 5

// If we list all the natural numbers below 10 that are 
// multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the 
// multiples of 3 or 5 below the number passed in.

function solution(number){
    let arr = []
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 && i !== 0) {
            arr.push(i)
        }
        if (i % 5 === 0 && i !== 0) {
            arr.push(i)
        }
    }
    let newArr = []
    arr.filter(item => {
        if (item % 3 === 0 && item % 5 === 0) {
            newArr.push(item / 2)
        } else {
            newArr.push(item)
        }
    })
    try {
        return newArr.reduce((a, b) => {
            return a + b
        })
    } catch(err) {
        return 0
    }
}

console.log(solution(-1))