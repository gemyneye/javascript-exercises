const leapYears = function(year) {
    if (!Number.isInteger(year)) {
        return false;
    } else if ((year % 100 == 0) && (year % 400 !== 0)) {
        return false;
    } else if (year % 4 !== 0) {
        return false;
    } else {
        return true //`${year} is a leap year.`
    }
};

console.log(leapYears(2008));

// Do not edit below this line
module.exports = leapYears;
