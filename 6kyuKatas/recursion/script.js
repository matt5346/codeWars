function pow(x, n) {
    let result = x.toString().split('')
    // debugger
    if(x < 10) {
        return x
    } else {
        let newResult = result.reduce((prev, next) => {
            return parseInt(prev) + parseInt(next)
        })
        return pow(newResult)
    }
}
// debugger
// if (n == 1) {
//     return x;
// } else {
//     return x * pow(x, n - 1);
// }
console.log( pow(146) );