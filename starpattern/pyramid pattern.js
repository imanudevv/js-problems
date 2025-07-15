const n = 5;
let pyramid = '';

for (let i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
    pyramid += row + '\n';
}
console.log(pyramid);