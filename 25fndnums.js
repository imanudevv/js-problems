//print even numbers b/w 1 to 50

for (i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

//print  sum of natural numbers

let sum=0;
for (i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

//print reverse of numbers from 50 to 1

rvrs=[]

for(let i=50;i>0;i--){
    rvrs.push(i)
}
console.log(rvrs)