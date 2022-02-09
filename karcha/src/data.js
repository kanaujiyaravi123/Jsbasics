 const data={
    balance:20000,
    TransactionList:[
      {
        id:1,
        timeStamp: Date.now(),
        TransactionType:'credit',
        mode:'UPI',
        category:'GROCERIES',
        amount:400

      },
      {
        id:2,
        timeStamp: Date.now(),
        TransactionType:'credit',
        mode:'UPI',
        category:'FRUITS',
        amount:500
      },
      {
        id:3,
        timeStamp: Date.now(),
        TransactionType:'credit',
        mode:'CASH',
        category:'PETROL',
        amount:20000
      },
      {
        id:4,
        timeStamp: Date.now(),
        TransactionType:'credit',
        mode:'UPI',
        category:'RENT',
        amount:1000
      }
    ]
  }
  export function getData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(data)
      },1000)
    })
  }