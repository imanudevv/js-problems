const n2 = 5;
let hollowPyramid = '';

for (let i = 1; i <= n2; i++) {
    let row = ' '.repeat(n2 - i); // Leading spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n2) {
            row += '*'; // Print '*' at the edges and the last row
        } else {
            row += ' '; // Print space in between
        }
    }
    hollowPyramid += row + '\n'; // Add the row to the pattern
}
console.log(hollowPyramid);