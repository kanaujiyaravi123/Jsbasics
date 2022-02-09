import {Header} from "./header"
import {getData} from "./data"
import {Transactionlist} from "./transactionlist"
import { Chart } from "./chart"
import  "./App.css"
import "./index.css"
import { useEffect, useState } from "react"
function App(){
  const [data,setData]=useState(null)
  useEffect(()=>{
    getData().then(resolve => {
      setData(resolve)
    })
  },[])
  if(!data) return <div>Loading...</div>
  return (
    <div > 
      <Header balance={data.balance}/>
      <div className="main"> 
      <Chart data={data.TransactionList} />
     <Transactionlist tran= {data.TransactionList}/>
     </div>
      </div>
  );
}
export default App;
