const repeatString = function(str, mult) {
    if (mult < 0) return "ERROR";
    let string = "";
    for (let x = 0; x < mult; x++) {
        string += str;
    }
    return string.join('');
};

console.log(repeatString('This is a String. ', 5));

// Do not edit below this line
module.exports = repeatString;
