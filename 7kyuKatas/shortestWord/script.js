// 7 kyu Shortest Word solution
// Simple, given a string of words, return 
// the length of the shortest word(s).

// String will never be empty and you do 
// not need to account for different data types.

// function findShort(s){
//     let new_arr = s.split(' ')
//     new_arr.sort((a, b) => {
//         return a.length - b.length
//     })
//     return new_arr[0].length;
// }

function findShort(s) {
    let arr = s.split(' ');
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length < smallest.length) {
            smallest = arr[i]
        }
    }
    return smallest.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))