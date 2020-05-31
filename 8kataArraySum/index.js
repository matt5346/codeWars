function arrayPlusArray(arr1, arr2) {
//   let arr1_result = for (i = 0; i < arr1.length; i++ {
//     return arr[i]
//   }
    let main_array = arr1.concat(arr2);
    return main_array.reduce((total, num) => {
        return total + num;
    }, 0)
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))