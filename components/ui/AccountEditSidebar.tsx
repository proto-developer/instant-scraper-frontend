"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileInformation from "./ProfileInformation";
import PasswordChange from "./PasswordChange";
import NotificationSetting from "./NotificationsSetting";
import { useState } from "react";

const AccountSettingSidebar = () => {
  const [selectedOption, setSelectedOption] = useState("Basics");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col md:flex-row text-white">
      {/* Sidebar */}
      <div className="w-full md:w-[35%]  md:h-full md:mr-0">
        {/* My Account Section */}
        <div className="py-4 text-center md:py-5 md:text-left">
          <div className="flex flex-row justify-self-center md:justify-self-stretch items-center mt-4 md:mt-0 md:items-start  md:ml-5">
            <Image
              src="/person.png"
              alt="person_icon"
              width={35}
              height={35}
              className=" mb-2 md:mr-[5%] md:mb-0"
            />
            <h4 className="text-[24px] md:text-xl ml-3 md:ml-0 mb-2 md:mt-1">My Account</h4>
          </div>
        </div>

        
        {/* Dropdown for Small Screens */}
        <div className="block md:hidden text-center">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#282829] text-white w-[95%]  text-[20px] mx-auto flex items-center justify-between p-3 rounded-md"
          >
            <span>{selectedOption}</span> {/* Show the selected option */}
            <span className="text-sm">&#x25BC;</span> {/* Dropdown arrow */}
          </button>
          {dropdownOpen && (
            <ul className="bg-[#1E1E1F] w-[90%] mx-auto mt-2 rounded-md text-[20px] text-[#6F767E]">
              {["Basics", "Account", "Notifications", "Payment"].map((option) => (
                <li
                  key={option}
                  className={`p-3 rounded-md ${
                    selectedOption === option
                      ? "bg-[#282829] text-white"
                      : "hover:bg-[#282829] hover:text-white"
                  }`}
                >
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedOption(option); // Update selected option
                      setDropdownOpen(false); // Close dropdown after selection
                    }}
                  >
                    {option}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>


        {/* Sidebar Menu for Medium and Larger Screens */}
        <div className="hidden md:flex md:ml-6 flex-col mt-6">
          <ul className="justify-middle text-[#6F767E]">
            {["Basics", "Account", "Notifications", "Payment"].map((option) => (
              <li
                key={option}
                className={`p-2 pl-5 w-full rounded-md ${
                  selectedOption === option
                    ? "bg-[#282829] text-white"
                    : "hover:bg-[#282829] hover:text-white"
                }`}
              >
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedOption(option);
                  }}
                >
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[75%] p-[0px_12px] md:py-11 md:px-8">
        {selectedOption === "Basics" && <ProfileInformation />}
        {selectedOption === "Account" && <PasswordChange />}
        {selectedOption === "Notifications" && <NotificationSetting />}
      </div>
    </div>
  );
};

export default AccountSettingSidebar;
