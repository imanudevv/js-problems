// print the count of each item in array

arr=[10,20,20,30,30,40,40,50,50,50]

wrdcnt={}

for(let wrd of arr){
    if(wrd in wrdcnt){
        wrdcnt[wrd] += 1
    }
    else{
        wrdcnt[wrd] = 1
    }
}
console.log(wrdcnt)