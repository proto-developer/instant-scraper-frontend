"use client"

import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";

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
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="relative flex items-center bg-[#1C1C1E] md:bg-black text-white">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } fixed inset-0 bg-black bg-opacity-75 z-50 sm:block sm:static mt-[15%] md:mt-0`}
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
          </Sidebar.Root>
        </div>

        {/* Button for toggling Sidebar */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden absolute top-12 left-5 z-50"
        >
          {isSidebarOpen ? (
            // Cross icon (X) when sidebar is open
            <div className="w-7 h-7 flex justify-center items-center">
              <div className="w-7 h-[3px] bg-[#6F767E] absolute rotate-45"></div>
              <div className="w-7 h-[3px] bg-[#6F767E] absolute -rotate-45"></div>
            </div>
          ) : (
            // Hamburger icon when sidebar is closed
            <div>
              <div className="w-7 h-1 bg-[#6F767E] my-1 mb-2"></div>
              <div className="w-7 h-1 bg-[#6F767E] my-1"></div>
            </div>
          )}
        </button>

        {/* Main Content Area */}
        <div className="m-[10px] bg-darkLight border border-none md:border-grayBorder rounded-[16px] flex-1 h-[calc(100dvh-20px)]">
          {/* Logo displayed when sidebar is closed on mobile */}
          {!isSidebarOpen && (
            <div className="flex justify-center mt-7 mb-0 sm:hidden">
              <Link href={"/"}>
                <Image src="/logo.svg" alt="logo" width={220} height={40} />
              </Link>
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
