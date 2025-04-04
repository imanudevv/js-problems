const accounts = [
    {
        acno: 1000,
        ac_type: 'savings',
        balance: 50000,
        transaction: [
            { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' },
            { to: 1002, amount: 2000, msg: 'emi', mode: "neft" },
            { to: 1003, amount: 1000, msg: 'recharge', mode: 'PhonePay' }
        ]
    },
    {
        acno: 1001,
        ac_type: 'current',
        balance: 150000,
        transaction: [
            { to: 1003, amount: 15000, msg: 'emi', mode: 'gpay' },
            { to: 1002, amount: 12000, msg: 'emi', mode: "neft" },
            { to: 1004, amount: 1000, msg: 'recharge', mode: 'PhonePay' }
        ]
    },
    {
        acno: 1003,
        ac_type: 'current',
        balance: 10000,
        transaction: [
            { to: 1005, amount: 200, msg: 'ebill', mode: 'gpay' },
            { to: 1009, amount: 1000, msg: 'emi', mode: "neft" },
            { to: 1007, amount: 3000, msg: 'Loan', mode: 'PhonePay' }
        ]
    },
    {
        acno: 1004,
        ac_type: 'fixed',
        balance: 1000000,
        transaction: []
    },
    {
        acno: 1005,
        ac_type: 'current',
        balance: 710000,
        transaction: [
            { to: 1003, amount: 20000, msg: 'emi', mode: 'upi' },
            { to: 1009, amount: 11000, msg: 'loan', mode: "neft" },
            { to: 1007, amount: 13000, msg: 'Car Loan', mode: 'PhonePay' }
        ]
    }
];

// Total number of accounts
console.log("Total number of accounts:", accounts.length);

// Print account details whose account type is savings
accounts.filter(data => data.ac_type == "savings").forEach(e => console.log(e));

// Print balance of account number 1003
console.log("Balance of account 1003:", accounts.find(data => data.acno == 1003).balance);

// Print all GPay transactions
console.log("GPay transactions:", accounts.map(data => data.transaction).flat().filter(t => t.mode == "gpay"));

// Print all transactions whose amount > 10000
console.log("Transactions with amount > 10000:", accounts.map(data => data.transaction).flat().filter(t => t.amount > 10000));

// Print debit transactions of account number 1000
const debitTransactions = accounts.find(d => d.acno == 1000)?.transaction || [];
console.log("Debit transactions of account 1000:", debitTransactions);

// Print transaction history of account number 1005
console.log("Transaction history of account 1005:", accounts.find(d => d.acno == 1005)?.transaction || []);
