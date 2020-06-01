// 8 kata Sum of positive Solution
// Description:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let counter = 0;
    for(i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        counter += arr[i];
      } else if (arr.length == 0) {
        return 0;
      }
    }
    return counter;
}

console.log(positiveSum([-3]));