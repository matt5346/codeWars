// 7 kyu Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation 
// is to remove all of the vowels from the trolls' 
// comments, neutralizing the threat.

// Your task is to write a function that takes a 
// string and return a new string with all vowels removed.

// For example, the string "This website is for 
// losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let new_arr = str.split('');
    new_arr.filter(function(char) {
        return char;
    })
    let result_arr = []
    for(let i = 0; i < new_arr.length; i++) {
        if(new_arr[i] == 'a' || new_arr[i] == 'A') {
            continue;
        } else if(new_arr[i] == 'e' || new_arr[i] == 'E') {
            continue;
        } else if(new_arr[i] == 'i' || new_arr[i] == 'I') {
            continue;
        } else if(new_arr[i] == 'o' || new_arr[i] == 'O') {
            continue;
        } else if(new_arr[i] == 'u' || new_arr[i] == 'U') {
            continue;
        } else {
            result_arr.push(new_arr[i]);
        }
    }
    return result_arr.join('');
}

console.log(disemvowel("This website is for losers LOL!"))

// VOWELS A, E, I, O, U