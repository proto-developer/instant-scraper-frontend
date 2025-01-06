import Image from "next/image";
import React from "react";

const StartNewScrapBtn = () => {
  return (
    <button
      type="button"
      className="buttonHovered bg-primaryGradient p-[12px_16px] rounded-full flex items-center gap-[8px] justify-center"
    >
      <Image src="/add.svg" alt="logo" width={20} height={20} />
      <p className="text-[16px] font-medium text-white">Start New Scrape</p>
    </button>
  );
};

export default StartNewScrapBtn;
