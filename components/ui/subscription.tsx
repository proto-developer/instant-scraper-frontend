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
      <div className="w-[100%] min-h-screen overflow-x-hidden  md:h-full flex flex-col">
        
          <div className="w-[100%] m-[6%] md:m-[3%]">
            <Image
              src="/subscription.png"
              className="float-left mr-[3%]  md:mr-[1%]"
              alt="subscription_icon"
              width={35}
              height={10}
            />
            <h4 className="text-[24px] md:text-xl ml-3 md:ml-0 mb-2 md:mt-1"> Subscription </h4>
          </div>

          <div className="roundButton w-[95%] sm:w-[95%] md:w-[65%] xl:w-[35%] flex flex-row flex-wrap ml-auto mr-auto p-[0.25%_0.25%] bg-[#2F3133] rounded-s-full rounded-e-full">
    <button className={`mr-2 w-[48%] text-[19px] md:text-[16px] p-[2%] md:p-[1.5%_10%] rounded-full ${isMonthly ? 'bg-white text-black' : 'bg-none text-white'}`} onClick={(e) => {e.preventDefault(); setSelectedOption("Monthly"); setIsMonthly(true); setIsYearly(false);}}>
        Monthly
    </button>
    <button className={`w-[49%] 2xl:w-[49%] p-[2%] text-[19px] md:font-normal md:text-[16px] md:p-[1.5%_6%] rounded-full ${isYearly ? 'bg-white text-black' : 'bg-none text-white'}`}  onClick={(e) => {e.preventDefault(); setSelectedOption("Yearly"); setIsYearly(true); setIsMonthly(false); }}>
        Yearly <span className="text-[16px]"> -20% off </span>
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
