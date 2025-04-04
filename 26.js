arr=[1,2,3,4,5,6,7,8,9,10]

//filter //map //reduce

//arr of odd

var fil=arr.filter(num=>num%2!=0)
console.log(fil)


//array of numbers divisible by 2 or 5

var fill=arr.filter(num=>num%2==0 || num%5==0)
console.log(fill)

//array of numbers divisible by 3 and then square those numbers

var fil1=arr.filter(num=>num%3==0)
console.log(fil1)
var am=fil1.map(num=>num**2)
console.log(am)

//the sum of the following n square the numbers divisible by 5
let sum=arr.reduce(function(a,b){
    return a+b
},0)
console.log(sum)


//div by 5 and square
var dev=arr.filter(num=>num%5==0)
console.log(dev)
var ds=dev.map(num=>num**2)
console.log(ds)