"use strict";

var inputArray = [11, 22, 33, 44, 55, 66];
var outputArray = [];
var sum = 0;
function mapFunction(inputArray) {
    for (var i in inputArray) {
        outputArray.push(inputArray[i] * inputArray[i]);
    }

    return outputArray;
}
function foreachFunction(inputArray) {
    for (var i in inputArray) {
        sum += inputArray[i];
        outputArray.push(inputArray[i] * inputArray[i]);
    }
}
console.log(mapFunction(inputArray));
console.log(foreachFunction(inputArray));