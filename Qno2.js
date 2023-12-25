let number=7;
if(number==0||number==1){
    console.log(number+" is neither composite nor prime number");
}
else{
let result=checkNumber(number);
if(result==0){
    console.log(number+" is composite number" );
}
else{
    console.log(number+" is prime number" );
}
}

function checkNumber(number){
    for(let i=2;i<number/2;++i){

        if(number%i==0){
            return 0;
        }

    }
    
}