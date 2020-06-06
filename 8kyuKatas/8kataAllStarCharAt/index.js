// 8 kyu kata
// Description:
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0

function strCount(str, letter){
    let letters_array = str.split('');
    let counter= 0;
    for(i = 0; i < letters_array.length; i++) {
        // console.log(letters_array[i]);
        if(letters_array[i] == letter ) {
            counter += 1;
        }
    }
    if (str == '') {
        return 0;
    }
    return counter;
}

console.log(strCount('hooo', 'o'))