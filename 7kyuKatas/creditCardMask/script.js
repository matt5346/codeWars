// 7 kyu credit card Mask
// Usually when you buy something, you're asked 
// whether your credit card number, phone number 
// or answer to your most secret question is still 
// correct. However, since someone could look over 
// your shoulder, you don't want that shown on your 
// screen. Instead, we mask it.

// Your task is to write a function maskify, 
// which changes all but the last four characters into '#'.

function maskify(cc) {
    new_arr = cc.split('');
    if(new_arr.length <= 4) {
        return new_arr.join('');
    } else if (new_arr.length > 4){
        for(i = 0; i < new_arr.length - 4; i++) {
            new_arr[i] = '#';
        }
        return new_arr.join('');
    }
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))