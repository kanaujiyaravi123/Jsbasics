import {Header} from "./header"
import {getData} from "./data"
import {Transactionlist} from "./transactionlist"
import { Chart } from "./chart"
import  "./App.css"
import "./index.css"
import { useEffect, useState } from "react"
function App(){
  const [data,setData]=useState(null)
  const [userData,setUserData]=useState(data);
  
  function filterFun(str){
    if(str==="all")
    setUserData(data.TransactionList)
    else{
      const filterValue=data.TransactionList.filter((item)=>item.mode==str)
      setUserData(filterValue);
    }
  } 
   useEffect(()=>{
    getData().then(resolve => {
      setData(resolve)
    })
  },[])
  if(!data) return <div>Loading...</div>
  if(!userData) setUserData(data.TransactionList)
  
  return (
    <div > 
     
      <Header balance={data.balance}/>
      <div className="main"> 
      <div className="btn">
    <button onClick={()=>filterFun("CASH")}>CASH</button> 
     <button onClick={()=>filterFun("UPI")}>UPI</button>  
    <button onClick={()=>filterFun("all")}>ALL</button>
    </div>
      <Chart data={userData} />
     <Transactionlist tran= {userData}/>
     </div>
      </div>
  );
}
export default App;
