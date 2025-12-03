const removeFromArray = (arr, ...args) => arr.filter(x => !args.includes(x));
    // for (const arg of args) {
    //     //console.log(arg);
    //     let i = 0;
    //     while (i < arr.length){
    //         if (arr[i] === arg){
    //             arr.splice(i,1,);
    //         } else {
    //         i++;
    //         }
    //     }
    // }
    // return arr;
    // const myNewArr = arr.filter(x => !args.includes(x));
    // return myNewArr;

let myArr = [1, 5, 2, 3, 4, 5, 5, 7, 5];
console.log(removeFromArray(myArr, 7, 3, 5));


// Do not edit below this line
module.exports = removeFromArray;
