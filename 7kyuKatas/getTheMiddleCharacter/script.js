// 7 kyu Get the Middle Character

// Description:
// You are going to be given a word. Your job is to 
// return the middle character of the word. If 
// the word's length is odd, return the middle 
// character. If the word's length is even, return 
// the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

function getMiddle(s) {
    let arr = s.split('');
    let splited_arr = arr.map(char => {
        return char;
    })
    if(splited_arr.length % 2 == 0) {
        let middle_1 = splited_arr.length / 2 - 1;
        let middle_2 = splited_arr.length / 2;
        let result = [splited_arr[middle_1], splited_arr[middle_2]];
        return result.join('');
    }
    if(splited_arr.length % 2 !== 0) {
        let middle = (splited_arr.length - 1) / 2;
        return splited_arr[middle];
    }
}

console.log(getMiddle("test"));

console.log(getMiddle("testing"));