let inputArray= [11,22,33,44,55,66];
function mapfunction(inputArray){
    let outputArray=[];
    for (let i in inputArray){
        outputArray.push(inputArray[i]*inputArray[i]);}
        
    return outputArray
}
console.log(mapfunction(inputArray));