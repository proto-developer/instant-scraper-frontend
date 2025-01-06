"use client";

import Image from "next/image";
import { useState } from "react";
import PlansMonthly from "./plansMonthly";
import PlansYearly from "./plansYearly";

const Subscription = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [selectedPackage, setIsActive] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isYearly, setIsYearly] = useState(false);



  return (
    <>
      <div className="w-[100%] h-full flex flex-col">
        
          <div className="w-[100%] m-[3%]">
            <Image
              src="/subscription.png"
              className="float-left mr-[1%]"
              alt="subscription_icon"
              width={35}
              height={10}
            />
            <h4 className="text-xl mt-[2]"> Subscription </h4>
          </div>

          <div className="roundButton min-w-[35%] flex flex-row flex-wrap ml-auto mr-auto p-[0.25%_0.25%] bg-[#2F3133] rounded-s-full rounded-e-full">
    <button className={`mr-2 w-[48%] p-[1.5%_10%] rounded-full ${isMonthly ? 'bg-white text-black' : 'bg-none text-white'}`} onClick={(e) => {e.preventDefault(); setSelectedOption("Monthly"); setIsMonthly(true); setIsYearly(false);}}>
        Monthly
    </button>
    <button className={`w-[48%] p-[1.5%_6%] rounded-full ${isYearly ? 'bg-white text-black' : 'bg-none text-white'}`}  onClick={(e) => {e.preventDefault(); setSelectedOption("Yearly"); setIsYearly(true); setIsMonthly(false); }}>
        Yearly -20% off
    </button>
</div>

    { (selectedOption=="Monthly" && <PlansMonthly/>)
    || (selectedOption=="Yearly" && <PlansYearly/>)
    }
    
        

      </div>
    </>
  );
};

export default Subscription;
