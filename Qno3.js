let num1=20;
let num2=39;
let num3=2;

let largestNum=checkLargest(num1,num2,num3);
console.log("The largest number is "+largestNum);

function checkLargest(num1,num2,num3){
    if(num1>=num2&&num1>=num3){
        return num1;
    }
    else if(num2>=num1&&num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}