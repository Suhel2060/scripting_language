let num1=20;
let num2=30;
let num3=2;
let num4=55;
let smallestNumber=checkSmallest(num1,num2,num3,num4);
console.log("The samllest number is "+smallestNumber);

function checkSmallest(num1,num2,num3,num4){
    if(num1<=num2&&num1<=num3&&num1<=num4){
        return num1;
    }
    else if(num2<=num1&&num2<=num3&&num2<=num4){
        return num2;
    }
    else if(num3<=num2&&num3<=num1&&num3<=num4){
        return num3;
    }
    else{
        return num4;
    }
}