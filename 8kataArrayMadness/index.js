function arrayMadness(a, b) {
    let resultOf_a = 0;
    let resultOf_b = 0;
    for(i = 0; i < a.length; i++){
        resultOf_a = a[i] * a[i] + resultOf_a;
    }
    for(i = 0; i < b.length; i++){
        resultOf_b = b[i] * b[i] * b[i] + resultOf_b;
    }
    // console.log(resultOf_a);
    // console.log(resultOf_b);
    if(resultOf_a > resultOf_b) {
        return true;
    } else {
        return false;
    }
}

console.log(arrayMadness([4,5,6],[1,2,3]));