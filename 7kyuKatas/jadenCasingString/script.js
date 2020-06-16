// 7 kyu growth of a Population

// In a small town the population is p0 = 1000 at the beginning 
// of a year. The population regularly increases by 2 percent 
// per year and moreover 50 new inhabitants per year come to 
// live in the town. How many years does the town need to see 
// its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let percentages = percent * 0.01;
    let yearCounter = 0;
    let totalPopulation = p0;
    function nbYear(p0, percent, aug, p) {
        console.log(p0, percent, aug, p, totalPopulation)
        if(totalPopulation < p) {
            yearCounter++;
            return totalPopulation = p0 + (totalPopulation * percentages + aug)
        }
        if(totalPopulation > p) {
            return yearCounter;
        }
    }
    return nbYear(p0, percent, aug, p);
}

console.log(nbYear(1500, 5, 100, 5000))