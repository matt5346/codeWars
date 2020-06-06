// 8 kyu Removing Elements
// Take an array and remove every second element 
// out of that array. Always keep the first element 
// and start removing with the next element.

Example:

function removeEveryOther(arr){
    new_arr = [];
    arr.filter((item, index) => {
        console.log(index)
        if(index % 2 == 0) {
            new_arr.push(item)
        }
    })
    return new_arr;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log(10 /5)