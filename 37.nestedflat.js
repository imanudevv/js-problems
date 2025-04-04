//program to flatten a nested array
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];

const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);