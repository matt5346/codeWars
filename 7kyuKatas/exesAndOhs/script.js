// 7 kyu Exes and Ohs
// Check to see if a string has the same amount of 
// 'x's and 'o's. The method must return a boolean 
// and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' 
// is present should return true
// XO("zzoo") => false

function XO(str) {
    let new_arr = str.split('');
    let x_counter = 0
    let o_counter = 0
    new_arr.map(char => {
        if(char == 'o' || char == 'O') {
            o_counter++;
        }
        if(char == 'x' || char == 'X') {
            x_counter++;
        }
    })
    if (x_counter == o_counter) {
        return true;
    } else if (x_counter !== o_counter) {
        return false;
    } else if (x_counter == 0 && o_counter == 0) {
        return true;
    }
}

// function XO(str) {
//     let x = str.match(/x/gi)
//     let o = str.match(/o/gi)
//     console.log(x, o)
// }


console.log(XO('xoo'))
console.log(XO('xo?asdzxcs'))
console.log(XO('zcccc'),)