function createAccount(pin, amount = 0) {
    let myPin = pin;
    let myAmount = amount;
    return {
        checkBalance(pin) {
            if(pin === myPin){
                return `$${myAmount}`;
            } else {
                return "Invalid PIN.";
            }
        },
        deposit(pin, amount) {
            if(pin === myPin) {
                myAmount += amount;
                return `Successfully deposited $${amount}. Current balance: $${myAmount}.`
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw(pin, amount) {
            if(pin === myPin){
                if(myAmount >= amount){
                    myAmount -= amount;
                    return `Successfully withdrew $${amount}. Current balance: $${myAmount}.`
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
            } else {
                return "Invalid PIN.";
            }
        },
        changePin(oldPin, newPin) {
            if(oldPin === myPin){
                myPin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN."
            }
        }
    }
}

module.exports = { createAccount };
