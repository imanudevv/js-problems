//print fibinocci serires

function fib(n){
    let num1=0;
    let num2=1;
    result="";

    for(let i=0;i<=n;i++){
        result+=num1+" ";
        let sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    console.log(result)
}
fib(10);