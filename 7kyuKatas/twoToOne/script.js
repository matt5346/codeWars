// 7 kyu two to One
// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible,
// containing distinct letters,
//
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy".

function longest(s1, s2) {
    let new_arr = s1.concat(s2)
    let regExp_filter = /([a-z])(?=.*\1)/g
    let result = new_arr.replace(regExp_filter, "").split("")
    return result.sort().join("")
}

console.log(longest("aretheyhere", "yestheyarehere"));