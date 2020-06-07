// 7 kyu Mumbling
// This time no story, no theory. The examples below 
// show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    new_arr = s.split('');
    result_arr = []
    for(let i = 0; i < new_arr.length; i++) {
        for(let k = 0; k < new_arr.length; k++) {
            result_arr.push(new_arr[i]);
        }
    }
    console.log(result_arr)
}

console.log(accum("abc"))
console.log(accum("ZpglnRxqenU"))