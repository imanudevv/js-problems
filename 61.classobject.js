class bank{

    createaccount (id, accno, name, amount){
        this.id = id,
        this.accno = accno,
        this.name = name,
        this.amount = amount
        console.log(`hi ${this.name} your account with account number ${this.accno} created succesfully`)
    }
    deposit(amount){
        this.amount += amount
        console.log(`amount ${amount} is credited in your account ${this.accno}
            successfully,your current account balance is ${this.amount}`)
    }
    withdrawel (amount){
        if (amount > this.amount)
            console.log(`transaction error`)
        else
        (this.amount -= amount)

        console.log(`amount ${amount} is debited from your accout,
            your current account balance is ${this.amount}`)

    }
    balance (){
        console.log(`your current account balance is ${this.amount}`)
    }
}
 bankdata = new bank()
 bankdata.createaccount(167777, 1623745, "Rahul", 1000)
 bankdata.deposit(5000)
 bankdata.withdrawel(55000)
 bankdata.balance()