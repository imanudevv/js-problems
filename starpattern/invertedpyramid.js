const n1 = 5;
let invertedPyramid = '';
for (let i = n1; i >= 1; i--) {
    let row = ' '.repeat(n1 - i) + '*'.repeat(2 * i - 1);
    invertedPyramid += row + '\n';
}
console.log(invertedPyramid);