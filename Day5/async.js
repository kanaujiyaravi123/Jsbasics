
/*Write a function that fetches userDetails -> accountDetails -> deductAmount. 
No need to make an api cal use setTimeout to mock API cal's 
do this in 3 ways like how we discussed in the session  
3. using async-await */
const api = {
    '1234': {
        Details: {
            Amount: 5000
        }
    }
}

async function userDetails(Uid) {
    let userdetails = await api[Uid]
    console.log(userdetails)
    return userdetails
}
async function accountDetails(Aid) {
    let accountdetails = await Aid.Details;
    console.log(accountdetails)
    return accountdetails
}
async function deductAmount(Balance) {
    if (Balance.Amount > 500) {
        console.log("Amount Deducted")
        Balance.Amount = Balance.Amount - 500
    }
    else {
        console.log("Insufficient Balance")
    }

}
async function call() {
    let U = await userDetails('1234').catch(() => console.log('User not found'))
    let AC = await accountDetails(U).catch(() => console.log('Account not found'))
    let BAL = await deductAmount(AC).catch(() => console.log("Insufficient balance"))
}
call()
