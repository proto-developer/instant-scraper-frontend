import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

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
  return (
    <>
      <div className="flex items-center">
        <Sidebar.Root>
          <Image src="/logo.svg" alt="logo" width={170} height={40} />
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

        <div className="m-[10px] bg-darkLight border border-grayBorder rounded-[16px] flex-1 h-[calc(100dvh-20px)]">
          {children}
        </div>
      </div>
    </>
  );
}
