// 7 kyu Isograms solution
// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive.
// Implement a function that determines whether a string 
// that contains only letters is an isogram. Assume the 
// empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let new_arr = str.toLowerCase().split('').sort()
    let decision = true
    for(let i = 0; i < new_arr.length - 1; i++) {
        if(new_arr[i] === new_arr[i + 1]) {
            decision = false
        }
    }
    if(str == '') {
      decision = true
    }
    return decision
}

console.log(isIsogram(""))