const moment = require("moment");

class Account {
    #amount;
    #accountID;

    constructor(name, amount, accountID, currency = "usd") {
        this.name = name;
        this.#amount = amount;
        this.#accountID = accountID;
        this.currency = currency;
    }

    showBalance() {
        console.log(`your estimated balance is:`, this.#amount);
        return this.#amount;
    }

    withdraw(a) {
        if (this.#amount > a) {
            this.#amount -= a;
            console.log(
                `Withdrawn balance is ${a} and remaining balance is: ${
                    this.#amount
                } ${this.currency}`
            );
        } else {
            console.log(
                `You have insufficient balance: ${this.#amount} ${
                    this.currency
                }`
            );
        }
    }

    makeDeposit(b) {
        this.#amount += b;
        console.log(
            `${b} has been deposited into your account. Balance after deposit is: ${
                this.#amount
            } ${this.currency}`
        );
    }

    giveMeDetails() {
        console.log(
            `Hi. ${this.name} your account balance is: ${this.#amount} ${
                this.currency
            }`
        );
        console.log(`Your account`, this.#accountID);
    }

    static showClassDetails() {
        console.log("This class serves to create multiple accounts!");
    }

    static showTime() {
        console.log(`Current time is ${moment().format("YY MM DD HH:mm:ss")}`);
    }
}

module.exports = Account;