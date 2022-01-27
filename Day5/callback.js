/*
Write a function that fetches userDetails -> accountDetails -> deductAmount. 
No need to make an api cal use setTimeout to mock API cal's 
do this in 3 ways like how we discussed in the session 
1. using callback
*/
function userDetails(U_id,cb) {
    setTimeout(()=>
    cb({
        name:"kush",accId:"1234"
    }),1000);
}
function accountDetails(accId,cb) {
    setTimeout(()=>
    cb({
        balance:1000
    }),2000);
}
function deductAmount(cb)
{
 
    setTimeout(()=>
    {
    cb("Success")    
    },3000);
}
function debit_amount(U_id,cb)
{
    userDetails(U_id,(user)=>
        {
            console.log(user)
            accountDetails(user.accId,(acc)=>
            {
                console.log(acc.balance)
                deductAmount((state)=>
                {
                    console.log(state)
                    cb(state);
                })
            })
        })

}
var User_Id = 1234
debit_amount(User_Id,(state)=>
{
    console.log("Debited 500")
})

