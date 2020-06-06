// You only need one - Beginner
// Description:
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  for(i = 0; i <= a.length; i++) {
      if(a[i] == x) {
          return true;
      }
      if(i == a.length && a[i] !== x) {
          return false;
      }
  }
}

console.log(check(['t', 'e', 's', 't'], 'e'))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))