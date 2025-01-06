import React from "react";
import Image from "next/image";
import Password from "@/components/password/password"

const SignUpPage = () => {
  return(
    <>
     <div className="leftBox   p-[32px_16px] h-screen flex flex-col items-center justify-center gap-[62px]">
      
      <Image src="/logo.svg" alt="logo" width={170} height={40} />

        <Password/>
      
      </div>

      <div className="rightBox  "> 

      <h1 className="text-[24px] font-medium text-center  text-white">Effortlessly Download Your Scraped Data</h1>

      <Image src="/loginslide02.webp" alt="logo" width={500}  height={40} style={{borderRadius:"4.5%" , marginTop:"5%"}}/>


      </div>

    </>
  );;
};

export default SignUpPage;
