
export function Transactionlist ({tran}){

    return(
    <>
    <table className="table">
       <thead>
       <tr>
       <th>Id</th>
       <th>Transaction Type</th>
       <th>Mode</th>
       <th>Category</th>
       <th>Amount</th>
       </tr>
       </thead>
       <tbody>
           {tran.map(entry => (
               <tr>
                   <td>{entry.id}</td>
                   <td>{entry.TransactionType}</td>
                   <td>{entry.mode}</td>
                   <td>{entry.category}</td>
                   <td>{entry.amount}</td>
               </tr>
            ) )}
       </tbody>
    </table>
    </>)
}