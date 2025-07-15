const n2 = 5;
let invertedhollowPyramid = '';

for (let i = n2; i >= 1; i--) {
    let row = ' '.repeat(n2 - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n2) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    invertedhollowPyramid += row + '\n';
}
console.log(invertedhollowPyramid);
