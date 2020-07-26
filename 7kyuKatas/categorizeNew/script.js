// 7 kyu Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, 
// Senior and Open. They would like your help with an application form 
// that will tell prospective members which category they will be placed.

function openOrSenior(data){
    let resultArr = []
    data.forEach(item => {
        if(item[0] >= 55 && item[1] > 7) {
            resultArr.push('Senior')
        } else {
            resultArr.push('Open')
        }
    })
    return resultArr
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))