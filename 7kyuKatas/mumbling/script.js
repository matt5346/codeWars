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
        if(i == 0) {
            result_arr.push(new_arr[i].toUpperCase())
        } else if (i > 0) {
            result_arr.push('-' + new_arr[i].toUpperCase())
        }
        for(let k = new_arr.length - i; k < new_arr.length; k++) {
            // if(new_arr.length == new_arr.length) {
            //     result_arr.push(new_arr[i])
            // }
            result_arr.push(new_arr[i].toLowerCase())
        }
    }
    return result_arr.join('')
}

console.log(accum("abc"))
console.log(accum("ZpglnRxqenU"))