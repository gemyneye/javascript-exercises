function reverseString(str) {
    return str.split('')
    .reverse()
    .join('');
}
console.log(reverseString('string'));

// reverseString('String');
//const reverseString = function(str) {
//    return str.split('').reverse().join('');
//}

// Do not edit below this line
module.exports = reverseString;
