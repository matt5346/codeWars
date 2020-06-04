//8 kyu Polish alphabet solution

// There are 32 letters in the Polish alphabet: 
// 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

function correctPolishLetters (string) {
    let string_chars = string.split('');
    let new_arr = [];

    string_chars.filter(char => {
        switch(char) {
            case 'ą': new_arr.push('a');
            break;
            
            case 'ć': new_arr.push('c');
            break;
            
            case 'ę': new_arr.push('e');
            break;
            
            case 'ł': new_arr.push('l');
            break;
            
            case 'ń': new_arr.push('n');
            break;
            
            case 'ó': new_arr.push('o');
            break;
            
            case 'ś': new_arr.push('s');
            break;
            
            case 'ź': new_arr.push('z');
            break;
            
            case 'ż': new_arr.push('z');
            break;
            
            default: new_arr.push(char)
        }
    })
    return new_arr.join('');
}

console.log(correctPolishLetters("Jędrzej Błądziński"));