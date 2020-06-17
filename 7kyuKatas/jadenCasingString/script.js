
// 7 kyu Complementary DNA solution
// Deoxyribonucleic acid (DNA) is a chemical 
// found in the nucleus of cells and carries 
// the "instructions" for the development and 
// functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are 
// complements of each other, as "C" and "G". 
// You have function with one side of the DNA 
// (string, except for Haskell); you need to 
// get the other complementary side. DNA strand 
// is never empty or there is no DNA at all 
// (again, except for Haskell).

function DNAStrand(dna){
    let new_arr = dna.split('');
    return new_arr.map(char => {
        if(char == 'A') {
            return 'T';
        }
        if(char == 'T') {
            return 'A';
        }
        if(char == 'G') {
            return 'C';
        }
        if(char == 'C') {
            return 'G';
        }
    }).join('')
}

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))