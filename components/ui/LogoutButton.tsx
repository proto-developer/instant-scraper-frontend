'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing session or tokens)

    // Redirect to the login page
    router.push('/login');
  };

  return (
    <button
      id="logoutButton"
      type="button"
      onClick={handleLogout}
      className="flex items-center gap-[12px] p-[12px_16px] hover:bg-[#282829] rounded-full"
    >
      <Image src="/logout.png" alt="logo" width={20} height={20} />
      <p className="text-[14px] text-white">Log out</p>
    </button>
  );
};

export default LogoutButton;
