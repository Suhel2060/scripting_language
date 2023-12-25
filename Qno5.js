// let decimalNumber=prompt("Enter a decimal number");
// if(decimalNumber==null||decimalNumber==""){
//     alert("the number is not given")
// }
// else{
let decimalNumber=30
let binaryNumber=convertBinary(decimalNumber);
console.log("The binary number for "+decimalNumber+" is "+binaryNumber);
console.log(decimalNumber.toString(2));

function convertBinary(decimalNumber){
    let reverseBinary=0;
    let remainder=0;
    let binaryNumber=0
    let count=0;
    while(decimalNumber>0){
        remainder=decimalNumber%2;
        decimalNumber=Math.floor(decimalNumber/2);
        reverseBinary=reverseBinary*10+remainder;
        count++;
    }
    // let reverseBinary=binaryNumber.toString();
    // let binary=reverseBinary.re
    while(count>0){
        remainder=reverseBinary%10;
        reverseBinary=Math.floor(reverseBinary/10);
        binaryNumber=binaryNumber*10+remainder;
        count--;
    }
    return binaryNumber;
}