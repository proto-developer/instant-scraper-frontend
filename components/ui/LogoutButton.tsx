'use client';

import { useRouter } from 'next/navigation';
import {signOut} from "next-auth/react";

import Image from 'next/image';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    signOut({
      callbackUrl: "/login"
    });
    
  };

  return (
    <button
      id="logoutButton"
      type="button"
      onClick={handleLogout}
      className="flex items-center gap-[12px] p-[0px_2px] hover:bg-[#282829] rounded-full"
    >
      <Image src="/logout.png" alt="logo" width={20} height={20} className="w-5 md:w-5 lg:w-5"/>
      <p className="text-[16px] md:text-[14px] text-white">Log out</p>
    </button>
  );
};

export default LogoutButton;
