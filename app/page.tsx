"use client"
import { useEffect, useState } from "react";
import Layout from "@/src/frontend/user/component/layout/Layout"

export default  function Home() {
  const [data,setData] =useState([]);

  useEffect(()=>{
    fetch('/api/home').then((res)=> res.json()).then((data)=>{
    
      setData(data?.users);
    })
  },[]);
  console.log(data,'data');


  return (
    <div>
      <Layout />
      Hello
      {data.map((user:any)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
    </div>
  );
}
