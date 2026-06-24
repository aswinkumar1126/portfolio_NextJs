"use client"

import React,{useEffect, useState} from "react";
import TopHeader from "./header/content/TopHeader";
import MainHeader from "./header/content/MainHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const headerStyle = isScrolled ? "top-1" : "top-11";

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <div>
      <div className="bg-black">
        <TopHeader />
      </div>
     
      <div className={`fixed w-full z-50 transition-all duration-300 ease-in-out transform ${headerStyle}`}>
        <MainHeader />
      </div>
     
      <main>{children}</main>
    </div>
  );
};
export default Layout;