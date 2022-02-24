let inputArray= [11,22,33,44,55,66];
let outputArray=[];
let sum=0;
function mapFunction(inputArray){
    for (let i in inputArray){
        outputArray.push(inputArray[i]*inputArray[i]);}
        
    return outputArray
}
function foreachFunction(inputArray){
    for (let i in inputArray){
        sum+=inputArray[i];
        
            }
        return sum;
}


// console.log(mapFunction(inputArray));
console.log(foreachFunction(inputArray));

