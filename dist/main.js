"use strict";

var inputArray = [11, 22, 33, 44, 55, 66];
function mapfunction(inputArray) {
    var outputArray = [];
    for (var i in inputArray) {
        outputArray.push(inputArray[i] * inputArray[i]);
    }

    return outputArray;
}
console.log(mapfunction(inputArray));