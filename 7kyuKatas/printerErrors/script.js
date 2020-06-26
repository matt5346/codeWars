// 7 kyu Printer Errors
// Sometimes there are problems: lack of colors, 
// technical malfunction and a "bad" control string
// is produced e.g. aaaxbbbbyyhwawiwjjjwwm with 
// letters not from a to m.

// You have to write a function printer_error 
// which given a string will output the error 
// rate of the printer as a string representing 
// a rational whose numerator is the number of 
// errors and the denominator the length of the 
// control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one 
// and contains only letters from ato z.

// #Examples:

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

function printerError(s) {
    let new_arr = s.split('');
    let printer_regex = /^[a-m]/;
    let b = 0;
    for(let i = 0; i < new_arr.length; i++) {
        if(printer_regex.test(new_arr[i]) !== true) {
            b++;
        }
    }
    return b + '/' + new_arr.length;
}
let s="aaabbbbhazijzjjm"
console.log(printerError(s))