//function to takes in array of numbers and multiplays each of the elements by 2:(map)

function Myfunc(numbers){
    return numbers.map((number) => number * 2);
}
console.log(Myfunc([1, 2, 3]));