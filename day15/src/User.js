import { useState,useEffect} from "react"
import React from 'react'

function User() {
  const[data,setData]=useState(null);
  useEffect(()=>{
    fetch("https://api.github.com/users")
    .then((response)=>response.json()).then((result)=> {
      setData(result)
    })
  },[])
  if (!data) return <div>Loading...</div>
  return (
    <div className="users"> 
      <div>
       { data.map((key) => (
       <div className="item">
         <div>
           <div>{key.login}<br></br> {key.url}</div>
           </div>
         
         <div>
         <div><img src={key.avatar_url} style={{'height':'50px','width':'40px'}}></img></div>
         </div>
         </div>
    
       ))}
       </div>
    </div>
  );
}

export default User