// 8kyu Is the string uppercase? Solution 
// Description:
// Is the string uppercase?
// Task
// Add the isUpperCase method to String 
// to see whether the string is ALL CAPS. For example:

String.prototype.isUpperCase = function() {
    let result = this.split(' ').join('').split(' ')
        .map(function(char){
            if(char !== char.toUpperCase()) {
                return false;
            } else if(!char) {
                return false;
            } else {
                return true;
            }
        }).toString()
    return JSON.parse(result);

    // return this==this.toUpperCase()
    // |||| short solution
}

console.log('hello I AM DONALD'.isUpperCase());