aar1 = [10,11,12,20,30]
aar2 = [11,20,21,30,31]

counter =0
for (let i of aar1){
    for (let j of aar2){
        if (i == j){
            console.log(`common elements are ${i},${j}`)
            counter++
        }
    }
}
console.log("total iteration:",counter)