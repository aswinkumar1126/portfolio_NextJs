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

  useEffect(()=>{
    fetch('/api/skill').then((res)=> res.json()).then((data)=>{

      console.log(data, 'skill data');
    })
  },[]);
  console.log(data,'data');
  const skill = fetch("/api/skill",{headers : {"Content-Type": "application/json"} , method : 'POST' ,body : null })

  return (
    <div>
      
      Hello
      {data.map((user:any)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
       {data.map((user:any)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
       {data.map((user:any)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
       {data.map((user:any)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
       {data.map((user:any)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      {data.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))
      }
      
    </div>
  );
}
