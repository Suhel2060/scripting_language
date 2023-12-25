let binaryNumber=11110;
// let binaryNumber=prompt("ENter binary number");
let decimalNumber=convertDecimal(binaryNumber);
console.log("The decimal number for "+binaryNumber+" is "+decimalNumber);

function convertDecimal(binaryNumber){
    let remainder=0;
    let decimalNumber=0;
    let value=0;
    let count=0;
    while(binaryNumber>0){
        remainder=binaryNumber%10;
        if(remainder==0){
            count++;
            binaryNumber=Math.floor(binaryNumber/10);
            continue;
        }
        binaryNumber=Math.floor(binaryNumber/10);
        value=remainder*(2**count);
        decimalNumber=value+decimalNumber;
        count++;
    }
    return decimalNumber;
}
