// const reverseString = function(str) {
//     let breakDown = str.split('');
//     let result = '';
//     for (let i = breakDown.length - 1; i >= 0; i--){
//         console.log(breakDown[i]);
//         result += breakDown[i];
//     }
//     console.log(breakDown.length);
//     console.log(breakDown);
//     console.log(result);
// };

// reverseString('String');
const reverseString = function(str) {
    return str.split('').reverse().join('');
}

// console.log(reverseString("String"));
// Do not edit below this line
module.exports = reverseString;
