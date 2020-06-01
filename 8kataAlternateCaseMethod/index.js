// 8 kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe solution
// Define String.prototype.toAlternatingCase 
// (or a similar function/method such as 
// to_alternating_case/toAlternatingCase/ToAlternatingCase 
// in your selected language; see the initial solution 
// for details) such that each lowercase letter becomes
// uppercase and each uppercase letter becomes lowercase. 


String.prototype.toAlternatingCase = function () {
    return this.split('')
        .map(function(char) {
            if(char == char.toUpperCase()) {
                return char.toLowerCase();
            }
            if(char == char.toLowerCase()) {
                return char.toUpperCase();
            }
            return char;
        })
        .join('')
}

console.log("hello world".toAlternatingCase())