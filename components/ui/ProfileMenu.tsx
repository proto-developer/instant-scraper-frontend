import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "@/components/ui/LogoutButton";

export default function ProfileMenu() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      {/* Profile Photo */}
      <button
        className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-white shadow-md"
        onClick={toggleMenu}
      >
        <img
          src="/Avatar.png" // Replace with your profile image path
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-5 md:right-0 mt-1 md:mt-2 w-56 bg-[#000] shadow-lg rounded-md z-50">
          <div className="p-2">
            <Link
              href={`/my-account`}
              className="flex items-center gap-[12px] p-[12px_16px] hover:bg-[#282829] rounded-md"
            >
              <Image
                src="/person.png"
                alt="My Account"
                width={20}
                height={20}
                className="w-6 md:w-5 lg:w-6"
              />
              <p className="text-[16px] md:text-[14px] text-white">My Account</p>
            </Link>

            <Link
              href={`/subscription-plan`}
              className="flex items-center gap-[12px] p-[12px_16px] hover:bg-[#282829] rounded-md"
            >
              <Image
                src="/subscription.png"
                alt="Subscription"
                width={20}
                height={20}
                className="w-6 md:w-5 lg:w-6"
              />
              <p className="text-[16px] md:text-[14px] text-white">Subscription</p>
            </Link>

            <div className="flex items-center gap-[12px] p-[12px_16px] hover:bg-[#282829] rounded-md cursor-pointer">
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
