let BankAccount = {
    accountNumber: '',
    balance: 100,
    maxAmount: 9000,

    deposit:function(amount) {
        this.balance += Number(amount);   
    },

    withdraw: function (amount) {
        let insufficient;
        if (parseInt(amount) <= this.balance - 10) {
            this.balance = this.balance - Number(amount);
            insufficient = "you have successfully withdrew " + amount  +"Your current balance is ETB " +  this.balance;
        }
        else if(amount > this.maxAmount){
           insufficient = "Can't withdraw: maximum withdrawal amouunt exceeded."
        }
        else {
            insufficient = "you can not withdraw " + amount + " birr your balance is insufficient";
        }
        return insufficient;
    },

    getBalance: function() {
        return this.balance;
    },




}

let service;
let  deposit_amount;
let  withdraw_amount;

(function() {
    BankAccount.accountNumber = prompt("Enter your account number: ")
    let contin = 'yes';

    while (contin == 'yes') {
        service = prompt("Which of the following services would you like \n" +
                "1. Deposit \n" +
                "2. Withdraw \n" +
                "3. Get balance \n" +
                "4. Transfer \n");

        if (service == 1) {
            deposit_amount = prompt("Enter amount to deposit: ");
            BankAccount.deposit(deposit_amount);
            console.log("Your account " + BankAccount.accountNumber + " has been credited with ETB " + deposit_amount + ". \n" +
                        "Your current balance is ETB " + BankAccount.getBalance());
        }

        else if (service == 2) {
            withdraw_amount = prompt("Enter amount to withdraw: ");
            console.log(BankAccount.withdraw(withdraw_amount));
        }

       else  if (service == 3) {
            console.log("Your current balance is ETB " + BankAccount.getBalance());
        }
        contin = prompt("Would you like to continue? (yes/no)");
    
}
})();

