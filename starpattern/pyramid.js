const n = 5;
let pyramid = '';

for (let i = 1; i <= n; i++) {
    // Add leading spaces
    let spaces = ' '.repeat(n - i);
    // Add stars
    let stars = '*'.repeat(2 * i - 1);
    // Combine and add to pyramid
    pyramid += spaces + stars + '\n';
}
// Remove trailing newline and print
console.log(pyramid.trim());
