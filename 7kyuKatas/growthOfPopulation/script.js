// 7 kyu growth of a Population

// In a small town the population is p0 = 1000 at the beginning 
// of a year. The population regularly increases by 2 percent 
// per year and moreover 50 new inhabitants per year come to 
// live in the town. How many years does the town need to see 
// its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let percentages = percent * 0.01;
    let yearCounter = 0;
    for(let i = 0; p0 < p; i++) {
        yearCounter++;
        let yearGrowth = p0 * percentages + aug;
        p0 += yearGrowth;
    }
    return yearCounter;
}
console.log(nbYear(1500, 5, 100, 5000))