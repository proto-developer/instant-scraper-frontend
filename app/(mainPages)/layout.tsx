"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";
import ProfileMenu from "@/components/ui/ProfileMenu";

const RecenetRequestsData = [
  {
    requestId: "1",
    requestTitle: "Find me the best laptops in the world today",
  },
  {
    requestId: "2",
    requestTitle: "Find me the best laptops in the world today",
  },
  {
    requestId: "3",
    requestTitle: "Find me the best laptops in the world today",
  },
  {
    requestId: "4",
    requestTitle: "Find me the best laptops in the world today",
  },
  {
    requestId: "5",
    requestTitle: "Find me the best laptops in the world today",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => {
      const newState = !prevState;
      console.log("Sidebar is open:", newState); // Log the updated state
      return newState;
    });
  };

  return (
    <>
      <div className="h-full flex items-center bg-[#1C1C1E] md:bg-black text-white">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } fixed inset-0 bg-black bg-opacity-75 z-50 sm:block sm:static md:mt-0`}
        >
          <Sidebar.Root>
            {/* Logo visible in the sidebar on medium and larger screens */}
            <div className="hidden sm:block">
              <Link href={"/"}>
                <Image src="/logo.svg" alt="logo" width={170} height={40} />
              </Link>
            </div>

            <Sidebar.RecentRequestsContainer>
              {RecenetRequestsData.map((request) => (
                <Sidebar.RecentRequestCard
                  key={request.requestId}
                  requestId={request.requestId}
                  requestTitle={request.requestTitle}
                />
              ))}
            </Sidebar.RecentRequestsContainer>
            <Sidebar.SidebarFooter />

            {/* Close Button (Cross icon) inside the Sidebar, visible only on small screens */}
            <button
              onClick={toggleSidebar}
              className={`absolute top-10 left-7 text-white sm:hidden`}
            >
              <div className="w-7 h-7 flex justify-center items-center">
                <div className="w-7 h-[3px] bg-[#6F767E] absolute rotate-45"></div>
                <div className="w-7 h-[3px] bg-[#6F767E] absolute -rotate-45"></div>
              </div>
            </button>
          </Sidebar.Root>
        </div>

        {/* Header/Nav: Contains the logo, hamburger, and profile menu */}
        <div className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center bg-[#1C1C1E] py-5 px-5 sm:hidden">
          {/* Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="z-50 relative flex items-center justify-center"
          >
            {isSidebarOpen ? (
              // Hide hamburger icon when sidebar is open
              <div />
            ) : (
              // Hamburger icon when sidebar is closed
              <div>
                <div className="w-7 h-1 bg-[#6F767E] my-1 mb-2"></div>
                <div className="w-7 h-1 bg-[#6F767E] my-1"></div>
              </div>
            )}
          </button>

          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image src="/logo.svg" alt="logo" width={180} height={40} />
            </Link>
          </div>

          {/* Profile Menu */}
          <div>
            <ProfileMenu />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mx-[10px] md:mx-1 lg:mx-[10px] my-[0px] bg-darkLight border border-none md:border-grayBorder rounded-[16px] overflow-x-clip overflow-y-auto flex-1 h-[calc(100dvh-20px)] md:h-[calc(100dvh-10px)] lg:h-[calc(100dvh-20px)] pt-16 sm:pt-0">
          {children}

          {/* Profile Menu when sidebar is closed */}
          {!isSidebarOpen && (
            <div className="absolute top-9 right-3 md:top-6 md:right-8">
              <ProfileMenu />
            </div>
          )}
        </div>  
      </div>
    </>
  );
}
