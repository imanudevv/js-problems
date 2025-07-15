function printDiamond(n){
    //upper part of diamond (including middle row)
    for (let i = 1; i <= n; i += 2) {
        let spaces = ' '.repeat((n - i) / 2);
        let stars = '*'.repeat(i);
        console.log(spaces + stars + spaces);
    }
    //lower part of diamond
    for (let i = n - 2; i >= 1; i -= 2) {
        let spaces = ' '.repeat((n - i) / 2);
        let stars = '*'.repeat(i);
        console.log(spaces + stars + spaces);
    }
}

printDiamond(7);