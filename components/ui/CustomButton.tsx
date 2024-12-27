import React from "react";

interface ButtonProps {
  id?: string;
  label: string;
  type: "submit" | "reset" | "button";
  disabled: boolean;
  onClick: () => void;
}

const CustomButton = ({ id, label, type, onClick, disabled }: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`p-[12px_16px] rounded-full flex items-center justify-center sm:text-[16px] text-[14px] font-medium bg-primaryGradient`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
