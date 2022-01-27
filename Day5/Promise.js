/*Write a function that fetches userDetails -> accountDetails -> deductAmount. 
No need to make an api cal use setTimeout to mock API cal's 
do this in 3 ways like how we discussed in the session  
3. using promises */
const api = {
    '1245': {
        U_Deatil: {
            U_amount: 5000
        }
    }
}
function getUserdetail(uid) {
    let dummy = {};
    return new Promise((resolve, reject) => resolve(dummy = api[uid]))
}
function Acc_details(par) {
    let dummy2 = {};
    return new Promise((resolve, reject) => resolve(dummy2 = par.U_Deatil))
}
function Deduct(paisa) {
    if (paisa.U_amount > 500) {
        console.log("amount deducted");
    }
    else {
        console.log("need more money");
    }
}
getUserdetail("1245").then((d1) => Acc_details(d1).then((d2) => Deduct(d2))).catch(() => console.log("error"));