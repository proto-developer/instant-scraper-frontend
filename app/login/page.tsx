import React from "react";
import Login from "@/components/login/Login"
import Image from "next/image";
import Crousel from "@/components/ui/carouel"

const LoginPage = () => {
  return(
    <>
     <div className="leftBox   p-[32px_16px] h-screen flex flex-col items-center justify-center gap-[62px]">
      
      <Image src="/logo.svg" alt="logo" width={170} height={40} />
      
      <Login/>
      
      </div>

      <div className="rightBox  "> 

      <h1 className="text-[24px] font-medium text-center  text-white">Unlock the Power of Effortless Web Data Collection</h1>

      {/* <Image src="/loginslide01.webp" alt="logo" width={450}  height={40} style={{borderRadius:"4.5%" , marginTop:"5%"}}/> */}

       <Crousel/> 


      </div>

    </>
  );;
};

export default LoginPage;
