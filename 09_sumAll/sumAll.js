//Start must be smaller than end so sort needed
//Add 1 to start until reaches end
//Add each one sequentially

function addEmUp(smallNumber, bigNumber) {
    //console.log(smallNumber, bigNumber);
    let start = smallNumber;
    //console.log(start);
        while (smallNumber < bigNumber) {
        smallNumber += 1;
        start = smallNumber + start;
        //console.log(smallNumber);
    }
    return start;
}
const sumAll = function(start, end) {
    if (start > end) {
        let smallNumber = end;
        console.log(end);
        let bigNumber = start;
        console.log(start);
        return addEmUp(smallNumber, bigNumber);
    } else if (start < 0 || end < 0) {
        return 'ERROR';
    } else if ((typeof start !== "number") || (typeof end !== "number")) {
        return "ERROR";
    } else if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    } else {
        return addEmUp(start, end);
    }   
} 


console.log(sumAll(10, 5));

    
//console.log(addEmUp(10,50));

// Do not edit below this line
module.exports = sumAll;
