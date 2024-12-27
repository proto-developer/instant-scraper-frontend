"use client";
import Image from "next/image";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      id="logoutButton"
      type="button"
      onClick={() => {}}
      className="flex items-center gap-[12px] p-[12px_16px] hover:bg-gray-700 rounded-full"
    >
      <Image src="/logout.png" alt="logo" width={20} height={20} />
      <p className="text-[14px] text-white">Log out</p>
    </button>
  );
};

export default LogoutButton;
