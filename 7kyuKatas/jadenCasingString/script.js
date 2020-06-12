// 7 kyu Jaden Casing String

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    let arr = this.split(' ');
    return arr.map(word => {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }).join(' ')
};
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())