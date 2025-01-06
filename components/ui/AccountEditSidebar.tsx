"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileInformation from "./ProfileInformation";
import PasswordChange from "./PasswordChange";
import NotificationSetting from "./NotificationsSetting";
import { useState } from "react";

const AccountSettingSidebar = () => {
  const [selectedOption, setSelectedOption] = useState("Basics");

  return (
    <>
      <div className="w-[100%] h-full flex flex-row">
        {/* Sidebar */}
        <div className="w-[25%] h-full mr-10 flex flex-col text-white">
          <div className="w-[100%] align-middle justify-center m-[10%]">
            <Image
              src="/person.png"
              className="float-left mr-[5%]"
              alt="person_icon"
              width={35}
              height={10}
            />
            <h4 className="text-xl mt-[2]"> My Account </h4>
          </div>

          <div className="title w-[90%] h-[30%] m-[10%] ml-[22%]">
            <ul className="justify-middle text-[#6F767E]">
              {["Basics", "Account", "Notifications", "Payment"].map(
                (option) => (
                  <li
                    key={option}
                    className={`p-2 pl-5 w-[100%] rounded-md ${
                      selectedOption === option
                        ? "bg-[#282829] text-[#fff]" // Active styles
                        : "hover:bg-[#282829] hover:text-[#fff]" // Hover styles
                    }`}
                  >
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default navigation
                        setSelectedOption(option);
                      }}
                    >
                      {option}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Content Bar */}
        <div className="contentBar w-[75%] p-10 flex flex-col text-white">
          {selectedOption === "Basics" && <ProfileInformation />}
          {selectedOption === "Account" && <PasswordChange />}
          {selectedOption === "Notifications" && <NotificationSetting />}
        </div>
      </div>
    </>
  );
};

export default AccountSettingSidebar;
