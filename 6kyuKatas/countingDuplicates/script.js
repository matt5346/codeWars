function duplicateCount(str) {
    let arr = str.toLowerCase().split('')

    arr.sort()

    console.log(arr.sort())

    let resArr = []

    arr.filter((item, index, arr) => {
        // console.log(arr.indexOf(item) == index)

        for(let i = 0; i < arr.length; i++) {
            if(arr[index] === arr[i]) {
                if (index === i) {
                    return
                }
                resArr.push(arr[index])
            }
        }
    })
    var dups = {};
    resArr.filter((el, index) => {
        var hash = el.valueOf();
        var isDup = dups[hash];
        dups[hash] = true
        if(!isDup) {
            dups[el] = el
            console.log(el)
        }
    });
    console.log(dups)
    // uniq = [...new Set(resArr)];
    // return uniq

    // return resArr.filter((item, index) => {
    //     if(resArr.indexOf(item) == index) {
    //         return item
    //     } else {
    //         return
    //     }
    // }).length
}


console.log( duplicateCount('abcdefghijabcdeABCDABCabA') );