"use client"
import { useState } from 'react';

const PlansYearly = () => {

  type Plan = 'basic' | 'standard' | 'premium' | 'enterprise';

  interface PlanDetails {
    basic: boolean;
    standard: boolean;
    premium: boolean;
    enterprise: boolean;
  }

    const [isDetailsVisible, setIsDetailsVisible] = useState<PlanDetails>({
  basic: false,
  standard: false,
  premium: false,
  enterprise: false,
});

const toggleDetails = (plan: Plan) => {
  setIsDetailsVisible((prevState) => ({
    ...prevState,
    [plan]: !prevState[plan], // Now TypeScript knows `plan` is one of the keys of `PlanDetails`
  }));
};

    return(

    <div className="cards  w-[95%] grid gap-1 md:gap-5 
  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ml-auto mr-auto mt-[3%] min-h-[75%] lg:min-h-[75%] xl:min-h-[60%]  md:bg-[#0D0C0C] rounded-lg">

<div className="card subscriptionPackages w-full  h-auto md:h-auto flex flex-col rounded-2xl group cursor-pointer md:cursor-default"  onClick={() => toggleDetails("basic")}>
  {/* Main Content */}
  <div className="content mt-2 p-2 md:p-0 md:mt-5 ml-4 relative">
    <h3 className="md:font-semibold">Basic Plan</h3>
    <div className="price flex flex-row">
      <h1 className="text-[40px] md:text-[35px] font-bold">$0</h1>
      <p className="text-[12px] md:text-[10px] text-[#868C92] ml-2 mt-3.5 leading-normal">
        Per month <br /> billed monthly
      </p>
    </div>

    {/* Dropdown Arrow for Small Screens */}
    <div
      className="dropdown absolute right-5 top-[50%] translate-y-[-50%] cursor-pointer md:hidden"
      
    >
      <svg
        className={`w-7 h-7 text-[#fff] transform transition-transform duration-300 ${
          isDetailsVisible.basic ? 'rotate-180' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

  {/* Details Section */}
  <div
    className={`details md:text-[12px] flex-col ml-7 mb-5 md:mb-0 md:ml-5 md:mt-2 md:block ${
        isDetailsVisible.basic ? 'flex' : 'hidden'
    }`}
  >
    <ul className="max-w-md space-y-1 list-inside ">
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        100 Credits per Month
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        100 Entries limit per scrape
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Export Data in Excel Format
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Email Support
      </li>
    </ul>
  </div>

  {/* Button */}
  <button
    className={`bg-[#4E4E4E33] text-md h-fit rounded-lg mr-auto ml-auto mt-auto mb-5 w-[70%] md:w-[80%] p-[8_0] md:p-[4_0] md:block ${
        isDetailsVisible.basic ? 'block' : 'hidden'
    }`}
  >
    Current Plan
  </button>
</div>


    <div className="card subscriptionPackages w-[full]  h-[full] md:h-auto flex flex-col rounded-2xl group cursor-pointer md:cursor-default" onClick={() => toggleDetails("standard")}>
  {/* Main Content */}
  <div className="content mt-2 p-2 md:p-0 md:mt-5 ml-4 relative">
    <h3 className="md:font-semibold">Standard Plan</h3>
    <div className="price flex flex-row">
      <h1 className="text-[40px] md:text-[35px] font-bold">$20</h1>
      <p className="text-[12px] md:text-[10px] text-[#868C92] ml-2 mt-3.5 leading-normal">
        Per month <br /> billed monthly
      </p>
    </div>

    {/* Dropdown Arrow for Small Screens */}
    <div
      className="dropdown absolute right-5 top-[50%] translate-y-[-50%] md:hidden"
      
    >
      <svg
        className={`w-7 h-7 text-[#fff] transform transition-transform duration-300 ${
          isDetailsVisible.standard ? 'rotate-180' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

  {/* Details Section */}
  <div
    className={`details md:text-[12px] flex-col ml-7 mb-5 md:mb-0 md:ml-5 md:mt-2 md:block ${
      isDetailsVisible.standard ? 'flex' : 'hidden'
    }`}
  >
    <ul className="max-w-md space-y-1 list-inside ">
      <li className="flex items-center  text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1  text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        3000 Credits per Month
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        500 Entries limit per scrape
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        24/7 Support
      </li>
    </ul>
  </div>

  {/* Button */}
  <button
    className={`bg-[#4E4E4E33] text-md h-fit rounded-lg mr-auto ml-auto mt-auto mb-5 w-[70%] md:w-[80%] p-[8_0] md:p-[4_0] md:block ${
      isDetailsVisible.standard ? 'block' : 'hidden'
    }`}
  >
    Choose Plan
  </button>
</div>


<div className="card subscriptionPackages w-[full]  h-[full] md:h-auto flex flex-col rounded-2xl group cursor-pointer md:cursor-default" onClick={() => toggleDetails("premium")}>
  {/* Main Content */}
  <div className="content mt-2 p-2 md:p-0 md:mt-5 ml-4 relative">
    <h3 className="md:font-semibold">Pro Plan</h3>
    <div className="price flex flex-row">
      <h1 className="text-[40px] md:text-[35px] font-bold">$60</h1>
      <p className="text-[12px] md:text-[10px] text-[#868C92] ml-2 mt-3.5 leading-normal">
        Per month <br /> billed monthly
      </p>
    </div>

    {/* Dropdown Arrow for Small Screens */}
    <div
      className="dropdown absolute right-5 top-[50%] translate-y-[-50%] cursor-pointer md:hidden"
      
    >
      <svg
        className={`w-7 h-7 text-[#fff] transform transition-transform duration-300 ${
          isDetailsVisible.premium ? 'rotate-180' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

  {/* Details Section */}
  <div
    className={`details md:text-[12px] flex-col ml-7 mb-5 md:mb-0 md:ml-5 md:mt-2 md:block ${
      isDetailsVisible.premium ? 'flex' : 'hidden'
    }`}
  >
    <ul className="max-w-md space-y-1 list-inside ">
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        5000 Credits per Month
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        1000 Entries limit per scrape
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        24/7 Support
      </li>
    </ul>
  </div>

  {/* Button */}
  <button
    className={`bg-[#4E4E4E33] text-md h-fit rounded-lg mr-auto ml-auto mt-auto mb-5 w-[70%] md:w-[80%] p-[8_0] md:p-[4_0] md:block ${
      isDetailsVisible.premium ? 'block' : 'hidden'
    }`}
  >
    Choose Plan
  </button>
</div>


<div className="card subscriptionPackages w-[full]  h-[full] md:h-auto cursor-pointer md:cursor-default flex flex-col rounded-2xl group"  onClick={() => toggleDetails("enterprise")}>
  {/* Main Content */}
  <div className="content mt-2 p-2 md:p-0 md:mt-5 ml-4 relative">
    <h3 className="md:font-semibold ">Enterprise Plan</h3>
    <div className="price flex flex-row">
      <h1 className="text-[40px] md:text-[35px] font-bold">Custom</h1>
      
    </div>

    {/* Dropdown Arrow for Small Screens */}
    <div
      className="dropdown absolute right-5 top-[50%] translate-y-[-50%]  md:hidden"
     
    >
      <svg
        className={`w-7 h-7 text-[#fff] transform transition-transform duration-300 ${
          isDetailsVisible.enterprise ? 'rotate-180' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

  {/* Details Section */}
  <div
    className={`details md:text-[12px] flex-col ml-7 mb-5 md:mb-0 md:ml-5 md:mt-2 md:block ${
      isDetailsVisible.enterprise ? 'flex' : 'hidden'
    }`}
  >
    <ul className="max-w-md space-y-1 list-inside ">
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Unlimited Monthly Credits
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Custom Entries Per Scrape
      </li>
      <li className="flex items-center text-[#D2D7D9] group-hover:text-white">
        <svg
          className="w-3 h-3.5 me-1 text-[#fff] md:text-[#575757] dark:text-grey-400 flex-shrink-0 group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Dedicated Priority Support
      </li>
    </ul>
  </div>

  {/* Button */}
  <button
    className={`bg-[#4E4E4E33] text-md h-fit rounded-lg mr-auto ml-auto mt-auto mb-5 w-[70%] md:w-[80%] p-[8_0] md:p-[4_0] md:block ${
      isDetailsVisible.enterprise ? 'block' : 'hidden'
    }`}
  >
    Contact Support
  </button>
</div>



        </div>

)

}

export default PlansYearly